import Grid from '@mui/material/Grid';
import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import Styling from './styling.module.css'


function DungeonDisplay(props) {

    const backgroundColor = '' + (255 - (props.level * 10))

    const levelBackGround = [
        '/dungeonBackground/dungeon_lvl_1.jpg',
        '/dungeonBackground/dungeon_lvl_2.jpg',
        '/dungeonBackground/dungeon_lvl_3.jpg',
        '/dungeonBackground/dungeon_lvl_4.png',
        '/dungeonBackground/dungeon_lvl_5.jpg',
        '/dungeonBackground/dungeon_lvl_6.jpg',
        '/dungeonBackground/dungeon_lvl_7.jpg',
        '/dungeonBackground/dungeon_lvl_8.jpg',
        '/dungeonBackground/dungeon_lvl_9.jpg',
        '/dungeonBackground/dungeon_lvl_10.jpg',
        '/dungeonBackground/dungeon_lvl_11.jpg',
        '/dungeonBackground/dungeon_lvl_12.jpg',
        '/dungeonBackground/dungeon_lvl_13.jpg',
        '/dungeonBackground/dungeon_lvl_14.jpg',
        '/dungeonBackground/dungeon_lvl_15.jpg',
        '/dungeonBackground/dungeon_lvl_16.jpg',
        '/dungeonBackground/dungeon_lvl_17.jpg',
    ]

    const image = levelBackGround[Math.min(levelBackGround.length - 1, props.level)]

    return (
        <>
            <div className={Styling.backdrop} style={{ backgroundColor: `rgb(${backgroundColor} ${backgroundColor} ${backgroundColor})` }}>hi</div>
            <div className={Styling.dungeonimage} style={{ height: props.height, width: props.width, backgroundImage: `url(${image})` }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className={Styling.monsterholder}
                >
                    {props.monsters &&
                        props.monsters.map((monster, i) => {
                            return <Grid item>
                                <img src={monster.image} width={monster.imageWidth} height={monster.imageHeight}></img> <br />
                                <LinearProgress strokeWidth={4} trailWidth={4} style={{ width: '75px', colorPrimary: '#ff0000' }} color="error" variant="determinate" value={(monster.health / monster.maxHealth) * 100} />
                            </Grid>
                        })}

                </Grid>
            </div>
        </>
    )
} export default DungeonDisplay;