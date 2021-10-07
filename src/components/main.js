import React, {Component} from 'react';
import Photowall from './photowall';
import Single from './single'
import AddPhoto from './addPhoto';
import Title from './title';
import {Route, Link} from 'react-router-dom';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
        }
    }

    render() {
        return (
            <div>
                <h1>
                    <Link to="/"><Title title="Photowall"/></Link>
                </h1>
                <Route exact path = '/' render={() => (
                    <div>
                        <Photowall {...this.props}/>
                    </div>
                )}/>
                <Route path = "/addPhoto" render ={() => (
                    <div>
                        <AddPhoto {...this.props}/>
                    </div>
                )}/>
                <Route path = '/single/:id' render = {(params) => (
                    <Single {...this.props} {...params}/>
                )}/>
            </div>
        )
        
    }
}


export default Main;