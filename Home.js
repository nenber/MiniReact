import Component from "./Component";
import MiniReact from "./MiniReact";

export class Home extends Component{
    render(){
        return MiniReact.createElement("img", src="./KMARK.jpeg")
    }
}