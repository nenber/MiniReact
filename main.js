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
    // Remove selected class from all buttons
    document.querySelectorAll(".route").forEach(
        item => item.classList.remove('selected'));
    // select clicked element (visually)
    document.querySelectorAll("#" + id).forEach(
        item => item.classList.add('selected'));
}

function load_content(id) {
    console.log("Loading content for {" + id + "}");
    document.querySelector("#content").innerHTML
        = 'Content loading for /' + id + '...';
    // Update text "Content loading for {id}..."
    // Here you would do content loading magic...
    // Perhaps run Fetch API to update resources
    document.querySelector("#content").innerHTML = ''
    if (id === "home") {
        ReactDOM.render(
            MiniReact.createElement(Home, {}, []),
            document.getElementById('content')
        )
    }
    if (id === "colorChange") {
        ReactDOM.render(
            MiniReact.createElement(ColorChange, {}, []),
            document.getElementById('content')
        )
    }
    if (id === "gify") {
        ReactDOM.render(
            MiniReact.createElement(Gify, {}, []),
            document.getElementById('content')
        )
    }


}


function push(event) {
    // Get id attribute of the button or link clicked
    let id = event.target.id;
    // Visually select the clicked button/tab/box
    select_tab(id);
    // Update Title in Window's Tab
    document.title = id;
    // Load content for this tab/page
    load_content(id);
    // Finally push state change to the address bar
    window.history.pushState({ id }, `${id}`,
        `/${id}`);
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
    // Grab the history state id
    let stateId = event.state.id;
    // Show clicked id in console (just for fun)
    console.log("stateId = ", stateId);
    // Visually select the clicked button/tab/box
    select_tab(stateId);
    // Load content for this tab/page
    load_content(stateId);
});
