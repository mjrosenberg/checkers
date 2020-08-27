import React from 'react';
import ReactDom from 'react-dom';
import Board from './components/board.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currPlayer: 'Red',
    };
    this.changePlayer = this.changePlayer.bind(this);
  }
  changePlayer(){
    if (this.state.currPlayer === 'Red'){
      this.setState({
        currPlayer: 'Black',
      });
    } else {
      this.setState({
        currPlayer: 'Red',
      })
    }
  }
  render(){
    return(
      <div id='wrapper'>
        <div id='title'>Checkers</div>
        <div id='turn'>{this.state.currPlayer}'s Turn</div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));