import React from 'react';
import {callGetAllTodo} from '../../../api/redux/async-actions';
import {connect} from 'react-redux';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(callGetAllTodo());
    }
    render() {
        return (
            <div>
                <section>
                    <div className='container'>
                        {this.props.children}
                    </div>
                </section>
            </div>
        );
    };
};

export default connect()(Main);