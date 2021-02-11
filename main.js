import { MiniReact } from "./MiniReact.js";
import { ReactDOM } from "./ReactDOM.js";
import { Home } from "./Home.js";
import { Todolist } from "./Components/Todolist.js";
import { Navbar } from "./Components/Navbar.js";



ReactDOM.render(
    MiniReact.createElement(Navbar,{}),
    document.getElementById('root')
)