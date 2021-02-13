let turn = 'red'
let stopEvent = false

var numberOfPlayers = 0;

function getPlayerName() {
    if (numberOfPlayers == 1) {
        firstPlayerName = prompt('Enter first player name with Red color')
        document.querySelector('#firstPlayerName').textContent = firstPlayerName + "'s turn";
    }
    else if (numberOfPlayers == 2) {
        firstPlayerName = prompt('Enter first player name with Red color')
        document.querySelector('#firstPlayerName').textContent = firstPlayerName + "'s turn";
        secondPlayerName = prompt('Enter second player name with Blue color')
        document.querySelector('#secondPlayerName').textContent = secondPlayerName + "'s turn";
    }
    else if (numberOfPlayers == 3) {
        firstPlayerName = prompt('Enter first player name with Red color')
        document.querySelector('#firstPlayerName').textContent = firstPlayerName + "'s turn";
        secondPlayerName = prompt('Enter second player name with Blue color')
        document.querySelector('#secondPlayerName').textContent = secondPlayerName + "'s turn";
        thirdPlayerName = prompt('Enter third player name with Green color')
        document.querySelector('#thirdPlayerName').textContent = thirdPlayerName + "'s turn";
    }
    else {
        firstPlayerName = prompt('Enter first player name with Red color')
        document.querySelector('#firstPlayerName').textContent = firstPlayerName + "'s turn";
        secondPlayerName = prompt('Enter second player name with Blue color')
        document.querySelector('#secondPlayerName').textContent = secondPlayerName + "'s turn";
        thirdPlayerName = prompt('Enter third player name with Green color')
        document.querySelector('#thirdPlayerName').textContent = thirdPlayerName + "'s turn";
        fourthPlayerName = prompt('Enter fourth player name with Yellow color')
        document.querySelector('#fourthPlayerName').textContent = fourthPlayerName + "'s turn";
    }
}


document.querySelector('#red').style.marginLeft = '0vh'
document.querySelector('#red').style.marginTop = '0vh'
document.querySelector('#blue').style.marginLeft = '0vh'
document.querySelector('#blue').style.marginTop = '0vh'
document.querySelector('#L1').style.marginLeft = '0vh'
document.querySelector('#L1').style.marginTop = '0vh'
document.querySelector('#L2').style.marginLeft = '0vh'
document.querySelector('#L2').style.marginTop = '0vh'
document.querySelector('#L3').style.marginLeft = '0vh'
document.querySelector('#L3').style.marginTop = '0vh'
document.querySelector('#L4').style.marginLeft = '0vh'
document.querySelector('#L4').style.marginTop = '0vh'
document.querySelector('#L5').style.marginLeft = '0vh'
document.querySelector('#L5').style.marginTop = '0vh'
document.querySelector('#L6').style.marginLeft = '0vh'
document.querySelector('#L6').style.marginTop = '0vh'
document.querySelector('#L7').style.marginLeft = '0vh'
document.querySelector('#L7').style.marginTop = '0vh'
document.querySelector('#L8').style.marginLeft = '0vh'
document.querySelector('#L8').style.marginTop = '0vh'
document.querySelector('#s1').style.marginLeft = '0vh'
document.querySelector('#s1').style.marginTop = '0vh'
document.querySelector('#s2').style.marginLeft = '0vh'
document.querySelector('#s2').style.marginTop = '0vh'
document.querySelector('#s3').style.marginLeft = '0vh'
document.querySelector('#s3').style.marginTop = '0vh'
document.querySelector('#s4').style.marginLeft = '0vh'
document.querySelector('#s4').style.marginTop = '0vh'
document.querySelector('#s5').style.marginLeft = '0vh'
document.querySelector('#s5').style.marginTop = '0vh'


