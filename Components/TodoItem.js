import { Component } from "../Component.js";

export class TodoItem extends Component {
        render() {
          return MiniReact.createElement(
            "ul",
            null,
            this.props.items.map(item => MiniReact.createElement(
              "li",
              { key: item.id },
              item.text
            ))
          );
        }
      }
