import React, { Component } from 'react';
import { hashHistory } from 'react-router';

hashHistory.listen(() => {
  window.scrollTo(0, 0);
});



class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
