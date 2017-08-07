import React from 'react';
import { Helmet } from 'react-helmet';

class Subpage extends React.Component {
  state = {
    testData: ['dasdsa', 'fdsfdsfds', 'dadasdsa'],
  }
  render() {
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
          {this.state.testData.map((i, index) => <div key={index}>{i}</div>)}
        </div>
      </div>
    );
  }
}

export default Subpage;
