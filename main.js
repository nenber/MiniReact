import { MiniReact } from "./MiniReact.js";
import { ReactDOM } from "./ReactDOM.js";
import { Home } from "./Home.js";
import { Todolist } from "./Components/Todolist.js";



ReactDOM.render(
    MiniReact.createElement(Todolist,{}),
    document.getElementById('root')
)