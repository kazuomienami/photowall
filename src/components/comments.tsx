export default function Comments(props: { startAddingComment: any; id: any; comments: any[]; }) {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const comment = e.target.elements.comment.value
        props.startAddingComment(comment, props.id)
        e.target.elements.comment.value = ''
    }

    return (
        <div className="comment">
            {props.comments.map((comment: any, index: any) => {
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