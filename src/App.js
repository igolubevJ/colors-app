import React, { Component } from 'react';
import Palette from './Palette';

import { generatePalette } from './color.helpers';
import seedColors from './seedColors';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[2]));

    return (
      <div>
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}

export default App;
