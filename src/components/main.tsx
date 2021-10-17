import { useState, useEffect } from 'react';
import Photowall from './photowall';
import Single from './single'
import AddPhoto from './addPhoto';
import Title from './title';
import { RouteComponentProps } from 'react-router';
import { Route, Link } from 'react-router-dom';

interface Props extends RouteComponentProps<{id?: string}> {
    startLoadingPost: any
    startLoadingComments: any
    startAddingPost: any
    startRemovePost: any
    posts: any
    comments: any
}

export default function Main(props: Props) {

    const [state, setState] = useState(true)

    useEffect(() => {
        props.startLoadingPost().then(() => {
            setState(false)
        })
        props.startLoadingComments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h1>
                <Link to="/"><Title title="Photowall" /></Link>
            </h1>
            <Route exact path='/' render={() => (
                <div>
                    <Photowall {...props} />
                </div>
            )} />
            <Route path="/addPhoto" render={() => (
                <div>
                    <AddPhoto {...props} />
                </div>
            )} />
            <Route path='/single/:id' render={(params) => (
                <Single loading={state} {...props} {...params} />
            )} />
        </div>
    )

}