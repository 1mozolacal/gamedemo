const LowerHunger = (player, amount = 1) => {
    let clone = Object.assign({}, player) // deep copy
    let messages = []
    if (clone.hunger <= 0) {
        messages.append({ text: "You are starving" })
        clone.health = clone.health - 5
    } else {
        clone.hunger -= amount
    }

    return {
        messages,
        player: clone
    }
}
export default LowerHunger