import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TextLog = ({ messages }) => {


    return (
        <div style={{overflowY: 'auto', display:"flex", flexDirection: "column-reverse", borderStyle: 'solid', width: '350px', minHeight: '53vh', maxHeight: '53vh'}}>
            <div id="textBox" style={{}}>
                {messages.map((ele, i) => {
                    return (<p key={i}>{ele.text} <br /></p>)
                })}
            </div>
        </div>
    )
}

export default TextLog;