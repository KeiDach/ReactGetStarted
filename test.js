class Hello extends React.Component {
    render() {
        // return (
        //     <div className="container">
        //         <h1>Getting Started</h1>
        //     </div>
        // );
        return (
            React.createElement("div",
                { className: "container" },
                React.createElement("h1", null, "Getting Started")
            )
        );
    }
}