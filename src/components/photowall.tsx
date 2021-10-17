import React from 'react';
import Photo from './photo'
import {Link} from 'react-router-dom';

export default function Photowall(props: { posts: any[]; }){
    return <div>
        <Link className = "addIcon" to="/addPhoto"></Link>
        <div className = "photoGrid">
            {props.posts
            .sort((x: { id: number; },y: { id: number; }) => y.id - x.id)
            .map((post: any, index: any) => <Photo startRemovePost={undefined} history={undefined} comments={undefined} key={index} post={post} {...props} index={index}/>)}
        </div>
    </div>
}