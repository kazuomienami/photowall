import React from 'react';
import Photo from './photo'
import {Link} from 'react-router-dom';

export default function Photowall(props){
    return <div>
        <Link className = "addIcon" onClick ={props.navigate} to="/addPhoto"></Link>
        <div className = "photoGrid">
            {props.posts
            .sort((x,y) => y.id - x.id)
            .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
        </div>
    </div>
}