import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return (
        <>
            <h1>Page 1</h1>
            <a href="/page2">Navigate to Page 2</a>
            <br/>
            <a href="/">Navigate to Home</a>
        </>
    )
}
const PageTwo = () => {
    return (
        <div>
            <h1>Page 2</h1>
            <a href="/page1">Navigate to Page 1</a>
            <br/>
            <a href="/">Navigate to Home</a>
        </div>
    )
}
const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <a href="/page1">Navigate to Page 1</a>
            <br/>
            <a href="/page2">Navigate to Page 2</a>
        </>
    )
}
export default () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact={true} component={Home} />
                <Route path="/page1" component={PageOne} />
                <Route path="/page2" component={PageTwo} />
            </BrowserRouter>
        </div>
    );
};