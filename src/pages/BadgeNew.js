import React, { Component, Fragment } from 'react';


import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

import userAvatar from '../statics/images/user.jpg'
import header from '../statics/images/badge-header.svg';

import '../statics/scss/pages/BadgeNew.scss';

class BadgeNew extends Component {

    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            },
        };

        handleChange = e => {
                this.setState({
                form: {
                    ...this.state.form,
                    [e.target.name]: e.target.value,
                },
                });
        };
        
    render() {
        return (
        <Fragment>
            <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="Logo" />
            </div>

            <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge  firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            twitter={this.state.form.twitter}
                            jobTitle={this.state.form.jobTitle}
                            email={this.state.form.email}
                            avatarUrl={userAvatar}/>
                </div>
                <div className="col-6">
                    <BadgeForm
                    onChange={this.handleChange}
                    formValues={this.state.form}/>
                </div>
            </div>
            </div>
        </Fragment>
        );
    }
}

export default BadgeNew;