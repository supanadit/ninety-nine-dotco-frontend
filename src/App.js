import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Background from "./components/Background";

function App() {
    return (
        <div className="App">
            <Background/>
            <Home/>
        </div>
    );
}

export default App;
