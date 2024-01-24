import './blogs.css'
import BlogComponent from '../../Blog Component/BlogComponent'
import image2 from '../../../assets/Images/Image2.png'

const Blogs = () => {
  return (
    <section className='allBlogsSection'>
        <div className="allBlogsHeader">
            <h1>BLOGS</h1>
        </div>
        <div className="allBlogsGrid">
        <BlogComponent
          image={image2}
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
         <BlogComponent
          image={image2}
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
         <BlogComponent
          image={image2}
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
           <BlogComponent
          image={image2}
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
           <BlogComponent
          image={image2}
          blogName="Blog name"
          description="Our dedication to secure and ethical IT practices forms the foundation of lasting partnerships built on trust and transparency."
          readMore="Read more"
        />
        </div>
    </section>
  )
}

export default Blogs