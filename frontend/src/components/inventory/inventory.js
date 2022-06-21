import * as React from 'react';
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Inventory(props){
    let rows = []
    function row(items){
        let row = [        
        <Row>,
        </Row>]
        items.forEach(element => {
            if(element !== null){

            }else{
                row.splice(1, 0, <Col>{<img src={'/grey.png'} alt="empty" width="50" height="50"/>}</Col>)
            }
        });
        rows.push(row)
    }
    for (let index = 0; index < 8; index++) {
        row([null, null, null, null, null, null, null, null])
    }

    console.log(rows)
    return(
        <div className="inventory">
      <Container>
          {rows}     
      </Container>
        </div>
    )
} export default Inventory;