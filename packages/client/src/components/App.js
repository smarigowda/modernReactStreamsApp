import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return (
        <h1>Page 1</h1>
    )
}
const PageTwo = () => {
    return (
        <h1>Page 2</h1>
    )
}
const Home = () => {
    return (
        <h1>Home Page</h1>
    )
}
export default () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/page1" component={PageOne} />
                <Route path="/page2" component={PageTwo} />
            </BrowserRouter>
        </div>
    );
};