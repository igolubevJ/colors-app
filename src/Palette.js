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
    const { colors } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map((color, idx) => (
      <ColorBox
        key={ idx }
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
        {/* Navbar goes heare */}
        <div className="Palette-colors">
          { colorBoxes }
        </div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Palette;
