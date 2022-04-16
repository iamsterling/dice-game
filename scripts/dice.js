




let Roll = () => {
    let dice = document.querySelector('.dice')
    let diceNums = [1, 2, 3, 4]
    let rand = diceNums[Math.floor(Math.random() * (diceNums.length - 1 ))]
    let = roll = () => diceNums[rand]
    
    Rotate(dice, '--dice-rotate-x', Math.random() * 3, 'deg')
    Rotate(dice, '--dice-rotate-y', Math.random() * 3, 'deg')
    Rotate(dice, '--dice-rotate-z', Math.random() * 3, 'deg')


    //let test = document.querySelector('.active')
    //test.classList.remove('active')

    if (roll() === 1) {
        Rotate(dice, '--dice-rotate-x', 0, 'deg')
        Rotate(dice, '--dice-rotate-y', 0, 'deg')
        Rotate(dice, '--dice-rotate-z', 0, 'deg')
    }
    if (roll() === 2) {
        Rotate(dice, '--dice-rotate-x', 0, 'deg')
        Rotate(dice, '--dice-rotate-y', 180, 'deg')
        Rotate(dice, '--dice-rotate-z', 0, 'deg')   
    }
    if (roll() === 3) {
        Rotate(dice, '--dice-rotate-x', 0, 'deg')
        Rotate(dice, '--dice-rotate-y', 270, 'deg')
        Rotate(dice, '--dice-rotate-z', 0, 'deg')   
    }
    if (roll() === 4) {
        Rotate(dice, '--dice-rotate-x', 180, 'deg')
        Rotate(dice, '--dice-rotate-y', 90, 'deg')
        Rotate(dice, '--dice-rotate-z', 180, 'deg')   
    }

    console.log(roll())
}



let setActiveFace = (count) => {
    document.querySelector('active').classList.remove('active')

    let face = document.getElementById(count)
    face.classList.add('active')
}



let Rotate = (element, property, value, suffix) => {
    setTimeout(() => {
        element.style.setProperty('--dice-scale', '0.8, 0.8, 0.8', '');
    }, [250])
    return element.style.setProperty('--dice-scale', '2,2,2', ''),
    element.style.setProperty(property, value - 10 + suffix)
    


}