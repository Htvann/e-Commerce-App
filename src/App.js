import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ShoppingCart from "./Pages/ShoppingCart";
function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shopping" element={<ShoppingCart/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
