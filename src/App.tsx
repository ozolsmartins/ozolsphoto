import './App.css'
import Nav from './components/Nav.tsx'
import {Route, Routes} from "react-router"
import Home from "./components/Home.tsx"
import Gallery from "./components/Gallery.tsx"
import Contact from "./components/Contact.tsx"
import {BrowserRouter} from "react-router-dom"
function App() {
    return(
        <BrowserRouter>
            <div className="App">
                <Nav/>
                <Routes>
                    <Route path="home" element={<Home/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="gallery" element={<Gallery/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
