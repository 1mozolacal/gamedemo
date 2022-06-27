import CreateGenericMonster from './genericMonster'

const CreateRat = (variation = true) => {
    var rat = CreateGenericMonster('rat')
    rat.defence = 2
    rat.image = '/monsters/rat.png'
    return rat
}

export default CreateRat