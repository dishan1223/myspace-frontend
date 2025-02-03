import searchIcon from '../../assets/searchIcon.svg';
import linkIcon from '../../assets/link.svg';

//
// TODO: This component must take data from database and render the data
//

function PostContainer() {
  return (
   <div className="my-4">
        <div className="flex items-center justify-between border-b-2">
            <div><h3 className="text-[#EFEFEF]">Latest Posts</h3></div>
            <div><button className='cursor-pointer'><img src={searchIcon} alt="search" /></button></div>
        </div>

        <div className='my-4'>
            <ul>
                <li>
                    <div className='w-full cursor-pointer flex items-center font-medium justify-between my-4'>
                        <div>
                            <a href="#"><h2 className='text-4xl'>Post Title</h2></a>
                            
                        </div>
                        <div>
                            <img src={linkIcon} />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default PostContainer;