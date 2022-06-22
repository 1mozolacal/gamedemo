import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class TextLog extends React.Component{
    constructor(){
        super();
        this.state={
        };
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