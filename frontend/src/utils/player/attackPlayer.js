const AttackPlayer = (player, monsters) => {
    let clone = Object.assign({}, player) // deep copy
    const messages = []
    monsters.forEach(monster => {
        if (monster.health <= 0) {
            return
        }
        messages.push({ text: `The ${monster.name} hit you.` })
        const critialStrike = Math.random() * 20 < 1 ? monster.attack * 5 : 0
        clone.health = clone.health - Math.max(0, monster.attack - clone.baseDefence + critialStrike, (monster.attack + critialStrike) / clone.baseDefence)
    });
    return {
        player: clone,
        messages
    }
}

export default AttackPlayer