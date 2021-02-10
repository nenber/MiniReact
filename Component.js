import {MiniReact} from "./MiniReact.js";

export class Component 
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

     display(props){
      this.shouldUpdate()
    }
}



