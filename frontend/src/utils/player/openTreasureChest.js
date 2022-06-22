const OpenTreasureChest = (player, chest) => {
    let clone = Object.assign({}, player) // deep copy

    const messages = []

    if (chest.dangerous) {
        if (chest.dexteritySkill > player.traits.dexterity) {
            clone.health -= chest.damage
            messages.push({ text: "Ahh it's a trap!" })
        } else {
            messages.push({ text: "Ahh it's a trap, but got out scot free." })
        }
    }

    clone.gold += chest.gold

    //add is locked mechanic

    //added items giving to player     


    return {
        player: clone,
        messages: messages
    }
}
export default OpenTreasureChest