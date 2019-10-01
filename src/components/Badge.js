import React from 'react';

import confLogo from '../statics/images/badge-header.svg';
import userAvatar from '../statics/images/user.jpg'

class Badge extends React.Component {
    render() {
        return (
        <div>
            <div>
            <img src={confLogo} alt="Logo de la conferencia" />
            </div>

            <div>
            <img src={userAvatar} alt="Avatar" />
            <h1>
                Frank <br /> Contreras
            </h1>
            </div>

            <div>
            <p>Software Engineer</p>
            <p>@frank</p>
            </div>

            <div>#conjf</div>
        </div>
        );
    }
}

export default Badge;