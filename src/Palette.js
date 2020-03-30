import React, { Component } from 'react';
import Navbar from './Navbar';

import ColorBox from './ColorBox';


import './Palette.css';

class Palette extends Component {
  state = {
    level: 500
  }

  changeLevel = (level) => {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color, idx) => (
      <ColorBox
        key={ idx }
        background={ color.hex }
        name={ color.name }
      />
    ));

    return (
      <div className="Palette">
        <Navbar level={ level } changeLevel={ this.changeLevel } />
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
