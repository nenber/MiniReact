import { type_check } from "./util.js";

const events = ["click", 'change', "input", "onkeyup"]

export let MiniReact = {

    createElement: function(elementName, props, children = []) {
        let element;
        console.log("CreateElement")
        if (typeof(elementName) === "string") {
            // console.log(elementName)
            // console.log("children =>")
            // console.log(children)
            // console.log("props =>")
            // console.log(props)
            element = document.createElement(elementName);
            for (let attribute in props) {
                if (events.includes(attribute)) {
                    element.addEventListener(attribute, props[attribute])
                } else {
                    element.setAttribute(attribute, props[attribute]);
                }
            }

            for (let subElement of children) {
                if (typeof subElement === "string") {
                    subElement = document.createTextNode(
                        subElement /**.interpolate(props) */
                    );
                }
                element.appendChild(subElement);
            }
            return element;

        } /** component **/
        else {
            if (typeof(elementName.propsType) != "undefined" && !type_check(props, elementName.propsType)) throw new TypeError();
            elementName = new elementName(props)
            return elementName.display();
        }

    }
}