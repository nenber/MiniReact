import Component from "../Component"
import MiniReact from "../MiniReact";
import { TodoItem } from "./TodoItem";

export class ToDoList extends Component{

    constructor(props){
        super()
        this.state = {
            items: [],
            text : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return  MiniReact.createElement("div",null,
                MiniReact.createElement("h3",null,
                "Qui ose me déranger ?",
                MiniReact.createElement(TodoItem, {items: this.state.items}),
                MiniReact.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    MiniReact.createElement(
                      "label",
                      { htmlFor: "titre" },
                      "Qu'aller vous offrir pour calmer le dieu du Javascript?"
                    ),
                    MiniReact.createElement("input", {
                      id: "titre",
                      onChange: this.handleChange,
                      value: this.state.text
                    }),
                    MiniReact.createElement(
                      "button",
                      null,
                      "Offrande n°#",
                      this.state.items.length + 1
                    )
                  )
                )
        );
      }

      handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const offrande = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(offrande),
          text: ''
        }));
      }
}