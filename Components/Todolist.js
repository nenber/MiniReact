import { Component } from "../Component.js";
import { MiniReact } from "../MiniReact.js";
import { TodoItem } from "./TodoItem.js";

export class Todolist extends Component{

    constructor(props){
      super(props)
      this.state = {items: ["Oui","Bonjour","aaaa"], text : ''};  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return MiniReact.createElement("div", null, [
      MiniReact.createElement("h3", null, ["Qui ose me deranger?"]),
        MiniReact.createElement("ul", {}, this.state.items.map((item,index) =>
        MiniReact.createElement(TodoItem, {item: item}))),
          MiniReact.createElement("label", {htmlFor: "titre"}, "Qu'allez vous offrir au dieu de javascript ?"),
          MiniReact.createElement("input", {id: "titre", value: this.state.text}),
          MiniReact.createElement("button",{},["Offrande n°#" + (this.state.items.length + 1)
        ])
        
      
    ])
      }
}