import React from 'react';
import Photo from './photo'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Photowall(props){
    return <div>
        <Link className = "addIcon" onClick ={props.navigate} to="/addPhoto"></Link>
        <div className = "photoGrid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
    </div>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}