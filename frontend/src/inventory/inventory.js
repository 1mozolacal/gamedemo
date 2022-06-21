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
            row.splice(1, 0, <Col>{element}</Col>)
        });
        rows.push(row)
    }
    

    return(
        <div className="inventory">
      <Container>
          {rows}     
      </Container>
        </div>
    )
} export default Inventory;