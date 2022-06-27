
import * as React from 'react';
import { useState } from "react";
import Dungeon from '../dungoen/dungeon';
import Town from '../town/town'
import Inn from '../inn/inn';
import Shop from '../shop/shop';
// import 'bootstrap/dist/css/bootstrap.min.css';


function MainDisplay(props) {
    const [environment, setEnvironment] = useState('dungeon');

    console.log("env", environment)

    return (
        <div>
            {environment == 'dungeon' && (<Dungeon {...props} teleport={setEnvironment} />)}
            {environment == 'town' && (<Town {...props} teleport={setEnvironment} />)}
            {environment == 'shop' && (<Shop {...props} teleport={setEnvironment} />)}
            {environment == 'inn' && (<Inn {...props} teleport={setEnvironment} />)}
        </div>
    )
} export default MainDisplay;