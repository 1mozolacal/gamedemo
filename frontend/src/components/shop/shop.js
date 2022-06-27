import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventory from '../inventory/inventory';


function Shop(props) {
    const [modal, setModal] = useState(0);
    function toggle() {
        setModal(!modal)
    }
    return (
        <div className="screen">
            <img src={'/shop.png'} alt="shop backdrop" width="500" height="400" />
            <br />
            <div className="actions">
                <Button className="action" id="attack" color="primary">Buy</Button>{' '}
                <Button className="action" id="attack" color="primary">Sell</Button>{' '}
                <Button className="action" id="walk" color="info" onClick={() => props.teleport('town')}>Back to Town</Button>{' '}
                <Button className="action" id="inventory" color="success" onClick={toggle}>Inventory</Button>{' '}
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Inventory</ModalHeader>
                <Inventory />
            </Modal>
        </div>
    )
} export default Shop;