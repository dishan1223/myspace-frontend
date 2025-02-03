import { useState } from 'react';
import searchIcon from '../../assets/searchIcon.svg';
import Posts from '../Posts/Posts';

function PostContainer() {
    const [showSearch, setShowSearch] = useState(false); // State to show or hide the search bar
    const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term

    return (
        <div className="my-2">
            <div className="flex items-center justify-between border-b-[0.5px] border-neutral-400">
                <div><h3 className="text-gray-200 font-medium">Latest Posts</h3></div>
                <div>
                    <button className="cursor-pointer" onClick={() => setShowSearch(!showSearch)}>
                        <img src={searchIcon} alt="search" />
                    </button>
                </div>
            </div>

            {/* Conditionally render the search bar */}
            {showSearch && (
                <div className="my-4">
                    <input
                        type="text"
                        className="p-2 w-full border rounded"
                        placeholder="Search posts by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}

            {/* Pass the search term to the Posts component */}
            <Posts searchTerm={searchTerm} />
        </div>
    );
}

export default PostContainer;
