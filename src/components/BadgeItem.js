import React, { Component } from 'react';

import Gravatar from './Gravatar';

class BadgeItem extends Component {
    render() {
        return (
        <div className="BadgesListItem">
            <Gravatar
                className="BadgesListItem__avatar"
                email={this.props.badge.email}/>

            <div>
            <strong>
                {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
            </div>
        </div>
        );
    }
}

export default BadgeItem ;
