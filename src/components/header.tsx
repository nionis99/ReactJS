import React from "react";

export default class Header extends React.Component {
    render() {
        return <header className="App-header">{this.props.children}</header>;
    }
}