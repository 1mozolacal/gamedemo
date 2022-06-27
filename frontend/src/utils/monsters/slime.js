import CreateGenericMonster from './genericMonster'

const CreateSlime = (variation = true) => {
    var slime = CreateGenericMonster('slime')
    slime.attack = 2
    slime.image = '/monsters/slime.png'
    return slime
}

export default CreateSlime