// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachOne} = props
  const {title, description, publishedDate} = eachOne
  return (
    <li className="listItemContainer">
      <div className="listItem">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
