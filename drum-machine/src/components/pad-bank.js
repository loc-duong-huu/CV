import React from "react";
import DrumPad from './drum-pad.js';
import '../App.css';

class PadBank extends React.Component {
    constructor(props) {
      super(props);
    }

    addToListTrigger(id) {
      this.props.listTrigger.push(id);
    }

    render() {
      let padBank;
      if (this.props.power) {
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad
              clip={padBankArr[i].url}
              clipId={padBankArr[i].id}
              keyCode={padBankArr[i].keyCode}
              keyTrigger={padBankArr[i].keyTrigger}
              power={this.props.power}
              updateDisplay={this.props.updateDisplay}
              padTrigger={(id) => this.addToListTrigger(id)}
            />
          );
        });
      } else {
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad
              clip='#'
              clipId={padBankArr[i].id}
              keyCode={padBankArr[i].keyCode}
              keyTrigger={padBankArr[i].keyTrigger}
              power={this.props.power}
              updateDisplay={this.props.updateDisplay}
            />
          );
        });
      }
      return <div className='pad-bank'>{padBank}</div>;
    }
}

export default PadBank;