function Winner() {
    var player0MarginLeft = Number(document.querySelector('#red').style.marginLeft.split(`v`)[0])
    var player0MarginTop = Number(document.querySelector('#red').style.marginTop.split(`v`)[0])

    var player1MarginLeft = Number(document.querySelector('#blue').style.marginLeft.split(`v`)[0])
    var player1MarginTop = Number(document.querySelector('#blue').style.marginTop.split(`v`)[0])

    var player2MarginLeft = Number(document.querySelector('#green').style.marginLeft.split(`v`)[0])
    var player2MarginTop = Number(document.querySelector('#green').style.marginTop.split(`v`)[0])

    var player3MarginLeft = Number(document.querySelector('#yellow').style.marginLeft.split(`v`)[0])
    var player3MarginTop = Number(document.querySelector('#yellow').style.marginTop.split(`v`)[0])

    return [[player0MarginLeft, player0MarginTop], [player1MarginLeft, player1MarginTop], [player2MarginLeft, player2MarginTop], [player3MarginLeft, player3MarginTop]]
}

function roll1() {
    return new Promise(async (resolve, reject) => {
        var diceNum = Math.floor(Math.random() * 6) + 1;
        playGif1()
        await new Promise(resolve => setTimeout(resolve, 1000))
        new Audio('DiceRoll.mp3').play()
        const diceImage = 'pics/dice' + diceNum + '.png';
        document.querySelector('#diceImg1').setAttribute('src', diceImage)
        await new Promise(resolve => setTimeout(resolve, 500))
        if (!stopEvent) {

            let isOutOfRange = checkRange(diceNum)

            if (isOutOfRange == true) {
                console.log("out of range")
                changeTurn()
            }
            else {
                run(diceNum)
            }
        }
    })
}

function roll2() {
    return new Promise(async (resolve, reject) => {
        var diceNum = Math.floor(Math.random() * 6) + 1;
        playGif2()
        await new Promise(resolve => setTimeout(resolve, 1000))
        new Audio('DiceRoll.mp3').play()
        const diceImage = 'pics/dice' + diceNum + '.png';
        document.querySelector('#diceImg2').setAttribute('src', diceImage)
        await new Promise(resolve => setTimeout(resolve, 500))
        if (!stopEvent) {

            let isOutOfRange = checkRange(diceNum)

            if (isOutOfRange == true) {
                console.log("out of range")
                changeTurn()
            }
            else {
                run(diceNum)
            }
        }
    })
}

function roll3() {
    return new Promise(async (resolve, reject) => {
        var diceNum = Math.floor(Math.random() * 6) + 1;
        playGif3()
        await new Promise(resolve => setTimeout(resolve, 1000))
        new Audio('DiceRoll.mp3').play()
        const diceImage = 'pics/dice' + diceNum + '.png';
        document.querySelector('#diceImg3').setAttribute('src', diceImage)
        await new Promise(resolve => setTimeout(resolve, 500))
        if (!stopEvent) {

            let isOutOfRange = checkRange(diceNum)

            if (isOutOfRange == true) {
                console.log("out of range")
                changeTurn()
            }
            else {
                run(diceNum)
            }
        }
    })
}

function roll4() {
    return new Promise(async (resolve, reject) => {
        var diceNum = Math.floor(Math.random() * 6) + 1;
        playGif4()
        await new Promise(resolve => setTimeout(resolve, 1000))
        new Audio('DiceRoll.mp3').play()
        const diceImage = 'pics/dice' + diceNum + '.png';
        document.querySelector('#diceImg4').setAttribute('src', diceImage)
        await new Promise(resolve => setTimeout(resolve, 500))
        if (!stopEvent) {

            let isOutOfRange = checkRange(diceNum)

            if (isOutOfRange == true) {
                console.log("out of range")
                changeTurn()
            }
            else {
                run(diceNum)
            }
        }
    })
}

var animation = ['pics/rolling.gif']
function playGif1() {
    gif = document.querySelector('#diceImg1')
    gif.src = animation[0]
}

function playGif2() {
    gif = document.querySelector('#diceImg2')
    gif.src = animation[0]
}

function playGif3() {
    gif = document.querySelector('#diceImg3')
    gif.src = animation[0]
}

function playGif4() {
    gif = document.querySelector('#diceImg4')
    gif.src = animation[0]
}

