

const GetGenericPlayer = (name = 'Nameless Soul') => {
    return {
        name: name,
        level: 1,
        experience: 0,
        experienceToNextLevel: 100,
        hunger: 100,
        money: 0,
        health: 100,
        maxHealth: 100,
        mana: 100,
        maxMana: 100,
        inventory: [],
        equipment: {},
        buffs: [],
        combatEffects: [],
        traits: {
            intelligence: 0,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            wisdom: 0,
            charisma: 0
        },
        baseAttack: 10,
        baseDefence: 5,//can't be zero will cause issues
    }
}

export default GetGenericPlayer