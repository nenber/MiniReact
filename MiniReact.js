import { util } from "./util.js";

export let MiniReact = {

     createElement: function(elementName, props, children){   
      let element;
      if (typeof(elementName) === "string") {
        element = document.createElement(elementName);
        for (let attribute in props) {
          element.setAttribute(attribute, props[attribute]);
        }

        for (let subElement of children) {
          if (typeof subElement === "string")
            subElement = document.createTextNode(
              subElement /**.interpolate(props) */
            );
          element.appendChild(subElement);
        }
      } /** component **/ else {
      if (!type_check(props, elementName.propTypes)) throw new TypeError();
        return elementName.display(props);
    }

    return element;

      }
  }
  
    

    
