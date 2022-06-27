import CreateRat from "./rat";
import CreateSlime from "./slime";

const GetMonsters = (dungeonLevel = 0) => {
    var monsters = []

    if (Math.random() * 2 > 1) {
        monsters.push(CreateRat())
        monsters.push(CreateSlime())
    } else {
        monsters.push(CreateSlime())
        monsters.push(CreateSlime())
        monsters.push(CreateSlime())
    }
    return monsters
}

export default GetMonsters