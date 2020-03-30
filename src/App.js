import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';

import { generatePalette } from './color.helpers';
import seedColors from './seedColors';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ () => <h1>PALETTE LIST GOES HEARE</h1> } />
        <Route exact path="/palette/:id" render={ () => <h1>INDIVIDUAL PALETTE</h1> } />
      </Switch>

      // <div>
      //   <Palette palette={ generatePalette(seedColors[2]) } />
      // </div>
    );
  }
}

export default App;
