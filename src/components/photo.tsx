import {Link} from 'react-router-dom';

export default function Photo(props: { post: any; startRemovePost: any; index: any; history: any; comments: any; }) {
    const post = props.post; 
    return <figure className="figure">
        <Link to={`/single/${post.id}`}>
            <img className="photo" src={post.imageLink} alt={post.description}/>
        </Link>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button onClick={
                () => {
                    props.startRemovePost(props.index, post.id)
                    props.history.push('/')
                }
            }>Remove</button>
            <Link className="button" to={`/single/${post.id}`}>
                <div className = "comment-count">
                    <div className="speech-bubble"></div>
                    {props.comments[post.id] ? props.comments[post.id].length : 0}
                </div>
            </Link>
        </div>
    </figure>
}