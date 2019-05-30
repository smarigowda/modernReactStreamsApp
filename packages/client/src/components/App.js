import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';

export default () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact={true} component={StreamList} />
                <Route path="/new" exact={true} component={StreamCreate} />
                <Route path="/Edit" exact={true} component={StreamEdit} />
                <Route path="/delete" exact={true} component={StreamDelete} />
                <Route path="/show" exact={true} component={StreamShow} />
            </BrowserRouter>
        </div>
    );
};