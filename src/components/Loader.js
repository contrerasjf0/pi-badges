import React, { Component } from 'react';

import '../statics/scss/components/Loader.scss';

class Loader extends Component {
    render() {
        return (
        <div className="lds-grid">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
        );
    }
}

export default Loader;