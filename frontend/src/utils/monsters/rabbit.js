import CreateGenericMonster from './genericMonster'

const CreateRabbit = (variation = true) => {
    var rabbit = CreateGenericMonster('Cursed Rabbit')
    rabbit.attack = 8
    rabbit.health = 20
    rabbit.image = '/monsters/cursedRabit.webp'
    return rabbit
}

export default CreateRabbit