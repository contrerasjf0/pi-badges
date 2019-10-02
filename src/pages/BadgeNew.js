import React from 'react';


import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

import userAvatar from '../statics/images/user.jpg'
import header from '../statics/images/badge-header.svg';

import '../statics/scss/pages/BadgeNew.scss';

class BadgeNew extends React.Component {
    render() {
        return (
        <div>
            <Navbar />
            <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="Logo" />
            </div>

            <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge firstName="Frank"
                            lastName="Contreras"
                            avatarUrl={userAvatar}
                            jobTitle="Software Engineer"
                            twitter="frank"/>
                </div>
                <div className="col-6">
                    <BadgeForm />
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default BadgeNew;