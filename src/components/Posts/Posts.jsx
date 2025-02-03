import linkIcon from '../../assets/link.svg';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error("API Fetch Error:", error.response || error.message);
        throw error;
    }
};

function Posts() {
    const { data: posts, error } = useSWR("http://localhost:3000/posts", fetcher);

    if (error) {
        return <p className="text-red-500">Failed to load posts. Check console for details.</p>;
    }
    if (!posts) return <p className="text-gray-500">Loading...</p>;

    return (
        <div className="my-4">
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="my-4">
                        <div className="border-b-[0.5px] py-4 border-neutral-400 w-full cursor-pointer flex items-center justify-start space-x-4">
                            <div className="flex-grow">
                                <a href="#"><h2 className="text-4xl">{post.title}</h2></a>
                            </div>
                            <div>
                                <img src={linkIcon} alt="Link Icon" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
