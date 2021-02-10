import { MiniReact } from "./MiniReact.js";
import { ReactDOM } from "./ReactDOM.js";
import { Home } from "./Home.js";

ReactDOM.render(
    MiniReact.createElement("h1",null,"Bienvenue dans le temple du JS"),
    document.getElementById('root')
)