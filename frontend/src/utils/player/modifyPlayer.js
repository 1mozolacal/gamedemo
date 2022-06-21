
const modifiyPlayer = ({ player, effects }) => {

    if (effects?.item?.type == 'equipment') {
        return changeEquipment({ player, equipment: effects.item })
    }


}

const changeEquipment = ({ player, equipment }) => {
    //todo add a check if the item is in your inventory
    let clone = Object.assign({}, player) // deep copy

    const equipType = equipment.equipmentType

    clone.equipment[equipType] = equipment
    return clone
}

const addEffect = ({ player, effect }) => {
    let clone = Object.assign({}, player) // deep copy

    if ('hunger' in effect) {
        clone.hunger = Math.min(100, clone.hunger + effect.hunger)
    }
    if ('health' in effect) {
        clone.health = Math.min(clone.maxHealth, clone.health + effect.health)
    }
    if ('mana' in effect) {
        clone.mana = Math.min(clone.maxMana, clone.mana + effect.mana)
    }
    if ('combat' in effect) {
        clone.combatEffects.push(effect.combat)
    }
    if ('buff' in effect) {
        clone.buff.push(effect.buff)
    }


    return clone
}

export default modifiyPlayer