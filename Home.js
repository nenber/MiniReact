import { Component } from "./Component.js";
import { MiniReact } from "./MiniReact.js";

export class Home extends Component{
    propsTypes={

    }
    render(){
        return MiniReact.createElement("h1", {}, ["KMARK LE DIEU",
        MiniReact.createElement("img", {src:"./Components/KMARK.jpeg"},[])
        ]);
    }
}