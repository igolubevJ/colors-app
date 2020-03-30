import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';

import { generatePalette } from './color.helpers';
import seedColors from './seedColors';

class App extends Component {
  findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={ () => <h1>PALETTE LIST GOES HEARE</h1> } />
        <Route 
          exact 
          path="/palette/:id" 
          render={ (routeProps) => (
            <Palette  
              palette={ generatePalette(
                this.findPalette(routeProps.match.params.id)
              ) }
            />
          ) } 
        />
      </Switch>
    );
  }
}

export default App;
