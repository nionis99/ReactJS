import React from "react";

export default class Body extends React.PureComponent {
    render() {
        return React.createElement('div', {className: 'App'}, this.props.children);
    }
}