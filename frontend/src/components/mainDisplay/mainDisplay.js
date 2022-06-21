
import * as React from 'react';
import { useState } from "react";
import Dungeon from '../dungoen/dungeon';
import Town from '../town/town'
// import 'bootstrap/dist/css/bootstrap.min.css';


function MainDisplay(props) {
    const [environment, setEnvironment] = useState('dungeon');

    return (
        <div>
            {environment == 'dungeon' && (<Dungeon {...props} teleportHome={() => setEnvironment('town')} />)}
            {environment == 'town' && (<Town {...props} teleportDungeon={() => setEnvironment('dungeon')} />)}
        </div>
    )
} export default MainDisplay;