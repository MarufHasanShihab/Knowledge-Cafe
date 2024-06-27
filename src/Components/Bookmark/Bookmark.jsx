
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
  return (
    <div>
      <h3 className='text-3xl mt-8 font-bold p-4 bg-slate-300 rounded-2xl'>{title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark
