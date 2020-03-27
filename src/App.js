import React, { Component } from 'react';
import Palette from './Palette';

import { generatePalette } from './color.helpers';
import seedColors from './seedColors';

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={ generatePalette(seedColors[2]) } />
      </div>
    );
  }
}

export default App;
