/*Types

-type: equipment, effectProvider
-equipmentType: helment, chestPiece, leftHand, rightHand
-effect: {
    hunger:
    health:
    mana:
    combat: -- spells will add this you you know to hurt the enemy or something
    buff: -- amoror or attack increase
}
*/


const CreateDrumStick = () => {

    return {
        type: 'effectProvider',
        effect: {
            hunger: 5
        }
    }

}