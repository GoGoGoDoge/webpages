import React, {Component} from 'react';
import StickyLayout from './layouts/StickyLayout';
import HomePage from './pages/Homepage';
import CloudGallery from './pages/CloudGallery';
import './App.css';

class App extends Component {
  render() {
    // return <CloudGallery />;
    return (
      <div className="App">
        <StickyLayout>
          <HomePage />
        </StickyLayout>
      </div>
    );
  }
}

export default App;
