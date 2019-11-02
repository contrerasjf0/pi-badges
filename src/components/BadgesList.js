import React, { Component } from 'react';
import BadgeItem from './BadgeItem';

class BadgesList extends Component {
    render() {
        return (
        <div className="BadgesList">
            <ul className="list-unstyled">
            {this.props.badges.map(badge => {
                return (
                <li key={badge.id}>
                    <BadgeItem badge={badge} />
                </li>
                );
            })}
            </ul>
        </div>
        );
    }
}

export default BadgesList;