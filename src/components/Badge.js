import React from 'react';

import Gravatar from './Gravatar';

import confLogo from '../statics/images/badge-header.svg';


import '../statics/scss/components/Badge.scss';

class Badge extends React.Component {

    

    render() {

        const { avatarUrl, firstName, lastName, jobTitle, twitter} = this.props;

        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <Gravatar className="Badge__avatar" email={this.props.email} />
            <h1>
                {firstName} <br /> {lastName}
            </h1>
            </div>

            <div className="Badge__section-info">
                <h3>{jobTitle}</h3>
                <p>@{twitter}</p>
            </div>

            <div className="Badge__footer">#conjf</div>
        </div>
        );
    }
}

export default Badge;