function checkRange(diceNum) {
    let isOutOfRange = false
    if (marginTop() == -88.2 && Math.floor((marginLeft() + Number(diceNum * -9.8)) * 10) / 10 < 1) {
        isOutOfRange = true
    }
    return isOutOfRange
}


function run(diceNum) {
    return new Promise(async (resolve, reject) => {
        if (checkRange(diceNum) == false) {
            for (i = 1; i <= diceNum; i++) {
                let direction = getDirection()
                move(direction)
                await new Promise(resolve => setTimeout(resolve, 300))
            }
        }
        checkLadderAndSnakes()
        checkLadderAndSnakes()
        checkLadderAndSnakes()
        checkLadderAndSnakes()
        checkWin()
        changeTurn()
    })
}

function move(direction) {

    if (direction == 'up') {
        document.querySelector(`#${turn}`).style.marginTop = String(marginTop() - 9.8) + 'vh'
        new Audio('move.flac').play()
    }
    else if (direction == 'right') {
        document.querySelector(`#${turn}`).style.marginLeft = String(marginLeft() + 9.8) + 'vh'
        new Audio('move.flac').play()
    }
    else if (direction == 'left') {
        document.querySelector(`#${turn}`).style.marginLeft = String(marginLeft() - 9.8) + 'vh'
        new Audio('move.flac').play()
    }

}

function getDirection() {

    if ((marginLeft() == 98 && ((((marginTop() * 10) % (-19.6 * 10)) / 10) == 0)) || (marginLeft() == 9.8 && ((((marginTop() * 10) % (-19.6 * 10)) / 10) !== 0))) {
        direction = 'up'
    }
    else if ((((marginTop() * 10) % (-19.6 * 10)) / 10) == 0) {
        direction = 'right'
    }
    else {
        direction = 'left'
    }
    return direction
}

