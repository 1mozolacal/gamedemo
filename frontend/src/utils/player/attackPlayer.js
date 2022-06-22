const AttackPlayer = (player, monsters) => {
    let clone = Object.assign({}, player) // deep copy

    console.log("in attack", monsters)

    monsters.forEach(monster => {
        if (monster.health <= 0) {
            return
        }
        const critialStrike = Math.random() * 20 < 1 ? monster.attack * 5 : 0
        clone.health = clone.health - Math.max(0, monster.attack - clone.baseDefence + critialStrike, (monster.attack + critialStrike) / clone.baseDefence)
    });
    return clone
}

export default AttackPlayer