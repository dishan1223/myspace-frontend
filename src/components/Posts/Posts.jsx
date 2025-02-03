import { Link } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
import PropTypes from 'prop-types'; // Import prop-types for validation

const fetcher = async (url) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error("API Fetch Error:", error.response || error.message);
        throw error;
    }
};

function Posts({ searchTerm }) {
    const { data: posts, error } = useSWR("http://localhost:3000/posts", fetcher);

    if (error) {
        return <p className="text-red-500">Failed to load posts. Check console for details.</p>;
    }
    if (!posts) return <p className="text-gray-500">Loading...</p>;

    // Sort the posts by id in descending order (highest to lowest)
    const sortedPosts = posts.sort((a, b) => b.id - a.id);

    // Filter posts based on the search term
    const filteredPosts = sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="my-4">
            {/* Display Filtered and Sorted Posts */}
            <ul>
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <li key={post.id} className="my-4">
                            <div className="border-b-[0.5px] py-4 border-neutral-400 w-full cursor-pointer flex items-center justify-start space-x-4">
                                <div className="flex-grow">
                                    <Link to={`/post/${post.id}`}>
                                        <h2 className="text-4xl">{post.title}</h2>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No posts found for the search term <span className='text-red-300'>{searchTerm}</span></li>
                )}
            </ul>
        </div>
    );
}

// Prop validation for Posts component
Posts.propTypes = {
    searchTerm: PropTypes.string.isRequired, // Ensure searchTerm is a string and is required
};

export default Posts;