function changeTurn() {
    if (numberOfPlayers == 4) {
        if (turn == 'red') {
            if (Winner()[1][0] == 9.8 && Winner()[1][1] == -88.2) {
                if (Winner()[2][0] == 9.8 && Winner()[2][1] == -88.2) {
                    if (Winner()[3][0] == 9.8 && Winner()[3][1] == -88.2) {
                        allDisabled()
                        stopEvent = true
                    }
                    else {
                        allDisabled()
                        document.querySelector('#fourthDice').disabled = false
                        turn = 'yellow'
                    }
                }
                else {
                    allDisabled()
                    document.querySelector('#thirdDice').disabled = false
                    turn = 'green'
                }
            }
            else {
                allDisabled()
                document.querySelector('#secondDice').disabled = false
                turn = 'blue'
            }
        }
        else if (turn == 'blue') {
            allDisabled()
            if (Winner()[2][0] == 9.8 && Winner()[2][1] == -88.2) {
                if (Winner()[3][0] == 9.8 && Winner()[3][1] == -88.2) {
                    if (Winner()[0][0] == 9.8 && Winner()[0][1] == -88.2) {
                        allDisabled()
                        stopEvent = true
                    }
                    else {
                        allDisabled()
                        document.querySelector('#firstDice').disabled = false
                        turn = 'red'
                    }
                }
                else {
                    allDisabled()
                    document.querySelector('#fourthDice').disabled = false
                    turn = 'yellow'
                }
            }
            else {
                allDisabled()
                document.querySelector('#thirdDice').disabled = false
                turn = 'green'
            }
        }
        else if (turn == 'green') {
            allDisabled()
            if (Winner()[3][0] == 9.8 && Winner()[3][1] == -88.2) {
                if (Winner()[0][0] == 9.8 && Winner()[0][1] == -88.2) {
                    if (Winner()[1][0] == 9.8 && Winner()[1][1] == -88.2) {
                        allDisabled()
                        stopEvent = true
                    }
                    else {
                        allDisabled()
                        document.querySelector('#secondDice').disabled = false
                        turn = 'blue'
                    }
                }
                else {
                    allDisabled()
                    document.querySelector('#firstDice').disabled = false
                    turn = 'red'
                }
            }
            else {
                allDisabled()
                document.querySelector('#fourthDice').disabled = false
                turn = 'yellow'
            }
        }
        else if (turn == 'yellow') {
            allDisabled()
            if (Winner()[0][0] == 9.8 && Winner()[0][1] == -88.2) {
                if (Winner()[1][0] == 9.8 && Winner()[1][1] == -88.2) {
                    if (Winner()[2][0] == 9.8 && Winner()[2][1] == -88.2) {
                        allDisabled()
                        stopEvent = true
                    }
                    else {
                        allDisabled()
                        document.querySelector('#thirdDice').disabled = false
                        turn = 'green'
                    }
                }
                else {
                    allDisabled()
                    document.querySelector('#secondDice').disabled = false
                    turn = 'blue'
                }
            }
            else {
                allDisabled()
                document.querySelector('#firstDice').disabled = false
                turn = 'red'
            }
        }
    }
    else if (numberOfPlayers == 3) {
        if (turn == 'red') {
            if (Winner()[1][0] == 9.8 && Winner()[1][1] == -88.2) {
                if (Winner()[2][0] == 9.8 && Winner()[2][1] == -88.2) {
                    allDisabled()
                    stopEvent = true
                }
                else {
                    allDisabled()
                    document.querySelector('#thirdDice').disabled = false
                    turn = 'green'
                }
            }
            else {
                allDisabled()
                document.querySelector('#secondDice').disabled = false
                turn = 'blue'
            }
        }
        else if (turn == 'blue') {
            allDisabled()
            if (Winner()[2][0] == 9.8 && Winner()[2][1] == -88.2) {
                if (Winner()[0][0] == 9.8 && Winner()[0][1] == -88.2) {
                    allDisabled()
                    stopEvent = true
                }
                else {
                    allDisabled()
                    document.querySelector('#firstDice').disabled = false
                    turn = 'red'
                }
            }
            else {
                allDisabled()
                document.querySelector('#thirdDice').disabled = false
                turn = 'green'
            }
        }
        else if (turn == 'green') {
            allDisabled()
            if (Winner()[0][0] == 9.8 && Winner()[0][1] == -88.2) {
                if (Winner()[1][0] == 9.8 && Winner()[1][1] == -88.2) {
                    allDisabled()
                    stopEvent = true
                }
                else {
                    allDisabled()
                    document.querySelector('#secondDice').disabled = false
                    turn = 'blue'
                }
            }
            else {
                allDisabled()
                document.querySelector('#firstDice').disabled = false
                turn = 'red'
            }
        }
    }
    else if (numberOfPlayers == 2) {
        if (turn == 'red') {
            if (Winner()[1][0] == 9.8 && Winner()[1][1] == -88.2) {
                allDisabled()
                stopEvent = true
            }
            else {
                allDisabled()
                document.querySelector('#secondDice').disabled = false
                turn = 'blue'
            }
        }
        else if (turn == 'blue') {
            allDisabled()
            if (Winner()[0][0] == 9.8 && Winner()[0][1] == -88.2) {
                allDisabled()
                stopEvent = true
            }
            else {
                allDisabled()
                document.querySelector('#firstDice').disabled = false
                turn = 'red'
            }
        }
    }
    else if (numberOfPlayers == 1) {
        if (turn == 'red') {
            if (Winner()[0][0] == 9.8 && Winner()[0][1] == -88.2) {
                allDisabled()
                stopEvent = true
            }
            else {
                allDisabled()
                document.querySelector('#firstDice').disabled = false
                turn = 'red'
            }
        }
    }
}

function allDisabled() {
    document.querySelector('#firstDice').disabled = true
    document.querySelector('#secondDice').disabled = true
    document.querySelector('#thirdDice').disabled = true
    document.querySelector('#fourthDice').disabled = true
}

