// import BlogComponent from "../../Blog Component/BlogComponent";
import "./blogSection.css";
import image1 from "../../../assets/Images/Image1.png";
import image2 from "../../../assets/Images/Image2.png";
import image3 from "../../../assets/Images/Image3.png";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="blogSection">
      <div className="sectionHead">
        <h2>Blogs</h2>
        <h1>Useful to know</h1>
      </div>
      <div className="sectionMain">
        <div className="blogSectionComponent">
          <div className="blogComponent">
            <img src={image1} alt="" />
            <div className="blogsDestName">
              <h2>Blog name</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                fugit doloremque nihil soluta. Nobis ratione, a velit deleniti
                odit iste voluptates adipisci veniam, possimus, aliquam
                delectus? Nulla deleniti ea veritatis.
              </p>
            </div>
            <Link to="/blogDetail">
              <span>Read more</span>
            </Link>
          </div>

          <div className="blogComponent">
            <img src={image3} alt="" />
            <div className="blogsDestName">
              <h2>Blog name</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                fugit doloremque nihil soluta. Nobis ratione, a velit deleniti
                odit iste voluptates adipisci veniam, possimus, aliquam
                delectus? Nulla deleniti ea veritatis.
              </p>
            </div>
            <Link to="/blogDetail">
              <span>Read more</span>
            </Link>
          </div>

          <div className="blogComponent">
            <img src={image2} alt="" />
            <div className="blogsDestName">
              <h2>Blog name</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                fugit doloremque nihil soluta. Nobis ratione, a velit deleniti
                odit iste voluptates adipisci veniam, possimus, aliquam
                delectus? Nulla deleniti ea veritatis.
              </p>
            </div>
            <Link to="/blogDetail">
              <span>Read more</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="buttonSeeAll">
        <Link to="/blogs">
          <button>See all</button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
