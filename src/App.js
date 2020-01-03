import React, {Fragment} from 'react';
import './App.css';
import {Container} from "reactstrap";
import Navigation from "./components/UI/Navigation/Navigation";
import {Route, Switch} from "react-router";
import Blog from "./containers/Blog";
import NewPost from "./containers/NewPost";
import Post from "./containers/Post";
import EditPost from "./containers/EditPost";
import About from "./containers/About";
import Contacts from "./containers/Contacts";

function App() {
    return (
        <Fragment>
            <Navigation/>
            <Container>
                <Switch>
                    <Route path='/' exact component={Blog}/>
                    <Route path='/posts/:id/edit' component={EditPost}/>
                    <Route path='/home' component={Blog}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/posts/add' component={NewPost}/>
                    <Route path='/posts/:id' component={Post}/>
                    <Route path='/posts' component={Blog}/>
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </Container>
        </Fragment>
    );
}

export default App;
