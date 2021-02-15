import { Component } from "./Components/Component.js";
import { MiniReact } from "./MiniReact.js";

export class Navbar extends Component {
    propsTypes = {

    }
    render() {
        return MiniReact.createElement("nav", {}, [
            MiniReact.createElement("a", { href: "{/}" }, []),
            // MiniReact.createElement("a", { href: "/TodoList" }, []),
            // MiniReact.createElement("a", { href: "/Giphy" }, [])
        ]);
    }
    // propTypes = {
    //     name: { type: "string", enum: ["vert", "rouge", "bleu"] },
    // };

    // constructor(props) {
    //     super()
    //     this.state = {
    //         color: this.props.color || "vert"
    //     }
    // }

    // render() {
    //     return MiniReact.createElement("nav",
    //         {
    //             title: this.props.title,
    //             color: this.props.color
    //         }, [
    //         MiniReact.createElement("img", {
    //             onClick: () => history.replaceState({}, "Home"),
    //             alt: "navbar logo",
    //             src: "/logo.png"
    //         }),
    //         MiniReact.createElement("button", onclick = () => this.setState({ color: "rouge" }), { title: "Rouge" }),
    //         MiniReact.createElement("button", onclick = () => this.setState({ color: "vert" }), { title: "Vert" }),
    //         MiniReact.createElement("button", onclick = () => this.setState({ color: "bleu" }), { title: "Bleu" }),
    //         MiniReact.createElement("button", onclick = "onNavItemClick('/Todolist')"),
    //         MiniReact.createElement("button", onclick = "onNavItemClick('/Giphy')")
    //     ]
    //     );
    // }

}