import CreateBat from "./bat";
import CreateRabbit from "./rabbit";
import CreateRat from "./rat";
import CreateSkeleton from "./skeleton";
import CreateSlime from "./slime";
import CreateZombie from "./zombie";

const level0 = {
    maxNumberOfCreatures: 1,
    minNumberOfCreatures: 1,
    list: [
        {
            creature: CreateSlime,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateRabbit,
            probabilityWeighting: 1,
            creatureNumAmount: 1,
        },
    ],
}

const level1 = {
    maxNumberOfCreatures: 2,
    minNumberOfCreatures: 1,
    list: [
        {
            creature: CreateSlime,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateRabbit,
            probabilityWeighting: 1,
            creatureNumAmount: 1,
        },
    ],
}

const level2 = {
    maxNumberOfCreatures: 2,
    minNumberOfCreatures: 1,
    list: [
        {
            creature: CreateSlime,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateRat,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateRabbit,
            probabilityWeighting: 1,
            creatureNumAmount: 1,
        },
    ],
}

const level3 = {
    maxNumberOfCreatures: 3,
    minNumberOfCreatures: 1,
    list: [
        {
            creature: CreateSlime,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateRat,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateRabbit,
            probabilityWeighting: 1,
            creatureNumAmount: 1,
        },
        {
            creature: CreateBat,
            probabilityWeighting: 5,
            creatureNumAmount: 1,
        },
    ],
}

const level4 = {
    maxNumberOfCreatures: 2,
    minNumberOfCreatures: 1,
    list: [
        {
            creature: CreateSlime,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateRat,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateBat,
            probabilityWeighting: 20,
            creatureNumAmount: 1,
        },
    ],
}

const level5 = {
    maxNumberOfCreatures: 3,
    minNumberOfCreatures: 1,
    list: [
        {
            creature: CreateRat,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateBat,
            probabilityWeighting: 20,
            creatureNumAmount: 1,
        },
    ],
}

const level6 = {
    maxNumberOfCreatures: 1,
    minNumberOfCreatures: 1,
    list: [
        {
            creature: CreateSkeleton,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateBat,
            probabilityWeighting: 20,
            creatureNumAmount: 1,
        },
    ],
}

const level7 = {
    maxNumberOfCreatures: 1,
    minNumberOfCreatures: 1,
    list: [
        {
            creature: CreateSkeleton,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateZombie,
            probabilityWeighting: 20,
            creatureNumAmount: 1,
        },
    ],
}

const level8 = {
    maxNumberOfCreatures: 3,
    minNumberOfCreatures: 1,
    list: [
        {
            creature: CreateSkeleton,
            probabilityWeighting: 10,
            creatureNumAmount: 1,
        },
        {
            creature: CreateZombie,
            probabilityWeighting: 20,
            creatureNumAmount: 1,
        },
    ],
}

const GetMonsters = (dungeonLevel = 0) => {
    var monsters = []

    var levels = [level0, level1, level2, level3, level4, level5, level6, level7, level8]

    const selectedLevel = levels[Math.max(0, Math.min(levels.length - 1, dungeonLevel))]

    const selectedNumOfMonsters = selectedLevel.minNumberOfCreatures + Math.ceil(Math.random() * (selectedLevel.maxNumberOfCreatures - selectedLevel.minNumberOfCreatures))
    const totalWeighting = selectedLevel.list.reduce((partialSum, a) => partialSum + a.probabilityWeighting, 0)

    for (var i = 0; i < selectedNumOfMonsters; i++) {
        var currSelector = Math.random() * totalWeighting
        selectedLevel.list.forEach(monster => {
            if (currSelector <= 0) {
                return
            }
            currSelector -= monster.probabilityWeighting
            if (currSelector <= 0) {
                monsters.push(monster.creature())
            }
        })
    }
    return monsters
}

export default GetMonsters