import "./blogComponent.css";
import {Link} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const BlogComponent = ({ image, blogName, description, readMore }) => {
  return (
    <div className="blogComponent">
      <img src={image} alt="" />
      <div className="blogsDestName">
        <h2>{blogName}</h2>
        <p>{description}</p>
      </div>
      <Link to='/blogDetail'>
      <span>{readMore}</span>
      </Link>
    </div>
  );
};

export default BlogComponent;
