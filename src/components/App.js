
import React, { Component } from 'react';
import '../styles/App.scss';
import Data from '../socialCardData';
import Card from './Card';
import headshot from '../me.jpeg';
import image from '../Sierras.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card 
          logoURL={image}
          headline={Data.headLine}
          name={Data.name}
          creditImageURL={headshot}
          message={Data.message}
          url={Data.url}
          urlDisplayName={Data.urlDisplayName}
        />
      </div>
    );
  }
}

export default App;