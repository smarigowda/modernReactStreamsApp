import React from 'react';
import { BrowserRouter, HashRouter, MemoryRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <>
            <h1>Page 1</h1>
            <Link to="/page2">Navigate to Page 2</Link>
            <br/>
            <Link to="/">Navigate to Home</Link>
        </>
    )
}
const PageTwo = () => {
    return (
        <div>
            <h1>Page 2</h1>
            <Link to="/page1">Navigate to Page 1</Link>
            <br/>
            <Link to="/">Navigate to Home</Link>
        </div>
    )
}
const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to="/page1">Navigate to Page 1</Link>
            <br/>
            <Link to="/page2">Navigate to Page 2</Link>
        </>
    )
}
export default () => {
    return (
        <div>
            <MemoryRouter>
                <Route path="/" exact={true} component={Home} />
                <Route path="/page1" component={PageOne} />
                <Route path="/page2" component={PageTwo} />
            </MemoryRouter>
        </div>
    );
};