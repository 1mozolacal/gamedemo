import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventory from '../inventory/inventory';


function Dungeon(props) {

    const [monsters, setMonsters] = useState(undefined)//will be an array
    const [goDeeper, setGoDeeper] = useState(false)


    function progress() {
        const selector = Math.floor(Math.random() * 100);//0-99
        var goDeeper = false
        var monsters = []
        if (selector < 4) {
            //treasure
        }
        else if (selector < 20) {
            goDeeper = true
        } else if (selector < 70) {
            // make random drops
        } else {
            // monsters = 
        }

        setGoDeeper(goDeeper)
        if (monsters === []) {
            setMonsters(undefined)
        } else {
            setMonsters(monsters)
        }

    }


    const [modal, setModal] = useState(0);
    function toggle() {
        setModal(!modal)
    }
    return (
        <div className="screen">
            <img src={'/dungeon.jpg'} alt="Dungeon" width="500" height="400" />
            <br />
            <div className="actions">
                {(monsters &&
                    <>
                        <Button className="action" id="attack" color="danger">Attack</Button>
                        <Button className="action" id="defend" color="primary">Defend</Button>
                    </>) || (
                        <>
                            <Button className="action" id="teleport" color="primary" onClick={props.teleportHome}>Teleport</Button>
                            <Button className="action" id="walk" color="primary" onClick={progress}>Onwards!</Button>
                            {(goDeeper &&
                                <Button className="action" id="deeper" color="secondary">Deeper!</Button>
                            )}
                        </>
                    )}
                <Button className="action" id="inventory" color="success" onClick={toggle}>Inventory</Button>{' '}
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Inventory</ModalHeader>
                <Inventory />
            </Modal>
        </div>
    )
} export default Dungeon;