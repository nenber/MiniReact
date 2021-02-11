import { Component } from "../Component.js";
import { MiniReact } from "../MiniReact.js";


export class TodoItem extends Component {
  constructor(props){
    super(props)
  //  this.props = {items:{} }
  }
        render() {
          return MiniReact.createElement("li",
            {},
            [this.props.item]
        );
      }
  }
  