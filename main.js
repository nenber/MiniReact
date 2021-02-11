import { MiniReact } from "./MiniReact.js";
import { ReactDOM } from "./ReactDOM.js";
import { Home } from "./Home.js";
import { Todolist } from "./Components/Todolist.js";
import { Gify } from "./Gify.js";



ReactDOM.render(
    MiniReact.createElement(Gify, {}),
    document.getElementById('root')
)