import main from './main'
import {connect} from 'react-redux'
import {AnyAction, bindActionCreators, Dispatch} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'

function mapStateToProps(state: { posts: any; comments: any }) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
    return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(main))

export default App;