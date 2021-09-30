import React,{Component} from 'react';

const tasks = [4,5,6]


class List extends Component {
    render() {
        return <ol>
            {tasks.map((task, i) => <li key = {i}>{task}, {i}</li>)}
        </ol>
    }
}

export default List;