import React from 'react';

class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div class='square' id={`${this.props.row}${this.props.col}`}>
        Hello
      </div>
    );
  }
}

export default Square;