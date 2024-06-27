import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.key} blog={blog} handleBookmarks={handleBookmarks} />)
            }
        </div>
    );
}

Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
}
export default Blogs;