winners = []
winNum = 0
function checkWin() {
    if (marginTop() == -88.2 && marginLeft() == 9.8) {
        console.log(turn + " win's")
        // document.querySelector('#first').textContent = `${turn} wins`
        // stopEvent = true;
        // unhide1()
        for (i = 0; i < Winner().length; i++) {
            var names = [firstPlayerName, secondPlayerName, thirdPlayerName, fourthPlayerName]
            var positions = ["First: ", "Second: ", "Third: ", "Fourth: "]
            var idNames = ["first", "second", "third", "fourth"]
            if (Winner()[i][0] == 9.8 && Winner()[i][1] == -88.2 && !(winners.includes(names[i]))) {
                document.getElementById(idNames[winNum]).innerHTML += positions[winNum] + names[i]
                console.log(idNames[winNum] + positions[winNum] + names[i])
                winners.push(names[i])
                winNum++
            }
        }
    }
    else {
        return 'none'
    }
}

function randomize() {
    let ladder1Random = Math.floor(Math.random() * 10) + 1;
    let ladder2Random = Math.floor(Math.random() * 10) + 1;
    let ladder3Random = Math.floor(Math.random() * 10) + 1;
    let ladder4Random = Math.floor(Math.random() * 9) + 1;
    let ladder5Random = Math.floor(Math.random() * 9) + 1;
    let ladder6Random = Math.floor(Math.random() * 9) + 1;
    let ladder7Random = Math.floor(Math.random() * 9) + 1;
    let ladder8Random = Math.floor(Math.random() * 8) + 1;
    let snake1Random = Math.floor(Math.random() * 8) + 1;
    let snake2Random = Math.floor(Math.random() * 8) + 1;
    let snake3Random = Math.floor(Math.random() * 9) + 1;
    let snake4Random = Math.floor(Math.random() * 8) + 1;
    let snake5Random = Math.floor(Math.random() * 10) + 1;
    let L1 = document.querySelector('#L1').style.marginLeft = Math.floor(Number(ladder1Random * 9.8) * 10) / 10 + 'vh'
    document.querySelector('#L1').style.marginTop = '0vh'
    let L2 = document.querySelector('#L2').style.marginLeft = Math.floor(Number(ladder2Random * 9.8) * 10) / 10 + 'vh'
    document.querySelector('#L2').style.marginTop = '-39.2vh'
    let L3 = document.querySelector('#L3').style.marginLeft = Math.floor(Number(ladder3Random * 9.8) * 10) / 10 + 'vh'
    document.querySelector('#L3').style.marginTop = '-58.5vh'
    let L4 = document.querySelector('#L4').style.marginLeft = Math.floor(Number(ladder4Random * 9.8) * 10) / 10 + 'vh'
    document.querySelector('#L4').style.marginTop = '-19.6vh'
    let L5 = document.querySelector('#L5').style.marginLeft = Math.floor(Number(ladder5Random * 9.8) * 10) / 10 + 'vh'
    document.querySelector('#L5').style.marginTop = '-49vh'
    let L6 = document.querySelector('#L6').style.marginLeft = Math.floor(Number(ladder6Random * 9.8) * 10) / 10 + 'vh'
    document.querySelector('#L6').style.marginTop = '-78.4vh'
    let L7 = document.querySelector('#L7').style.marginLeft = Math.floor((9.8 + Number(ladder7Random * 9.8)) * 10) / 10 + 'vh'
    document.querySelector('#L7').style.marginTop = '-9.8vh'
    let L8 = document.querySelector('#L8').style.marginLeft = Math.floor((19.6 + Number(ladder8Random * 9.8)) * 10) / 10 + 'vh'
    document.querySelector('#L8').style.marginTop = '-68.6vh'
    let s1 = document.querySelector('#s1').style.marginLeft = Math.floor((Number(snake1Random * 9.8)) * 10) / 10 + 'vh'
    document.querySelector('#s1').style.marginTop = '-39.2vh'
    let s2 = document.querySelector('#s2').style.marginLeft = Math.floor((Number(snake2Random * 9.8)) * 10) / 10 + 'vh'
    document.querySelector('#s2').style.marginTop = '-49vh'
    let s3 = document.querySelector('#s3').style.marginLeft = Math.floor((9.8 + Number(snake3Random * 9.8)) * 10) / 10 + 'vh'
    document.querySelector('#s3').style.marginTop = '-29.4vh'
    let s4 = document.querySelector('#s4').style.marginLeft = Math.floor((19.6 + Number(snake4Random * 9.8)) * 10) / 10 + 'vh'
    document.querySelector('#s4').style.marginTop = '0vh'
    let s5 = document.querySelector('#s5').style.marginLeft = Math.floor((Number(snake5Random * 9.8)) * 10) / 10 + 'vh'
    document.querySelector('#s5').style.marginTop = '-9.8vh'
}
randomize()
let ladder1Random = Math.floor(Math.random() * 10) + 1;
let ladder2Random = Math.floor(Math.random() * 10) + 1;
let ladder3Random = Math.floor(Math.random() * 10) + 1;
let ladder4Random = Math.floor(Math.random() * 9) + 1;
let ladder5Random = Math.floor(Math.random() * 9) + 1;
let ladder6Random = Math.floor(Math.random() * 9) + 1;
let ladder7Random = Math.floor(Math.random() * 9) + 1;
let ladder8Random = Math.floor(Math.random() * 8) + 1;
let snake1Random = Math.floor(Math.random() * 8) + 1;
let snake2Random = Math.floor(Math.random() * 8) + 1;
let snake3Random = Math.floor(Math.random() * 9) + 1;
let snake4Random = Math.floor(Math.random() * 8) + 1;
let snake5Random = Math.floor(Math.random() * 10) + 1;
let L1 = document.querySelector('#L1').style.marginLeft = Math.floor(Number(ladder1Random * 9.8) * 10) / 10 + 'vh'
document.querySelector('#L1').style.marginTop = '0vh'
let L2 = document.querySelector('#L2').style.marginLeft = Math.floor(Number(ladder2Random * 9.8) * 10) / 10 + 'vh'
document.querySelector('#L2').style.marginTop = '-39.2vh'
let L3 = document.querySelector('#L3').style.marginLeft = Math.floor(Number(ladder3Random * 9.8) * 10) / 10 + 'vh'
document.querySelector('#L3').style.marginTop = '-58.5vh'
let L4 = document.querySelector('#L4').style.marginLeft = Math.floor(Number(ladder4Random * 9.8) * 10) / 10 + 'vh'
document.querySelector('#L4').style.marginTop = '-19.6vh'
let L5 = document.querySelector('#L5').style.marginLeft = Math.floor(Number(ladder5Random * 9.8) * 10) / 10 + 'vh'
document.querySelector('#L5').style.marginTop = '-49vh'
let L6 = document.querySelector('#L6').style.marginLeft = Math.floor(Number(ladder6Random * 9.8) * 10) / 10 + 'vh'
document.querySelector('#L6').style.marginTop = '-78.4vh'
let L7 = document.querySelector('#L7').style.marginLeft = Math.floor((9.8 + Number(ladder7Random * 9.8)) * 10) / 10 + 'vh'
document.querySelector('#L7').style.marginTop = '-9.8vh'
let L8 = document.querySelector('#L8').style.marginLeft = Math.floor((19.6 + Number(ladder8Random * 9.8)) * 10) / 10 + 'vh'
document.querySelector('#L8').style.marginTop = '-68.6vh'
let s1 = document.querySelector('#s1').style.marginLeft = Math.floor((Number(snake1Random * 9.8)) * 10) / 10 + 'vh'
document.querySelector('#s1').style.marginTop = '-39.2vh'
let s2 = document.querySelector('#s2').style.marginLeft = Math.floor((Number(snake2Random * 9.8)) * 10) / 10 + 'vh'
document.querySelector('#s2').style.marginTop = '-49vh'
let s3 = document.querySelector('#s3').style.marginLeft = Math.floor((9.8 + Number(snake3Random * 9.8)) * 10) / 10 + 'vh'
document.querySelector('#s3').style.marginTop = '-29.4vh'
let s4 = document.querySelector('#s4').style.marginLeft = Math.floor((19.6 + Number(snake4Random * 9.8)) * 10) / 10 + 'vh'
document.querySelector('#s4').style.marginTop = '0vh'
let s5 = document.querySelector('#s5').style.marginLeft = Math.floor((Number(snake5Random * 9.8)) * 10) / 10 + 'vh'
document.querySelector('#s5').style.marginTop = '-9.8vh'

