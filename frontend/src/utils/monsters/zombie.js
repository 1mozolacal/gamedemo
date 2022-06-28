import CreateGenericMonster from './genericMonster'

const CreateZombie = (variation = true) => {
    var zombie = CreateGenericMonster('zombie')
    zombie.attack = 8
    zombie.health = 35
    zombie.defence = 12
    zombie.image = '/monsters/zombie.png'
    zombie.imageHeight = 150
    return zombie
}

export default CreateZombie