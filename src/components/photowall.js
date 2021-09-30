import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Photo from './photo'

class Photowall extends Component {
    render() {
        return <div className = "photoGrid">
            {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
        </div>
    }
}
export default Photowall;