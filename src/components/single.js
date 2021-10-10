import React from 'react'
import Photo from './photo'
import Comments from './comments'

export default function Single(props) {
    const {match, posts} = props
    const id = Number(match.params.id)
    const post = posts.find(post => post.id === id)
    const comments = props.comments[id] || []
    const index = props.posts.findIndex(post => post.id === id)
    if (props.loading === true)
        return <div className = "loader">...loading </div>
    else if (post) {
        return (
        <div className="single-photo">
            <Photo post={post} {...props} index={index}/>
            <Comments startAddingComment={props.startAddingComment} comments={comments} id={id}/>
        </div>
        )
    }
    else <h1>No Post Found...</h1>
}