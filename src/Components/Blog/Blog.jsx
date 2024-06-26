
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover_img, author, posted_date, reading_time} = blog
    return (
        <div>
            <img src={cover_img}/>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <img className='w-16' src={author.author_img} alt="" />
                    <div>
                        <h2>{author.author_name}</h2>
                        <h3>{posted_date}</h3>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2>{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;