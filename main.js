import { MiniReact } from "./MiniReact.js";
import { ReactDOM } from "./ReactDOM.js";
import * as Home from "./Home.js";
const homePage = new Home();
ReactDOM.render(
    MiniReact.createElement("nav", null, []),
    document.getElementById('root')
);
ReactDOM.render(
    MiniReact.createElement("h1", null, "Bienvenue dans le temple du JS"),
    document.getElementById('root')
);
