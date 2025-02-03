import Layout from "../../Layouts/Layout";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) =>{
    try{
        const res = await axios.get(url)
        return res.data;
    } catch (error) {
        console.log(`API Fething Error: ${error.response || error.message}`);
        throw error;
    }
}

function ReadingPage() {
    const { id } = useParams();
    const {data: post, error} = useSWR(`http://localhost:3000/posts/${id}`, fetcher)

    if(error){
        return <p className="text-red-500">Failed to load post.</p>
    }
    if(!post){
        return <p className="text-gray-500">Loading....</p>
    }

    return (
        <Layout>
            <p>{post.username}</p>
            <h1>{post.title}</h1>
            <p>{post.post}</p>
        </Layout>
    )
}

export default ReadingPage;