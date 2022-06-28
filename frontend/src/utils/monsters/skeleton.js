import CreateGenericMonster from './genericMonster'

const CreateSkeleton = (variation = true) => {
    var skeleton = CreateGenericMonster('skeleton')
    skeleton.attack = 14
    skeleton.health = 25
    skeleton.defence = 6
    skeleton.image = '/monsters/skeleton.webp'
    skeleton.imageHeight = 150
    return skeleton
}

export default CreateSkeleton