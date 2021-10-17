import React from 'react';

export default function Comments(props: { startAddingComment: any; id: any; comments: any[]; }) {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const comment = e.target.elements.comment.value
        props.startAddingComment(comment, props.id)
        e.target.elements.comment.value = ''
    }

    return (
        <div className="comment">
            {props.comments.map((comment: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => {
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