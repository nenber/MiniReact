import { MiniReact } from "./MiniReact.js";
import { ReactDOM } from "./ReactDOM.js";
import { Home } from "./Home.js";

Object.prototype.propsType = {};


ReactDOM.render(
    MiniReact.createElement(Home, {}, []),
    document.getElementById('root')
)
