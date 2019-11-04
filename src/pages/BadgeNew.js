import React, { Component, Fragment } from 'react';


import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

import userAvatar from '../statics/images/user.jpg'
import header from '../statics/images/platziconf-logo.svg';

import service from '../services/sevice';

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
        handleSubmit = async e => {
            e.preventDefault();
            this.setState({ loading: true, error: null });
        
            try {
                await api.badges.create(this.state.form);
                this.setState({ loading: false });
            } catch (error) {
                this.setState({ loading: false, error: error });
            }
        };
    
    render() {
        return (
        <Fragment>
            <div className="BadgeNew__hero">
            <img
                    className="BadgeNew__hero-image img-fluid"
                    src={header}
                    alt="Logo" />
            </div>

            <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge  firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            twitter={this.state.form.twitter || 'twitter'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            email={this.state.form.email || 'EMAIL'}
                            avatarUrl={userAvatar}/>
                </div>
                <div className="col-6">
                    <BadgeForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}/>
                </div>
            </div>
            </div>
        </Fragment>
        );
    }
}

export default BadgeNew;