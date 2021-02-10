import { Component } from "./Component.js";
import { MiniReact } from "./MiniReact.js";

export class Home extends Component{
    render(){
        return MiniReact.createElement("h1", null, ["KARL",
        MiniReact.createElement("img", null,['src="/MARK.jpeg"'])
        ]);
    }
}