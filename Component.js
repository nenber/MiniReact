import MiniReact from "./MiniReact";

export default class Component 
{
    state = {};
    constructor(props) {
        this.props = props;
      }

    render() 
    {
        
    }

     shouldUpdate(prevprops, nextprops){
        return JSON.stringify(prevprops) !== JSON.stringify(nextprops);
     }
}



