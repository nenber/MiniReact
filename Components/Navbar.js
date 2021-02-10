import MiniReact from "../MiniReact";

export class Navbar extends Component
{
    propTypes = {
        name: { type: "string", enum: ["vert", "rouge", "bleu"] },
      };

    constructor(props){
        super()
        this.state = {
            color: this.props.color || "vert"
        }
    }
    
    render()
    {
        return MiniReact.createElement("nav",
            {   title: this.props.title,
                color: this.props.color
            },[
                MiniReact.createElement("img", {onClick:()=>history.replaceState({},"Home"),
                alt: "navbar logo",
                src:"/logo.png"}),
                MiniReact.createElement("button", onclick: () =>this.setState({color: "rouge"}), {title: "Rouge"}),
                MiniReact.createElement("button", onclick: () =>this.setState({color: "vert"}), {title: "Vert"}),
                MiniReact.createElement("button", onclick: () =>this.setState({color: "bleu"}),{title: "Bleu"}),
                MiniReact.createElement("button", onclick="onNavItemClick('/Todolist')"),
                MiniReact.createElement("button", onclick="onNavItemClick('/Giphy')")
            ]
        );
    }
    
}