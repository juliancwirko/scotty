import React from 'react';
import { callGetAllTodo } from '../../../api/redux/async-actions';
import { connect } from 'react-redux';

class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(callGetAllTodo());
  }
  render() {
    return (
      <div>
        <section>
          <div className="container">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default connect()(Main);
