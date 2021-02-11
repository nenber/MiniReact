import { Component } from "../Component.js";
import {MiniReact} from "../MiniReact.js";

export class Navbar extends Component
{
    propTypes = {
        name: { type: "string", enum: ["vert", "rouge", "bleu"] },
      };

    constructor(props){
        super(props)
        this.setColor.bind(this)
        this.state = {
            color: this.props.color || "vert"
        }
    }
    setColor =(event) =>{
        this.setState({color: event.target.getAttribute("color")})
        console.log("setcolor")
    }
    
    render()
    {
        return MiniReact.createElement("nav",
            {   
                style: "background-color:" + this.state.color
            },[
                MiniReact.createElement("img", {onClick:()=>history.replaceState({},"Home"),
                alt: "navbar logo",
                src:"/logo.png"}),
                MiniReact.createElement("button", {color: "red",click: this.setColor }, ["Rouge"]),
                MiniReact.createElement("button", {color: "green",click: this.setColor }, ["Vert"]),
                MiniReact.createElement("button", {color: "blue",click: this.setColor }, ["Bleu"])
            ]
        );
    }
    
}