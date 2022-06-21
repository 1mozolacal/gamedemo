import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventory from '../inventory/inventory';


function Dungeon(props){
    const [modal, setModal] = useState(0);
    function toggle(){
        setModal(!modal)
    }
    return(
        <div className="screen">
            <img src={'/dungeon.jpg'} alt="Dungeon" width="500" height="400"/>
            <br/>
            <div className="actions">
                <Button className="action" id="attack" color="danger">Attack</Button>{' '}
                <Button className="action" id="walk" color="primary">Walk</Button>{' '}
                <Button className="action" id="inventory" color="success" onClick={toggle}>Inventory</Button>{' '}
            </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Inventory</ModalHeader>
        <Inventory/>
        </Modal>
        </div>
    )
} export default Dungeon;