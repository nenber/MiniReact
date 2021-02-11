import { type_check } from "./util.js";

export let MiniReact = {

  createElement: function (elementName, props, children) {
    let element;
    if (typeof (elementName) === "string") {
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
      console.log(elementName)
      if (!type_check(props, elementName.propsType)) throw new TypeError();
      elementName = new elementName()
      return elementName.render();
    }
    return element;

  }
}




