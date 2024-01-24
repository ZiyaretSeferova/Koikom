import { Routes, Route, useLocation } from "react-router-dom";
import React from 'react'
import BlogSection from '../src/components/Pagess/Home page/BlogSection'
import Blogs from "./components/Pagess/Blog page/Blogs";
import BlogDetail from "./components/Pagess/Blog Detail/BlogDetail";

function Routers() {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return (
      <>
        <Routes>
          <Route path="/" element={<BlogSection/>} />
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogDetail" element={<BlogDetail/>}/>
        </Routes>
      </>
    );
  }
  
  export default Routers;