import Features from "./components/Features"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ProductSlider from "./components/ProductSlider"
import { iphones } from "./data"

function App() {
  

  return (
    <>
      <Navbar/>
      <Header />
      <Features />
      <ProductSlider title="mobile & tablets" data={iphones} delay={7000}
       />
    </>
  )
}

export default App
