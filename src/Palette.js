import React, { Component } from 'react';
import Slider from 'rc-slider';

import ColorBox from './ColorBox';

import 'rc-slider/assets/index.css';
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
        <Slider
          defaultValue={ level }
          min={ 100 }
          max={ 900 }
          step={ 100 }
          onAfterChange={ this.changeLevel }
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
