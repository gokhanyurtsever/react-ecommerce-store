import Instagram from "./components/Instagram";
import Banner from "./components/Banner"
import CommentsSlider from "./components/CommentsSlider"
import Features from "./components/Features"
import Header from "./components/Header"
import LatestPosts from "./components/LatestPost"
import Navbar from "./components/Navbar"
import ProductSlider from "./components/ProductSlider"
import Subscribe from "./components/Subscribe"
import { BlogPosts, comments, instaPosts, iphones } from "./data"

function App() {
  

  return (
    <>
      <Navbar/>
      <Header />
      <Features />
      <ProductSlider title="mobile & tablets" data={iphones} delay={7000}
       />
       <Banner />
       <LatestPosts 
       title="latest posts" 
       posts={BlogPosts}
       />
       <CommentsSlider comments={comments} delay={5000} />
       <Subscribe />
       <Instagram images={instaPosts} />
    </>
  )
}

export default App
