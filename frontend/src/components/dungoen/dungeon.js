import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventory from '../inventory/inventory';
import GetMonsters from '../../utils/monsters/getMonsterList.js'
import AttackPlayer from '../../utils/player/attackPlayer'


function Dungeon(props) {
    //props: player,setPlayer, teleportHome

    const [monsters, setMonsters] = useState(undefined)//will be an array
    const [goDeeper, setGoDeeper] = useState(false)
    const [dungeonLevel, setDungeonLevel] = useState(0)


    function progress() {
        const selector = Math.floor(Math.random() * 100);//0-99
        var goDeeper = false
        var monsters = undefined
        if (selector < 4) {
            //treasure
        }
        else if (selector < 20) {
            goDeeper = true
        } else if (selector < 70) {
            // make random drops
        } else {
            monsters = GetMonsters()
        }

        setGoDeeper(goDeeper)
        if (monsters === []) {
            setMonsters(undefined)
        } else {
            setMonsters(monsters)
        }
    }

    function doMove(yourMoveFunc, yourMoveVar) {
        const moveSideEffects = yourMoveFunc({ ...yourMoveVar })
        var uptoDateMonsters = monsters
        if ('monsters' in moveSideEffects) {
            uptoDateMonsters = moveSideEffects.monsters
        }
        const allMonstersDead = uptoDateMonsters.every(item => item.health <= 0)
        if (allMonstersDead) {
            setMonsters(undefined)
        } else {
            setMonsters(uptoDateMonsters)
        }
        const playerClone = AttackPlayer(props.player, uptoDateMonsters)
        props.setPlayer(playerClone)

    }

    function attackMonster({ monsterIndex }) {
        console.log('thing', monsterIndex, monsters)
        const attackedMonsters = monsters.map((monster, i) => {
            if (monsterIndex != i) {
                return monster
            }
            var clone = monster//shallow copy
            const critialStrike = Math.random() * 20 < 1 ? props.player.baseAttack * 5 : 0
            clone.health = monster.health - Math.max(1, props.player.baseAttack - monster.defence + critialStrike, (props.player.baseAttack + critialStrike) / monster.defence)
            return clone
        })
        // setMonsters(attackedMonsters)
        return {
            monsters: attackedMonsters
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
                        {monsters.map((monster, i) => {
                            if (monster.health <= 0) {
                                return <Button key={i} className="action" color="secondary">Dead - {monster.name}</Button>
                            }
                            return <Button key={i} className="action" color="danger" onClick={() => doMove(attackMonster, { monsterIndex: i })}>Attack - {monster.name}</Button>
                        })}
                        <Button className="action" id="flee" color="secondary">Flee</Button>
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