import './App.css'
import Nav from './components/Nav.tsx'
import {Route, Routes} from "react-router"
import Home from "./components/Home.tsx"
import About from "./components/About.tsx"
import Contact from "./components/Contact.tsx"
function App() {
    return(
        <div className="App">
        <Nav/>
        <Routes>
            <Route path="home" element={<Home />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="about" element={<About />}/>
        </Routes>
        </div>
    )
}

export default App
