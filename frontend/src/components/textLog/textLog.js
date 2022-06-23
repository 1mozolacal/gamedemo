import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TextLog = ({ messages }) => {


    return (
        <div id="textBox" style={{ borderStyle: 'solid', width: '350px', minHeight: '200px', overflowY: 'auto' }}>
            {messages.map((ele, i) => {
                return (<p key={i}>{ele.text} <br /></p>)
            })}
        </div>
    )
}

export default TextLog;