import CreateGenericMonster from './genericMonster'

const CreateRat = (variation = true) => {
    var rat = CreateGenericMonster('rat')
    rat.defence = 2
    return rat
}

export default CreateRat