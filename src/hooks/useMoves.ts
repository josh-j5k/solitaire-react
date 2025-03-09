import { useAppDispatch } from "../features/app/hooks"
import { setStockPile } from "../features/slices"
import { nonReactiveState, tableau } from "../store"
import { card } from "../types/cards"
const dispatch = useAppDispatch()

function setCardFaceDown(stockPile: card[], number: number) {
    for (let index = 0; index < number; index++) {
        let randomNumber = Math.floor(Math.random() * nonReactiveState.totalCards)
        tableau[number].faceDown.push(stockPile[randomNumber])

        stockPile.splice(randomNumber, 1)
        nonReactiveState.totalCards -= 1
    }
}

export function shuffleAndArrangeCards(stockPile: card[]) {
    stockPile.sort(() => (Math.random() > 0.5 ? 1 : -1))
    for (let index = 0; index < 7; index++) {
        let randomNumber = Math.floor(Math.random() * nonReactiveState.totalCards)
        tableau[index].faceUp.push(stockPile[randomNumber])
        stockPile.splice(randomNumber, 1)
        nonReactiveState.totalCards -= 1
    }
    for (let index = 1; index < 7; index++) {
        setCardFaceDown(stockPile, index)
    }

    dispatch(setStockPile(stockPile))

}

export function flipCard(index: number) {
    if (
        tableau[index].faceUp.length === 0 &&
        tableau[index].faceDown.length > 0
    ) {
        const containingBlock = document.querySelectorAll(".containing_block")
        setTimeout(() => {
            let card = tableau[index].faceDown.pop()!
            tableau[index].faceUp.push(card)



        }, 100)
        setTimeout(() => {
            const parent = containingBlock[index] as HTMLDivElement
            const element = parent.children[parent.children.length - 1]
            element.classList.add("flip-card")
        }, 100)
        setTimeout(() => {
            const parent = containingBlock[index] as HTMLDivElement
            const element = parent.children[parent.children.length - 1]
            element.classList.remove("flip-card")
        }, 1000)
    }
}
let int = <undefined | number>undefined
// export function revealAndRedealStockpile() {


//     let number = <undefined | number>undefined
//     if (int) {
//         clearInterval(int)
//     }
//     if (stockPile.length === 0) {
//         // reDeal.load()
//         stockPile.push(...wastePile.reverse())
//         setStockPile([...stockPile])
//         setWastePile([])

//         // reDeal.play()
//         return
//     }
//     // dealCard.load()
//     // dealCard.play()
//     const element = stockPile.pop()!
//     wastePile.push(element)
//     if (difficulty === 'easy') {

//         return
//     }

//     if (difficulty === 'medium') {
//         number = 1
//     } else if (difficulty === 'hard') {
//         number = 2
//     }

//     int = setInterval(() => {
//         if (stockPile.length > 0) {
//             number!--
//             const element = stockPile.pop()!
//             wastePile.push(element)
//             setWastePile([...wastePile])
//             if (number == 0) {
//                 clearInterval(int)
//             }


//         } else {
//             clearInterval(int)
//         }
//     }, 100);

// }
