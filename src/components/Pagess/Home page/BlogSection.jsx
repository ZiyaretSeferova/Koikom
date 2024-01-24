import BlogComponent from "../../Blog Component/BlogComponent";
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
          <BlogComponent
            image={image1}
            blogName="Blog name"
            description="Our dedication to secure and ethical IT practices forms the foundation of lasting partnerships built on trust and transparency."
            readMore="Read more"
          />
          <BlogComponent
            image={image3}
            blogName="Blog name"
            description="Our dedication to secure and ethical IT practices forms the foundation of lasting partnerships built on trust and transparency."
            readMore="Read more"
          />
          <BlogComponent
            image={image2}
            blogName="Blog name"
            description="Our dedication to secure and ethical IT practices forms the foundation of lasting partnerships built on trust and transparency."
            readMore="Read more"
          />
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
