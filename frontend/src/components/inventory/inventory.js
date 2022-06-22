import * as React from 'react';
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';


function Inventory(props){
    let rows = []
    if(props.hasOwnProperty("items")){
        rows = props.items.map(x => 
            <Grid item xs={2}>
            <img src={x.image} alt="empty" width="50" height="50" id="itemSlot"/>
            </Grid>
            )
    }
    let count = rows.length
    for (let index = 0; index < 16 - count; index++) {
        rows.push(
            <Grid item xs={2}>
            <img src={"/grey.png"} alt="empty" width="50" height="50" id="itemSlot"/>
            </Grid>
        )
        
    }
    return(
        <div className="inventory">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {rows}
            </Grid>
        </div>
    )
} export default Inventory;