import React from 'react';
import { Randomize } from './components/randomize/randomize.component';
import Data from './util/data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: Data,
      searchField: "",
    }
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
 
  render() {
    const { pictures, searchField } = this.state; 
    const filteredPictures = pictures.filter(picture => 
        picture.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
    <div className='App'>
      <div className="solo">
      <h1 className = "title">Welcome To My Website</h1>
            <br />
            <p style={{color: 'black', fontSize : '30px'}}>Thanks for visiting! Scroll down to see awesome pictures and some links to 
            my projects.</p>
      </div>
      <Randomize className = "cardstyle" pictures = {filteredPictures} />
    </div>
  );
  }
}

export default App;
