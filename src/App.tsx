import Banner from "./components/Banner"
import Features from "./components/Features"
import Header from "./components/Header"
import LatestPosts from "./components/LatestPost"
import Navbar from "./components/Navbar"
import ProductSlider from "./components/ProductSlider"
import { BlogPosts, iphones } from "./data"

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
    </>
  )
}

export default App
