import CreateGenericMonster from './genericMonster'

const CreateRockElemental = (variation = true) => {
    var rockElemental = CreateGenericMonster('rock elemental')
    rockElemental.attack = 6
    rockElemental.health = 20
    rockElemental.defence = 8
    rockElemental.image = '/monsters/rockElemental.png'
    // rockElemental.imageHeight = 100
    return rockElemental
}

export default CreateRockElemental