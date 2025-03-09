import type { card, component } from "../types/cards"
import { nonReactiveState, resetStore } from "../store"
import { shuffleAndArrangeCards } from "./useMoves"
import { useAppDispatch, useAppSelector } from "../features/app/hooks"
import { resetSeconds, setSeconds, updateGameLoadingState, updateGameStartedState, updateLoaderState, updateMenuToggledState, updatePauseState, updateStreakState, updateWinState } from "../features/slices"
const dispatch = useAppDispatch()
// const seconds = useAppSelector(state => state.time.value.seconds)
// const win = useAppSelector(state => state.win.value)
// const gameStarted = useAppSelector(state => state.gameStarted.value)
// const menuToggled = useAppSelector(state => state.menuToggled.value)
// const pause = useAppSelector(state => state.pause.value)
// const streak = useAppSelector(state => state.streak.value)
// const gameLoadingAnimation = useAppSelector(state => state.gameLoadingAnimation.value)
const arr = ["Ace", "King", "Queen", "Nine", "Jack", "Ten", "Eight", "Seven", "Five", "Six", "Three", "Four", "Two",]

let components = ['Spade', "Diamond", "Heart", "Club"] as component[]
let stockPile = <card[]>[]
function createStockPile() {
    arr.forEach(item => {
        components.forEach(type => {
            stockPile.push({ card: item, component: type })
        })
    })
}

function playStartAnimationAndAlignCards() {
    const containingBlock = document.querySelectorAll(".containing_block")
    let index = 1
    let parentIndex = 1
    let startingParentIndex = 1
    containingBlock[0].children[1].classList.add("face-up-first-animation")
    let animationInterval = setInterval(() => {
        if (parentIndex > containingBlock.length - 1) {
            index++
            containingBlock[startingParentIndex].children[index].classList.add(
                "face-up-animation"
            )
            startingParentIndex++
            parentIndex = startingParentIndex
        } else {
            containingBlock[parentIndex].children[index].classList.add(
                "face-down-animation"
            )
            parentIndex++
        }
        if (index > 6) {

            containingBlock[0].children[1].classList.remove(
                "face-up-first-animation"
            )
            containingBlock.forEach((ele) => {
                for (let index = 0; index < ele.children.length; index++) {
                    const element = ele.children[index]
                    if (element.classList.contains("face-down-animation")) {
                        element.classList.remove("face-down-animation")
                    }
                    if (element.classList.contains("face-up-animation")) {
                        element.classList.remove("face-up-animation")
                    }
                }
            })
            clearInterval(animationInterval)

            dispatch(updateGameLoadingState(false))
        }
    }, 50)
}

function setTimer() {
    nonReactiveState.timeInterval = setInterval(() => {
        dispatch(setSeconds())
        if (seconds > 59) {
            dispatch(resetSeconds())
        }
    }, 1000)
}

export function startGame() {
    resetStore()
    dispatch(updateLoaderState(true))
    if (win) dispatch(updateWinState(false))
    if (!gameStarted) dispatch(updateGameStartedState(true))
    if (menuToggled) dispatch(updateMenuToggledState(false))
    if (!gameLoadingAnimation) dispatch(updateGameLoadingState(true))

    createStockPile()
    shuffleAndArrangeCards(stockPile)

    setTimeout(() => {
        dispatch(updateLoaderState(false))

        setTimer()
        setTimeout(() => {
            playStartAnimationAndAlignCards()

        }, 10);
    }, 1000)

}


export function pauseAndPlayGame() {
    dispatch(updatePauseState(!pause))

    if (pause) {
        clearInterval(nonReactiveState.timeInterval)
        clearInterval(nonReactiveState.streakInterval)
    } else {
        setTimer()
        streaking()
    }
}
function streaking() {

    nonReactiveState.streakInterval = setInterval(() => {
        dispatch(updateStreakState(streak - 1))
        if (streak === 0) {
            resetStreak()
            clearInterval(nonReactiveState.streakInterval)
        }
    }, 1000)
}
export function resetStreak(dispatch: React.Dispatch<{ type: string, value: any }>, difficulty: string) {
    switch (difficulty) {
        case 'easy':
            dispatch(updateStreakState(5))
            break;
        case 'medium':
            dispatch(updateStreakState(4))
            break;
        case 'hard':
            dispatch(updateStreakState(3))
            break
        default:
            break;
    }
}