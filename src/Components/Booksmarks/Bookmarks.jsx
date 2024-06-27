import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/2 p-4 bg-gray-200">
            <h2 className="text-indigo-600 text-2xl font-bold font-['Exo 2'] leading-[38.40px] text-center mb-4">Spent time on read : {readingTime} min</h2>
            <h1 className="text-3xl font-bold text-center ">BookMarks Blogs: {bookmarks.length}</h1>
            {
                
                bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark} readingTime={readingTime} />)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime : PropTypes.number.isRequired
}

export default Bookmarks;