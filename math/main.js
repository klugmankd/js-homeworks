require('operations/add');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What operation you want to execute?', (answer) => {
    let choice = answer.trim();

    switch (choice) {
        case 1:
            let firstConjunction, secondConjunction, result;
            rl.question('First conjunction: ', (answer) => {
                firstConjunction = answer.trim();
            });
            rl.question('Second conjunction: ', (answer) => {
                secondConjunction = answer.trim();
            });
            result = add(firstConjunction, secondConjunction);
            console.log(`${result.firstConjunction}${result.operationSign}${result.secondConjunction}=${result.sum}`);
            break;
    }

    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});
