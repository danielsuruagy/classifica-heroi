let finalResult = getResult(10, 0);
let eloHero = getEloResult(finalResult);

function getResult(wins, losses) {
    return wins - losses;
}

function getEloResult(finalResult) {
    let levels = [
        { min: -Infinity, max: 10, name: "Ferro" },
        { min: 11, max: 20, name: "Bronze" },
        { min: 21, max: 50, name: "Prata" },
        { min: 51, max: 80, name: "Ouro" },
        { min: 81, max: 90, name: "Diamante" },
        { min: 91, max: 100, name: "Lendário" },
        { min: 101, max: Infinity, name: "Imortal" }
    ];

    for (let level of levels) {
        if (finalResult >= level.min && finalResult <= level.max) {
            console.log(`O Herói tem saldo de ${finalResult} e está no nível de ${level.name}`);
            return level.name;
        }
    }
}