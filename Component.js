import {MiniReact} from "./MiniReact.js";

export class Component 
{
  DOM = null;
    state = {};
    constructor(props) {
        this.props = props;
      }

    render() 
    {
        
    }

     shouldUpdate(props){
        return JSON.stringify(props) !== JSON.stringify(this.props) || props == null;
     }

     display(newProps = null){
      if (this.shouldUpdate(newProps)){

        if(newProps != null){

          this.props = newProps
        }

        this.DOM = this.render()
      }
      return this.DOM;
    }
    setState(newState){
      this.state ={...this.state,...newState}
      const newDOM = this.render()
      const parentNode = this.DOM.parentNode
      parentNode.replaceChild(newDOM,this.DOM)
      this.DOM = newDOM
    }
}



