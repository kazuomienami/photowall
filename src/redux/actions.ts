import {db} from '../database/config'

export function startAddingPost(post: { id: any }) {
    return async (dispatch: (arg0: { type: string; post: any }) => void) => {
        return db.ref('posts')
        .update({[post.id]: post})
        .then(() => {dispatch(addPost(post))})
        .catch((error: any) => console.log(error))
    }
}

export function startLoadingPost() {
    return async (dispatch: (arg0: { type: string; posts: any }) => void) => {
        return db.ref('posts')
        .once('value')
        .then((snapshot: any) => {
            let posts: any[] = []
            snapshot.forEach((childSnapshot: { val: () => any }) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
        .catch((error: any) => console.log(error))
    }
}

export function startLoadingComments() {
    return async (dispatch: (arg0: { type: string; comments: any }) => void) => {
        return db.ref('comments')
        .once('value')
        .then((snapshot: any) => {
            let comments: any = {}
            snapshot.forEach((childSnapshot: { key: string | number; val: () => { [s: string]: unknown } | ArrayLike<unknown> }) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        })
        .catch((error: any) => console.log(error))
    }
}

export function startRemovingPost(index: any, id: any) {
    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }
    return async (dispatch: (arg0: { type: string; index: any }) => void) => {
        return db.ref().update(updates).then(() => {
            dispatch(removePost(index))
        })
    }
}

export function loadComments(comments: {}) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function startRemovePost(index: any, id: any) {
    return async (dispatch: (arg0: { type: string; index: any }) => void) => {
        return db.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
        })
        .catch((error: any) => console.log(error))
    }
}

export function startAddingComment(comment: any, postId: any) {
    return async (dispatch: (arg0: { type: string; comment: any; postId: any }) => void) => {
        return db.ref(`comments/${postId}`)
        .push(comment).then(() => {
            dispatch(addComment(comment, postId))
        })
        .catch((error: any) => console.log(error))
    }
}

export function removePost(index: any) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post: any) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment: any, postId: any) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts: any[]) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}