var froms = [[Math.floor(Number(ladder1Random * 9.8) * 10) / 10, 0],
[Math.floor(Number(ladder2Random * 9.8) * 10) / 10, -39.2],
[Math.floor(Number(ladder3Random * 9.8) * 10) / 10, -58.8],
[Math.floor(Number(ladder4Random * 9.8) * 10) / 10, -19.6],
[Math.floor((Number(ladder5Random * 9.8) * 10 / 10 + 9.8) * 10) / 10, -49],
[Math.floor(Number(ladder6Random * 9.8) * 10) / 10, -78.4],
[Math.floor((9.8 + (Number(ladder7Random * 9.8)) * 10 / 10) * 10) / 10, -9.8],
[Math.floor((19.6 + (Number(ladder8Random * 9.8)) * 10 / 10) * 10) / 10, -68.6],
[Math.floor(((Number(snake1Random * 9.8)) * 10 / 10 + 19.6) * 10) / 10, -58.8],
[Math.floor(((Number(snake2Random * 9.8)) * 10 / 10 + 9.8) * 10) / 10, -88.2],
[Math.floor((Number(snake3Random * 9.8)) * 10) / 10, -49],
[Math.floor((9.8 + (Number(snake4Random * 9.8)) * 10 / 10) * 10) / 10, -19.6],
[Math.floor((Number(snake5Random * 9.8)) * 10) / 10, -29.4]]

