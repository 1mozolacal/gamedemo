const RequestFood = (player) => {
    const messages = []
    let clone = Object.assign({}, player) // deep copy

    if (clone.gold >= 2) {
        clone.hunger = Math.min(100, clone.hunger + 25)
        clone.gold -= 2
        messages.push({ text: "Mmmmm tasty" })
    } else {
        messages.push({ text: "You need at least 2 gold" })
    }

    return {
        player: clone,
        messages
    }
}

const RequestSleep = (player) => {
    const messages = []
    let clone = Object.assign({}, player) // deep copy

    if (clone.gold >= 10) {
        clone.hunger = Math.max(0, clone.hunger - 15)
        clone.gold -= 10
        clone.health = Math.min(clone.maxHealth, clone.health + (0.3 * clone.maxHealth))
        messages.push({ text: "Nighty night... zzz" })
    } else {
        messages.push({ text: "You need at least 10 gold" })
    }

    return {
        player: clone,
        messages
    }
}

export { RequestFood, RequestSleep } 