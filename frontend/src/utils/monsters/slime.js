import CreateGenericMonster from './genericMonster'

const CreateSlime = (variation = true) => {
    var slime = CreateGenericMonster('slime')
    slime.attack = 2
    return slime
}

export default CreateSlime