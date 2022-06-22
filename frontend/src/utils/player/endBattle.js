const levelUpPlayer = (player) => {
    let clone = Object.assign({}, player) // deep copy

    clone.experience = player.experience - player.experienceToNextLevel
    clone.level = player.level + 1
    clone.experienceToNextLevel = player.experienceToNextLevel + (50 * player.level)

    clone.maxHealth = player.maxHealth + Math.floor(Math.random() * 5) + 5 + Math.floor(player.traits.constitution / 2)
    clone.maxMana = player.maxMana + Math.floor(Math.random() * 10) + Math.floor(player.traits.wisdom / 2) + Math.floor(player.traits.intelligence / 4)

    clone.health = clone.maxHealth
    clone.mana = clone.maxMana

    return clone
}

const giveBattleExperience = (player, monsters) => {
    //todo: check if leveled up
    const messages = []

    let clone = Object.assign({}, player) // deep copy
    monsters.forEach(monster => {
        clone.experience += monster.expirenceDrop
        messages.push(`${monster.expirenceDrop} exp from ${monster.name}`)
    })

    if (clone.experience >= clone.experienceToNextLevel) {
        clone = levelUpPlayer(clone)
        messages.push('LEVEL UP!')
    }

    return {
        player: clone,
        messages
    }
}


export default giveBattleExperience
export { levelUpPlayer }