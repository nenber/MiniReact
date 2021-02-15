// import { MiniReact } from "./MiniReact.js";
// import { ReactDOM } from "./ReactDOM.js";
// import { Home } from "./Home.js";
// import { ColorChange } from "./Components/ColorChange.js"

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
    // Update text "Content loading for {id}..."
    // Here you would do content loading magic...
    // Perhaps run Fetch API to update resources
    document.querySelector("#content").innerHTML
        = 'Content loading for /' + id + '...';
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
        `/page/${id}`);
}
window.onload = event => {
    // Add history push() event when boxes are clicked
    window["home"].addEventListener("click",
        event => push(event))
    window["about"].addEventListener("click",
        event => push(event))
    window["gallery"].addEventListener("click",
        event => push(event))
    window["contact"].addEventListener("click",
        event => push(event))
    window["help"].addEventListener("click",
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

// const navigateTo = url => {
//     history.pushState(null, null, null);
//     router()
// };

// const router = async () => {
//     const routes = [
//         { path: "/", view: () => console.log(Homepage) },
//         { path: "/todolist", view: () => console.log(Homepage2) },
//         { path: "/giphy", view: () => console.log(Homepage3) }
//     ];


//     const potentialMatches = routes.map(route => {
//         return {
//             route: route,
//             isMatch: location.pathname === route.path
//         };
//     });

//     let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

//     if (!match) {
//         match = {
//             route: routes[0],
//             isMatch: true
//         }
//     }
//     console.log(match.route.view());
//     document.addEventListener("DOMContentLoaded", () => {
//         document.body.addEventListener("click", e => {
//             if (e.target.matches('[data-link]')) {
//                 e.preventDefault();
//                 navigateTo(e.target.href);
//             }
//         });
//         router();
//     });
// }
// Object.prototype.propsType = {};


// ReactDOM.render(
//     MiniReact.createElement(Navbar, {}, []),
//     document.getElementById('root')
// )

// ReactDOM.render(
//     MiniReact.createElement(Home, {}, []),
//     document.getElementById('root')
// )
// instancie les routes
//add routes
//add event on click