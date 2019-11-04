import React from 'react';

import Loader from './Loader';

import '../statics/scss/components/PageLoading.scss';


function PageLoading() {
    return (
        <div className="PageLoading">
        <Loader />
        </div>
    );
}

export default PageLoading;