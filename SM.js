

function sleep(ms){
    return new Promise(
        res=>setTimeout(res, ms)
    )
}
const prompt = require('prompt-sync')();

async function input(message){
    await sleep(4000);
    console.log(message);
    await sleep(4000);
    console.log("¬води значение лох:")
    input(prompt())
}

let value = prompt("¬ведите число:  ")
input(value);