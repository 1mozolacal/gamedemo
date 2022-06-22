const levelUpPlayer = (player) => {
    let clone = Object.assign({}, player) // deep copy

    clone.experience = player.experience - player.experienceToNextLevel
    clone.level = player.level + 1
    clone.experienceToNextLevel = player.experienceToNextLevel + (50 * player.level)

    clone.heath = player.heath + floor(Math.random() * 5) + 5 + floor(player.traits.constitution / 2)
    clone.mana = player.mana + floor(Math.random() * 10) + floor(player.traits.wisdom / 2) + floor(player.traits.intelligence / 4)

    return clone
}

export default levelUpPlayer