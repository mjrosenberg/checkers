import React from 'react';
import Square from './square.jsx';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rows: [0,1,2,3,4,5,6,7],
      cols: [0,1,2,3,4,5,6,7],
    }
  }
  render(){
    return(
      <div id='boardWrapper'>
        {
          this.state.rows.map((row) => {
            console.log('row is', row);
            // this.state.cols.map((col) => {
              // doesn't appear with double map and only one row appears with the for loop
              //console.logs are printing correctly though
            for (let col = 0; col < 8; col++){
              console.log('col is', col);
              return (<Square row={row} col={col} currPlayer={this.state.currPlayer} changePlayer={this.changePlayer}/>);
            // })
            }
          })
        }
      </div>
    );
  }
}

export default Board;