var tos = [[Math.floor(Number(ladder1Random * 9.8) * 10) / 10, -19.6],
[Math.floor((Number(ladder2Random * 9.8)) * 10) / 10, -58.8],
[Math.floor((Number(ladder3Random * 9.8)) * 10) / 10, -78.4],
[Math.floor(((Number(ladder4Random * 9.8) * 10 / 10 + 9.8)) * 10) / 10, -29.4],
[Math.floor((Number(ladder5Random * 9.8)) * 10) / 10, -58.8],
[Math.floor(((Number(ladder6Random * 9.8) * 10 / 10 + 9.8)) * 10) / 10, -88.2],
[Math.floor((Number(ladder7Random * 9.8)) * 10) / 10, -29.4],
[Math.floor((9.8 + (Number(ladder8Random * 9.8)) * 10 / 10) * 10) / 10, -88.2],
[Math.floor((Number(snake1Random * 9.8)) * 10) / 10, -39.2],
[Math.floor((Number(snake2Random * 9.8)) * 10) / 10, -49],
[Math.floor((9.8 + (Number(snake3Random * 9.8)) * 10 / 10) * 10) / 10, -29.4],
[Math.floor((19.6 + (Number(snake4Random * 9.8)) * 10 / 10) * 10) / 10, 0],
[Math.floor((Number(snake5Random * 9.8)) * 10) / 10, -9.8]]


if ((froms[3][0] == froms[11][0] && froms[3][1] == froms[11][1]) || (froms[4][0] == froms[10][0] && froms[4][1] == froms[10][1]) || (froms[2][0] == froms[8][0] && froms[2][1] == froms[8][1])) {
    randomize()
}


function checkLadderAndSnakes() {

    for (let i = 0; i < tos.length; i++) {

        if (marginLeft() == froms[i][0] && marginTop() == froms[i][1]) {
            console.log("ladder or snake")
            new Audio('snl.mp3').play()
            document.querySelector(`#${turn}`).style.marginLeft = `${tos[i][0]}vh`
            document.querySelector(`#${turn}`).style.marginTop = `${tos[i][1]}vh`
        }
    }
}

