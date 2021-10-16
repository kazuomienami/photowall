import React from 'react';

export default function Comments(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
        const comment = e.target.elements.comment.value
        props.startAddingComment(comment, props.id)
        e.target.elements.comment.value = ''
    }

    return (
        <div className="comment">
            {props.comments.map((comment, index) => {
                return (
                    <p key={index}> {comment} </p>
                )
            })}
            <form className="comment-form" onSubmit={e => handleSubmit(e)}>
                <input type="text" placeholder="comment" name="comment" />
                <input type="submit" hidden />
            </form>
        </div>
    )
}