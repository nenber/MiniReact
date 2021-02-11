import { MiniReact } from "./MiniReact.js";
import { ReactDOM } from "./ReactDOM.js";
import { Home } from "./Home.js";
import { Todolist } from "./Components/Todolist.js";
import { Gify } from "./Gify.js";
import { Navbar } from "./Components/Navbar.js";



ReactDOM.render(
    MiniReact.createElement("div",{},[MiniReact.createElement(Gify, {}),MiniReact.createElement(Navbar,{})]),
    
    
    document.getElementById('root')
)