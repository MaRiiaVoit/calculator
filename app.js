let num = 42 // number
let firstName = 'Mariia' // string
const isProgrammer = true // boolean

/* Can Do
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let num_ = 12
let first_name = 'Elena' // no
let myNum = 34 // good
let num42 = 10
*/

/* Restracted
let 42num = '11'
let my-num = 1
let const
*/

// firstName = 'Max'
// isProgrammer = false // error


// alert(firstName)
// console.log('Test:', num, isProgrammer)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num 
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = (num + 10 * 2) / (5 - 1)
// console.log(num3)

// const fullName = firstName + ' Voitenko'
// const fullName = firstName + ' ' + 'Voitenko'

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divisionBtn = document.getElementById('division')
let action = '+'

// console.log(resultElement.textContent)
// resultElement.textContent = 42

// console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiplyBtn.onclick = function () {
    action = '*'
}

divisionBtn.onclick = function () {
    action = '/'
}

function printRisult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNombersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2 
    }

    if (actionSymbol == '-') {
        return num1 - num2 
    }

    if (actionSymbol == '*') {
        return num1 * num2 
    }

    if (actionSymbol == '/') {
        return num1 / num2 
    }
    
    // return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {
    const result = computeNombersWithAction(input1, input2, action)
    printRisult(result)

//    if (action == '+') {
//        const sum = Number(input1.value) + Number(input2.value)
//        printRisult(sum)
//    } else if (action == '-') {
//        const sum = Number(input1.value) - Number(input2.value)
//        printRisult(sum)
//    }
}