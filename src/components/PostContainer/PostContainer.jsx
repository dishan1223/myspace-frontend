import searchIcon from '../../assets/searchIcon.svg';
import Posts from '../Posts/Posts';


function PostContainer() {
  return (
   <div className="my-2">
        <div className="flex items-center justify-between border-b-[0.5px] border-neutral-400">
            <div><h3 className="text-[#EFEFEF]">Latest Posts</h3></div>
            <div><button className='cursor-pointer'><img src={searchIcon} alt="search" /></button></div>
        </div>
        <Posts />
        
    </div>
  )
}

export default PostContainer;