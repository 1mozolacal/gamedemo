const CreateTreasureChest = (level) => {
    const isDangerous = Math.random() < 0.2
    const isEpic = Math.random() < 0.02 * level
    const isOnlyGold = !isEpic ? Math.random() < 0.3 : false
    const goldAmont = isOnlyGold ?
        Math.floor(Math.random() * 15 * level) + 2
        : Math.floor(Math.random() * 5 * level) + 2

    return {
        dangerous: isDangerous,
        isLocked: !isDangerous ? Math.random() < (0.3 + 0.05 * level) : false,
        dexteritySkill: Math.ceil(Math.random() * level),//If player's dexiderity is higher than bad effect is avoided
        gold: isEpic ? 0 : goldAmont,
        items: [],
        damage: 2 + Math.floor(level * level * Math.random()),
    }
}

export default CreateTreasureChest