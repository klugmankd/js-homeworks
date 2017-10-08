let operations = {
    "adding": require('./operations/add'),
    "subtracting": require('./operations/subtract'),
    "multiplying": require('./operations/multiply'),
    "dividing": require('./operations/divide'),
    "powering": require('./operations/pow'),
    "deg2rad": require('./operations/deg'),
    "rad2deg": require('./operations/rad'),
};

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let choice;
rl.question('What operation you want to execute?', (answer) => {
    choice = parseInt(answer.trim());
    switch (choice) {
        case 1:
            let firstConjunction, secondConjunction, result;
            result = operations.adding.add(firstConjunction, secondConjunction);
            console.log(`${result.firstConjunction}${result.operationSign}${result.secondConjunction}=${result.sum}`);
            break;
    }
    rl.close();
});



