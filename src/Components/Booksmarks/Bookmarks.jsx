import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/2 p-4 bg-gray-200">
            <h1 className="text-3xl font-bold text-center ">BookMarks Blogs: {bookmarks.length}</h1>
            {
                
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired
}

export default Bookmarks;