import linkIcon from '../../assets/link.svg';

//
// TODO: This component must take data from database and render the data
// Using axiox.
// maybe i will use swr
//


function Posts() {
  return (
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
  )
}

export default Posts