import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import BadgesList from '../components/BadgesList';

import service from '../services/sevice';

import confLogo from '../statics/images/badge-header.svg';

import '../statics/scss/pages/Badges.scss';
import '../statics/scss/components/BadgeList.scss';


class Badges extends React.Component {
        state = {
            loading: true,
            error: null,
            data: undefined,
        };
        
        componentDidMount() {
            this.fetchData();
        }

        componentDidUpdate(prevProps, prevState) {
            console.log({
            prevProps: prevProps,
            prevState: prevState,
            });
        
            console.log({
            props: this.props,
            state: this.state,
            });
        }
        
        componentWillUnmount() {
            clearTimeout(this.timeoutId);
        }
    
        fetchData = async () => {
            this.setState({ loading: true, error: null });

            try {
                const data = await service.badges.list();
                this.setState({ loading: false, data: data });
            } catch (error) {
                this.setState({ loading: false, error: error });
            }
        }
    

    render() {

        if (this.state.loading === true) {
            return 'Loading...';
        }
        
        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }

        return (
        <>

            <div className="Badges">
            <div className="Badges__hero">
                <div className="Badges__container">
                <img
                    className="Badges_conf-logo"
                    src={confLogo}
                    alt="Conf Logo"
                />
                </div>
            </div>
            </div>

            <div className="Badges__container">
            <div className="Badges__buttons">
                <Link to="/badges/new" className="btn btn-primary">
                New Badge
                </Link>
            </div>

            <BadgesList badges={this.state.data} />
            </div>
        </>
        );
    }
}

export default Badges;