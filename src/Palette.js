import React, { Component } from 'react';
import Navbar from './Navbar';

import ColorBox from './ColorBox';


import './Palette.css';

class Palette extends Component {
  state = {
    level: 500,
    format: 'hex'
  }

  changeLevel = (level) => {
    this.setState({ level });
  }

  changeFormat = (format) => {
    this.setState({ format });
  }

  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        key={ color.id }
        background={ color[format] }
        name={ color.name }
      />
    ));

    return (
      <div className="Palette">
        <Navbar
          level={ level }
          changeLevel={ this.changeLevel }
          handleChange={ this.changeFormat }
        />
        <div className="Palette-colors">
          { colorBoxes }
        </div>
        <footer className="Palette-footer">
          { paletteName }
          <span className="emoji">{ emoji }</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
