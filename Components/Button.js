class Button extends Component
{
    render()
    {
        return MiniReact.createElement(
            "button",
            { onClick: () => setState({}), title:this.props.title},
            ["{{title}}"]
        );
    }
    
}