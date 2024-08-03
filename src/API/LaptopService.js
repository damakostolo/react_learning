import axios from "axios";

export default class LaptopService {
    static async getAll(limit = 10, page = 1) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit: limit,
                _page: page
            }
        });
    }

    static async getById(id) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id
        )}

    static async getByComments(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`
        )}

}
