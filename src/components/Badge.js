import React from 'react';

import confLogo from '../statics/images/badge-header.svg';
import userAvatar from '../statics/images/user.jpg'

import '../statics/scss/components/Badge.scss';

class Badge extends React.Component {
    render() {
        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src={userAvatar} alt="Avatar" />
            <h1>
                Frank <br /> Contreras
            </h1>
            </div>

            <div className="Badge__section-info">
                <h3>Software Engineer</h3>
                <p>@frank</p>
            </div>

            <div className="Badge__footer">#conjf</div>
        </div>
        );
    }
}

export default Badge;