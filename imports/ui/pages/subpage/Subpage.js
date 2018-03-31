import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { array } from 'prop-types';

const Subpage = (props) => {
  const { testData } = props;
  return (
    <div className="subpage">
      <Helmet>
        <title>Subpage</title>
        <meta name="description" content="This is subpage. Just Helmet SSR demo for other page" />
        <meta property="og:title" content="This is subpage. Just Helmet SSR demo for OG" />
      </Helmet>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
      <div>
        {testData.map((i, index) => <div key={index}>{i}</div>)}
      </div>
    </div>
  );
};

Subpage.propTypes = {
  testData: array,
};

Subpage.defaultProps = {
  testData: array,
};

const mapStateToProps = state => ({ testData: ['Lorem ipsum dolor sit amet', 'consectetur adipisicing elit', 'sed do eiusmod tempor incididunt'] });
const mapDispatchToProps = dispatch => ({
  // dispatchCallAddTodo: data => dispatch(callAddTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subpage);
