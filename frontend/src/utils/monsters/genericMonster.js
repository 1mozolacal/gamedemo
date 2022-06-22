const CreateGenericMonster = (name = 'nameless monster') => {
    return {
        name: name,
        health: 10,
        mana: 0,
        attack: 5,
        defence: 5,
        expirenceDrop: Math.ceil(Math.random() * 5) + 1,
        goldDrop: Math.floor(Math.random() * 5),
        goFirstSpeed: 0,//if this value is high then player's dexterity then it attacks first
    }
}
export default CreateGenericMonster