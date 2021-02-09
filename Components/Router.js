class Router extends Component {
    state = {
      path: "/home",
    };
  
    render() {
      return React.createElement("div", {}, [
        React.createElement(
          "button",
          { onClick: () => this.setState({ path: "/accueil" }) },
          ["Accueil"]
        ),
        React.createElement(
          "button",
          { onClick: () => this.setState({ path: "/todolist" }) },
          ["ToDoList"]
        ),
        React.createElement(
            "button",
            { onClick: () => this.setState({ path: "/gifpage" }) },
            ["GifPage"]
          ),
        path === "/accueil" && React.createElement(Accueil),
        path === "/todolist" && React.createElement(ToDoList),
        path === "/gifpage" && React.createElement(GifPage),
      ]);
    }
  }
  