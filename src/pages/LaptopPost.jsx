import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import LaptopService from "../API/LaptopService";
import Loading from "../component/UI/Loading/Loading";
import CommentList from "../component/CommentList";
import CommentItem from "../component/CommentItem";


const LaptopPost = () => {

    const params = useParams();

    const [post, setPost] = useState({});

    const [fetchPostById, isLoading, error  ] =  useFetching(async () => {
        const response = await LaptopService.getById(params.id);
        setPost(response.data)
    })

    const [comments, setComments] = useState([]);

    const [fetchComments, isComLoading, errorCom  ] =  useFetching(async () => {
        const response = await LaptopService.getByComments(params.id);
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById().then()
        fetchComments().then()
    }, []);

    console.log(comments)


    return (
        <div>
            {error
                ? <h1>{error}</h1>
                :isLoading
                    ? <Loading/>
                    : <h1>{post.id}. {post.title}</h1>
            }

        <h1 style={{textAlign:'center'}}>Comments</h1>
            {
                isComLoading
                    ? <Loading/>
                    : <CommentList comments={comments}/>
            }
        </div>
)};

export default LaptopPost;