import React from 'react';
import Main from './components/Main';
import NavigationBar from './components/NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="back-text">
          Welcome
        </h1>
        <NavigationBar />
        <Main />
      </div>
    );
  }
}

export default App;
