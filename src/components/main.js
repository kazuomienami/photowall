import React, {Component} from 'react';
import Photowall from './photowall';
import Single from './single'
import AddPhoto from './addPhoto';
import Title from './title';
import {Route, Link} from 'react-router-dom';

class Main extends Component {
    
    state = {
        loading: true
    }

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
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
                    <Single loading={this.state.loading} {...this.props} {...params}/>
                )}/>
            </div>
        )
        
    }
}


export default Main;