import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class TextLog extends React.Component{
    constructor(){
        super();
        this.state={
            pastText: ["Welcome to the dungeon"]
        };
    }
     
   addText(text){
        this.setState({
            pastText: [...this.state.pastText, text]
        })
   }

   componentDidUpdate() {
    if(this.props.text !== this.state.pastText[-1]){
        let text = this.props.addText
        this.addText(text)
        this.state.pastText.map(x => <p>{x}<br/></p>)
        }
  }

    render(){
        return (
            <div id="textBox" style={{borderStyle: 'solid', width: '350px', minHeight: '200px'}}>
                    {this.state.pastText}
            </div>
        )
    }
}
 
export default TextLog;