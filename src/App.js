import "./App.css";
import "./scss/style.scss";
import Landingpage from "./components/Landingpage";
import Socialproof from "./components/Socialproof";
import Popularcourses from "./components/Popularcourses";
import Authorspage from "./components/Authorspage";
import Aboutus from "./components/Aboutus";
import Whyus from "./components/Whyus";
import Testimonials from "./components/Testimonialspage";
import Footer from "./components/Footer"
function App() {
  return(
    <>
    <Landingpage/>
    <Socialproof/>
    <Popularcourses/>
    <Authorspage/>
    <Aboutus/>
    <Whyus/>
    <Testimonials/>
    <Footer/>
    </>

  ) 
}

export default App;
