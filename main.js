import { MiniReact } from "./MiniReact.js";
import { ReactDOM } from "./ReactDOM.js";
import { Home } from "./Home.js";
import { ColorChange } from "./Components/ColorChange.js"
import { Gify } from "./Gify.js";

ReactDOM.render(
    MiniReact.createElement("section", { id: "nav" }, [
        MiniReact.createElement("section", { class: "route", id: "home" }, ["Home"]),
        MiniReact.createElement("section", { class: "route", id: "colorChange" }, ["ColorChange"]),
        MiniReact.createElement("section", { class: "route", id: "gify" }, ["Gify"]),
    ]),
    document.getElementById('root')
)

ReactDOM.render(
    MiniReact.createElement("div", { id: "content" }, []),
    document.getElementById('root')
)

function select_tab(id) {
    document.querySelectorAll(".route").forEach(
        item => item.classList.remove('selected'));
    document.querySelectorAll("#" + id).forEach(
        item => item.classList.add('selected'));
}

function load_content(id) {
    console.log("Loading content for {" + id + "}");
    document.querySelector("#content").innerHTML = ''
    if (id === "home") {
        ReactDOM.render(
            MiniReact.createElement(Home, {}, []),
            document.getElementById('content')
        )
        // console.log("here bar " + window.locationbar)
        // console.log("here " + window.location)
        // console.log("here pathname" + window.location.pathname)

    }
    if (id === "colorChange") {
        ReactDOM.render(
            MiniReact.createElement(ColorChange, {}, []),
            document.getElementById('content')
        )
        console.log("here bar " + window.locationbar)
        console.log("here" + window.location)
        console.log("here pathname" + window.location.pathname)
    }
    if (id === "gify") {
        ReactDOM.render(
            MiniReact.createElement(Gify, {}, []),
            document.getElementById('content')
        )
        console.log("here bar " + window.locationbar)
        console.log("here" + window.location.href)
        console.log("here pathname" + window.location.pathname)
    }

}

function push(event) {
    let id = event.target.id;
    select_tab(id);
    document.title = id;
    window.history.pushState({ id }, `${id}`,
        `/${id}`);
    window.location.replace("/" + id)
    load_content(id);
}

window.onload = event => {
    // Add history push() event when boxes are clicked
    window["home"].addEventListener("click",
        event => push(event))
    window["gify"].addEventListener("click",
        event => push(event))
    window["colorChange"].addEventListener("click",
        event => push(event))
}
// Listen for PopStateEvent
// (Back or Forward buttons are clicked)
window.addEventListener("popstate", event => {
    let stateId = event.state.id;
    select_tab(stateId);
    // Load content for this tab/page
    load_content(stateId);
});


