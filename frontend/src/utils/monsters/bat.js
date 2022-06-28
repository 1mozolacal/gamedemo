import CreateGenericMonster from './genericMonster'

const CreateBat = (variation = true) => {
    var bat = CreateGenericMonster('bat')
    bat.attack = 2
    bat.image = '/monsters/bat.webp'
    return bat
}

export default CreateBat