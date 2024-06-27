import { FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';

const Blog = ({blog, handleBookmarks, handleMarksAsRead}) => {
    const {id, title, cover_img, author, posted_date, reading_time, has_tag} = blog
    return (
        <div className='mb-8'>
            <img src={cover_img}/>
            <div className='flex justify-between items-center mt-8'>
                <div className='flex gap-3'>
                    <img className='w-12 h-12' src={author.author_img}/>
                    <div>
                        <h2 className="text-neutral-900 text-2xl font-bold font-['Exo 2'] leading-[38.40px]">{author.author_name}</h2>
                        <h3 className="text-neutral-900/opacity-60 text-base font-semibold font-['Exo 2'] leading-relaxed">{posted_date}</h3>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-right text-neutral-900/opacity-60 text-xl font-medium font-['Exo 2']">{reading_time} min read</span>
                    <FaBookmark onClick={()=>handleBookmarks(blog)} className="cursor-pointer text-2xl hover:text-red-500"/>
                </div>
            </div>
            <h2 className="w-[737px] text-neutral-900 text-[40px] font-bold font-['Exo 2'] leading-[64px]">{title}</h2>
            <div>
            {
                has_tag.map((tag, i)=> <span key={i} className="mr-4"><a href="#">#{tag}</a></span>)
            }
            </div>
            <button onClick={()=>handleMarksAsRead(id, reading_time)} className="text-indigo-600 text-xl font-semibold font-['Exo 2'] underline">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMarksAsRead: PropTypes.func.isRequired
}

export default Blog;