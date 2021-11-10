const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("First number for sum: ", (first) => {
    rl.question("Second number for sum: ", (second) => {
        var math = parseInt(first) + parseInt(second)

        if (math > 10) {
            var minusResult = 10 - math

            console.log("The result is: " + "(" + first + " + " + second + ")" + " " + minusResult + " = 10")
        }

        if (math < 10) {
            var sumResult = 10 - math

            console.log("The result is: " + "(" + first + " + " + second + ")" + " + " + sumResult + " = 10")
        }
    })
})