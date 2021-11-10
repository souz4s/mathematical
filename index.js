const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("First number for sum: ", (first) => {
    rl.question("Second number for sum: ", (second) => {
        var math = parseInt(first) + parseInt(second)

        if (math > 10) {
            var minusRseult = 10 - math

            console.log("The result is: " + "(" + first + " + " + second + ")" + " " + minusRseult + " = 10")
        }

        if (math < 10) {
            var sumRseult = 10 - math

            console.log("The result is: " + "(" + first + " + " + second + ")" + " + " + sumRseult + " = 10")
        }
    })
})