function marginLeft() {
    return Number(document.querySelector(`#${turn}`).style.marginLeft.split(`v`)[0])
}
function marginTop() {
    return Number(document.querySelector(`#${turn}`).style.marginTop.split(`v`)[0])
}

var displayHeight = Number(document.body.clientHeight)
var displayWidth = Number(document.body.clientWidth)

if (displayWidth < 938) {
    alert('Shift to Landscape Mode for Better Experience')
}


function hide1() {
    document.querySelector('#startScreen').hidden = true;
    document.querySelector('#secondScreen').hidden = true;
    document.querySelector('#dieArea2').style.display = 'none';
    document.querySelector('#dieArea3').style.display = 'none';
    document.querySelector('#dieArea4').style.display = 'none';
    document.querySelector('#blue').style.display = 'none'
    document.querySelector('#green').style.display = 'none'
    document.querySelector('#yellow').style.display = 'none'
    numberOfPlayers = 1;
    getPlayerName()
}
function hide2() {
    document.querySelector('#startScreen').hidden = true;
}
function hide3() {
    document.querySelector('#secondScreen').hidden = true;
    document.querySelector('#dieArea3').style.display = 'none';
    document.querySelector('#dieArea4').style.display = 'none';
    document.querySelector('#green').style.display = 'none'
    document.querySelector('#yellow').style.display = 'none'
    numberOfPlayers = 2;
    getPlayerName()
}
function hide4() {
    document.querySelector('#secondScreen').hidden = true;
    document.querySelector('#dieArea4').style.display = 'none';
    document.querySelector('#yellow').style.display = 'none'
    numberOfPlayers = 3;
    getPlayerName()
}
function hide5() {
    document.querySelector('#secondScreen').hidden = true;
    numberOfPlayers = 4;
    getPlayerName()
}
function reload(){
    location.reload()
}




//         for (j = 0; j < Winner().length; j++) {
//             if (Winner()[j][0] == 9.8 && Winner()[j][1] == -88.2) {
//                 var place2 = Winner().splice(j, 1)
//                 if (place2[0][0] == Winner()[0][0] && place2[0][1] == Winner()[0][1]) {
//                     document.getElementById('first').textContent = 'Second: ' + firstPlayerName
//                 }
//                 else if (place2[0][0] == Winner()[1][0] && place2[0][1] == Winner()[1][1]) {
//                     document.getElementById('second').textContent = 'Second: ' + secondPlayerName
//                 }
//                 else if (place2[0][0] == Winner()[2][0] && place2[0][1] == Winner()[2][1]) {
//                     document.getElementById('third').textContent = 'Second: ' + thirdPlayerName
//                 }
//                 else if (place2[0][0] == Winner()[3][0] && place2[0][1] == Winner()[3][1]) {
//                     document.getElementById('fourth').textContent = 'Second: ' + fourthPlayerName
//                 }

//                 for (k = 0; k < Winner().length; k++) {
//                     if (Winner()[k][0] == 9.8 && Winner()[k][1] == -88.2) {
//                         var place3 = Winner().splice(k, 1)

//                         if (place3[0][0] == Winner()[0][0] && place3[0][1] == Winner()[0][1]) {
//                             document.getElementById('first').textContent = 'Third: ' + firstPlayerName
//                         }
//                         else if (place3[0][0] == Winner()[1][0] && place3[0][1] == Winner()[1][1]) {
//                             document.getElementById('second').textContent = 'Third: ' + secondPlayerName
//                         }
//                         else if (place3[0][0] == Winner()[2][0] && place3[0][1] == Winner()[2][1]) {
//                             document.getElementById('third').textContent = 'Third: ' + thirdPlayerName
//                         }
//                         else if (place3[0][0] == Winner()[3][0] && place3[0][1] == Winner()[3][1]) {
//                             document.getElementById('fourth').textContent = 'Third: ' + fourthPlayerName
//                         }

//                     }

//                 }
//             }

//         }
// }

// }