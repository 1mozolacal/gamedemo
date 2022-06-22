import CreateRat from "./rat";
import CreateSlime from "./slime";

const GetMonsters = (dungeonLevel = 0) => {
    var monsters = []

    if (Math.random() * 2 > 1) {
        monsters.push(CreateRat())
    } else {
        monsters.push(CreateSlime())
    }
    return monsters
}

export default GetMonsters