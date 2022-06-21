import React from "react"
import Grid from '@mui/material/Grid';
import { Line, Circle } from 'rc-progress';
import Styling from './styling.module.css'


const PlayerStats = ({ health, maxHealth, money, mana, maxMana, name, experience, experienceToNextLevel, level }) => {

  return (<Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="flex-start"
    spacing={2}
    className={Styling['holder']}
  >
    <Grid item sm={6} xs={12}>
      <div>
        <div>{name}'s info</div>
        <div>Gold:{money}</div>
        <div>Levet: {level}</div>
        <Line percent={experience / experienceToNextLevel * 100} strokeWidth={1} strokeColor="#6bfff0" ></Line>
      </div>
    </Grid>
    <Grid item sm={6} xs={12}>

      <Grid
        container
        direction="row"
        justifyContent="flex-end"
      >
        <Grid item >
          <div className={Styling['circle-holder']}>
            <Circle className={Styling['circle']} percent={health / maxHealth * 100} strokeWidth={4} strokeColor="#ff0d00" />
          </div>
        </Grid>
        <Grid item className={Styling['circle-holder']}>
          <div className={Styling['circle-holder']}>
            <Circle className={Styling['circle']} percent={mana / maxMana * 100} strokeWidth={4} strokeColor="#4269f5" />
          </div>
        </Grid>

      </Grid>

    </Grid>
  </Grid>)
}

export default PlayerStats