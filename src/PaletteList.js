import React, { Component } from 'react';
import MainPalette from './MainPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div className="">
        <MainPalette />
        <h1>React colors</h1>
        { palettes.map(palette => (
          <MainPalette { ...palette } />
        )) }
      </div>
    );
  }
}

export default PaletteList;
