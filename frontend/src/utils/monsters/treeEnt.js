import CreateGenericMonster from './genericMonster'

const CreateRreeEnt = (variation = true) => {
    var treeEnt = CreateGenericMonster('rock elemental')
    treeEnt.attack = 4
    treeEnt.health = 20
    treeEnt.defence = 8
    treeEnt.image = '/monsters/treeEnt.png'
    // treeEnt.imageHeight = 100
    return treeEnt
}

export default CreateRreeEnt