import "./blogs.css";
// import BlogComponent from "../../Blog Component/BlogComponent";
import image2 from "../../../assets/Images/Image2.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="allBlogsSection">
      <div className="allBlogsHeader">
        <h1>BLOGS</h1>
      </div>
      <div className="allBlogsGrid">
        <div className="blogComponentBlogs">
          <img src={image2} alt="" />
          <div className="blogsDestNameBlogs">
            <h2>Blog name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis ducimus hic eum deleniti similique et dignissimos, ipsum
              repellendus, dolorum omnis placeat quia quos. Delectus distinctio
              quas cumque ipsa soluta!
            </p>
          </div>
          <Link to="/blogDetail">
            <span>Read more</span>
          </Link>
        </div>
        <div className="blogComponentBlogs">
          <img src={image2} alt="" />
          <div className="blogsDestNameBlogs">
            <h2>Blog name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis ducimus hic eum deleniti similique et dignissimos, ipsum
              repellendus, dolorum omnis placeat quia quos. Delectus distinctio
              quas cumque ipsa soluta!
            </p>
          </div>
          <Link to="/blogDetail">
            <span>Read more</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
