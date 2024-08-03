import '../styles/App.css';
import {useEffect, useRef, useState} from "react";
import LaptopList from "../component/LaptopList";
import LaptopForm from "../component/LaptopForm";
import LaptopFilter from "../component/LaptopFilter";
import {useSearchLaptopsAndSort} from "../hooks/useHookFilter";
import LaptopService from "../API/LaptopService";
import Loading from "../component/UI/Loading/Loading";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import {usePage} from "../hooks/usePage";
import MyPages from "../component/UI/MyPages/MyPages";
import {useObserver} from "../hooks/useObserver";

function Laptop() {

    const [laptops, setLaptops] = useState([])
    const [filter, setFilter] = useState({sort:'', search:''});
    const sortAndFilter = useSearchLaptopsAndSort(laptops, filter.sort, filter.search);
    const [totalPages, setTotalPages] = useState(0);
    const [pageLim, setPageLim] = useState({limit: 10 , page:1});

    const [fetchLaptops, isLaptopsLoading, errorLaptops] = useFetching(async () =>{
        const response = await LaptopService.getAll(pageLim.limit,pageLim.page)
        setLaptops([...laptops, ...response.data])
        const totalObject = response.headers['x-total-count']
        setTotalPages(getPageCount(totalObject, pageLim.limit))
    })
    const lastPost = useRef()

    const pagesArray = usePage(totalPages)

    useObserver(lastPost, pageLim.page < totalPages , isLaptopsLoading, ()=>{
            setPageLim({...pageLim, page: pageLim.page + 1 })
        })

    useEffect(() => {
        fetchLaptops().then(r => r)
    }, [pageLim.page]);

    const removeLaptops = (laptop) => {
        setLaptops(laptops.filter(l => l.id !== laptop.id))
    }

    const addNewLaptop = (laptop) => {
        setLaptops([...laptops, laptop])
    }

    const changePage = (p) =>{
        setPageLim({...pageLim, page:p})
    }

    return (
        <div className="Laptop">
            <LaptopForm addNewLaptop={addNewLaptop}/>
            <hr style={{margin: '10px 0'}}/>
            <LaptopFilter filter={filter} setFilter={setFilter}/>
            <hr style={{margin: '10px 0'}}/>

            {errorLaptops &&
                <h1 style={{textAlign:'center'}}>ERROR {errorLaptops}</h1>
            }
            {isLaptopsLoading &&
                <Loading/>
        }
            <LaptopList laptops={sortAndFilter} removeLaptops={removeLaptops}/>
            <div style={{height:'10px'}} ref={lastPost}></div>
            <MyPages pagesArray={pagesArray} changePage={changePage}/>
        </div>
    );
}

export default Laptop;
