import "./App.css";
import "./scss/style.scss";
import courseimg from "../src/image/image118.png"
import Coursecard from "./components/Coursecard"
function App() {
  return(
<Coursecard imgSrc={courseimg} courseAuthor={"Orkhan"} courseLevel={"Beginner"} courseModules={"fdb"} coursePrice={"128$"} courseTime={"44min"} courseTitle={"test"}/>
  ) 
}

export default App;
