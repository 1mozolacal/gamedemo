import React, { useEffect } from "react"
import Grid from '@mui/material/Grid';
import { Line, Circle } from 'rc-progress';
import Styling from './styling.module.css'
import LinearProgress from '@mui/material/LinearProgress';



const PlayerStats = ({ health, maxHealth, money, mana, maxMana, name, experience, experienceToNextLevel, level }) => {
  let rect = {left: 0, right: 0, top: 0, bottom: 0}
  let rectMa = {left: 0, right: 0, top: 0, bottom: 0}
  useEffect(()=>{
    const el = document.getElementById("healthCircle")
    rect = el.getBoundingClientRect();

    const ma = document.getElementById("manaCircle")
    rectMa = ma.getBoundingClientRect();

    console.log(rect.top, rect.right, rect.bottom, rect.left);
  })

  return (<Grid
    container
    direction="column"
    justifyContent="space-between"
    alignItems="flex-start"
    spacing={2}
    className={Styling['holder']}
  >
    <Grid item sm={6} xs={12}>
      <div>
        <div id="stat">{name}'s stats</div>
        <br/>
        <div id="stat"><img src={"/gold.png"} alt="empty" width="25" height="25" id="itemSlot"/>{money} </div>
        <div id="stat">Level: {level}</div>
        <LinearProgress variant="determinate" value={experience} />
      </div>
    </Grid>
    <Grid item sm={6} xs={6}>

      <Grid
        container
        direction="row"
        justifyContent="flex-end"
      >
        <Grid item lg={12} xs={6}>
          <div className={Styling['circle-holder']}>
            <p id="hp" style={{marginTop: rect.top + 40, marginBottom: rect.bottom, marginLeft: rect.left + 58, marginRight: rect.right}}>{health}</p>
            <Circle id="healthCircle" className={Styling['circle']} percent={health / maxHealth * 100} strokeWidth={4} strokeColor="#ff0d00" />
          </div> 
        </Grid>
        <Grid item lg={12} xs={6} className={Styling['circle-holder']}>
          <div className={Styling['circle-holder']}>
          <p id="mana" style={{marginTop: rectMa.top + 40, marginBottom: rectMa.bottom, marginLeft: rectMa.left + 58, marginRight: rectMa.right}}>{mana}</p>
            <Circle id="manaCircle" className={Styling['circle']} percent={mana / maxMana * 100} strokeWidth={4} strokeColor="#4269f5" />
          </div>
        </Grid>

      </Grid>

    </Grid>
  </Grid>)
}

export default PlayerStats