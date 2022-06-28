import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventory from '../inventory/inventory';
import GetMonsters from '../../utils/monsters/getMonsterList.js'
import AttackPlayer from '../../utils/player/attackPlayer'
import CreateTreasureChest from '../../utils/dungeon/treasureChest'
import OpenTreasureChest from '../../utils/player/openTreasureChest'
import giveBattleExperience from '../../utils/player/endBattle'
import LowerHunger from '../../utils/player/LowerHunger'
import DungeonDisplay from '../dungeonDisplay/dungeonDisplay';

import Styling from './dungeon.module.css'

function Dungeon(props) {
    //props: player,setPlayer, teleportHome

    const [monsters, setMonsters] = useState(undefined)//will be an array
    const [goDeeper, setGoDeeper] = useState(false)
    const [dungeonLevel, setDungeonLevel] = useState(0)
    const [treasureChest, setTreasureChest] = useState(undefined)



    function progress({ player }) {
        var messages = []
        const selector = Math.floor(Math.random() * 100);//0-99
        var goDeeper = false
        var monsters = undefined
        var treasure = undefined
        var currentPlayer = player
        if (selector < 5) {
            treasure = CreateTreasureChest(dungeonLevel)
            messages.push({ text: "A Treasure Chest appeared!" })
        }
        else if (selector < 20) {
            goDeeper = true
            messages.push({ text: "An opening to venture deeper is here." })
        } else if (selector < 50) {
            // make random drops
            messages.push({ text: "You venture further finding nothing of interest." })
        } else if (selector < 70) {
            currentPlayer.gold += Math.ceil(Math.random() * 4)
            messages.push({ text: "You found something shiny" })
        } else {
            monsters = GetMonsters(dungeonLevel)
            messages.push({ text: "Ahhh! Monsters." })
        }

        setGoDeeper(goDeeper)
        setTreasureChest(treasure)
        if (monsters === []) {
            setMonsters(undefined)
        } else {
            setMonsters(monsters)
        }

        return {
            messages,
            player: currentPlayer,
        }

    }

    function downALevel(context) {
        setDungeonLevel(dungeonLevel + 1)
        const retPro = progress(context)
        return {
            messages: [{ text: `You ventured to level ${dungeonLevel + 1} of the dungeon` }].concat(retPro.messages),
            player: retPro.player
        }
    }

    function openTreasureChest({ player }) {
        const treasureReturn = OpenTreasureChest(player, treasureChest)
        const progressReturn = progress({ player: treasureReturn.player })
        return {
            player: progressReturn.player,
            messages: treasureReturn.messages.concat(progressReturn.messages)
        }
    }

    function doMove(yourMoveFunc, yourMoveVar) {
        const moveSideEffects = yourMoveFunc({ ...yourMoveVar })
        var messages = []
        var uptoDateMonsters = monsters
        var uptoDatePlayer = props.player
        if (moveSideEffects) {
            if ('monsters' in moveSideEffects) {
                uptoDateMonsters = moveSideEffects.monsters
            }
            if ('player' in moveSideEffects) {
                uptoDatePlayer = moveSideEffects.player
            }
            if ('messages' in moveSideEffects) {
                messages = messages.concat(moveSideEffects.messages)
            }
        }
        if (uptoDateMonsters) {
            const allMonstersDead = uptoDateMonsters.every(item => item.health <= 0)
            if (allMonstersDead) {
                const returnData = giveBattleExperience(uptoDatePlayer, uptoDateMonsters)
                uptoDatePlayer = returnData.player
                messages = messages.concat(returnData.messages)
                setMonsters(undefined)
            } else {
                setMonsters(uptoDateMonsters)
                const attackStatus = AttackPlayer(uptoDatePlayer, uptoDateMonsters)
                messages = messages.concat(attackStatus.messages)
                uptoDatePlayer = attackStatus.player
            }

        }
        const lowerHungerStatus = LowerHunger(uptoDatePlayer)
        uptoDatePlayer = lowerHungerStatus.player
        messages = messages.concat(lowerHungerStatus.messages)
        props.setPlayer(uptoDatePlayer)
        props.pushMessages(messages)
    }

    function attackMonster({ monsterIndex }) {
        const messages = []
        const attackedMonsters = monsters.map((monster, i) => {
            if (monsterIndex != i) {
                return monster
            }
            messages.push({ text: `You hit the ${monster.name}` })
            var clone = monster//shallow copy
            const critialStrike = Math.random() * 20 < 1 ? props.player.baseAttack * 5 : 0
            clone.health = monster.health - Math.max(1, props.player.baseAttack - monster.defence + critialStrike, (props.player.baseAttack + critialStrike) / monster.defence)
            return clone
        })
        return {
            monsters: attackedMonsters,
            messages
        }
    }


    const [modal, setModal] = useState(0);
    function toggle() {
        setModal(!modal)
    }
    return (
        <div className="screen">
            <DungeonDisplay
                level={dungeonLevel}
                width={500}
                height={400}
                monsters={monsters}
            />
            <br />
            <div className="actions">
                {(monsters &&
                    <>
                        {monsters.map((monster, i) => {
                            if (monster.health <= 0) {
                                return <Button key={i} className="action" color="secondary">Dead - {monster.name}</Button>
                            }
                            return <Button key={i} className="action" color="danger" onClick={() => doMove(attackMonster, { monsterIndex: i, player: props.player })}>Attack - {monster.name}</Button>
                        })}
                        <Button className="action" id="flee" color="primary">Flee</Button>
                        <Button className="action" id="defend" color="primary">Defend</Button>
                    </>) || (
                        <>
                            <Button className="action" id="walk" color="primary" onClick={() => doMove(progress, { player: props.player })}>Onwards!</Button>
                            {(treasureChest &&
                                <Button className="action" id="deeper" color="warning" onClick={() => doMove(openTreasureChest, { player: props.player })}>Treasure!</Button>
                            )}
                            {(goDeeper &&
                                <Button className="action" id="deeper" color="info" onClick={() => doMove(downALevel, { player: props.player })}>Deeper!</Button>
                            )}
                        </>
                    )}
                <Button className="action" id="inventory" color="success" onClick={toggle}>Inventory</Button>{' '}
                {
                    !monsters && <Button className="action" id="teleport" color="primary" onClick={() => props.teleport('town')}>Teleport</Button>
                }
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Inventory</ModalHeader>
                <Inventory />
            </Modal>
        </div>
    )
} export default Dungeon;