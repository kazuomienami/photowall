import {db} from '../database/config'

export function startAddingPost(post) {
    return async (dispatch) => {
        return db.ref('posts')
        .update({[post.id]: post})
        .then(() => {dispatch(addPost(post))})
        .catch((error) => console.log(error))
    }
}

export function startLoadingPost() {
    return async (dispatch) => {
        return db.ref('posts')
        .once('value')
        .then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
        .catch((error) => console.log(error))
    }
}

export function startLoadingComments() {
    return async (dispatch) => {
        return db.ref('comments')
        .once('value')
        .then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        })
        .catch((error) => console.log(error))
    }
}

export function startRemovingPost(index, id) {
    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }
    return async (dispatch) => {
        return db.ref().update(updates).then(() => {
            dispatch(removePost(index))
        })
    }
}

export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function startRemovePost(index, id) {
    return async (dispatch) => {
        return db.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
        })
        .catch((error) => console.log(error))
    }
}

export function startAddingComment(comment, postId) {
    return async (dispatch) => {
        return db.ref(`comments/${postId}`)
        .push(comment).then(() => {
            dispatch(addComment(comment, postId))
        })
        .catch((error) => console.log(error))
    }
}

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}