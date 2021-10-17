import Photo from './photo'
import Comments from './comments'

export default function Single(props: { startRemovePost: any; comments: any; posts: any; loading?: any; startAddingComment?: any; match?: any, history: any }) {
    const {match, posts} = props
    const id = Number(match.params.id)
    const post = posts.find((post: { id: number }) => post.id === id)
    const comments = props.comments[id] || []
    const index = props.posts.findIndex((post: { id: number }) => post.id === id)
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
    else return <h1>No Post Found...</h1>
}