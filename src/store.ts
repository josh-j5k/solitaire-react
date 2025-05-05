import { state } from "./types/store"


const initialState: state = {
    score: 0,
    streak: 5,
    gameLoadingAnimation: true,
    win: false,
    pause: false,
    gameStarted: false,
    menuToggled: false,
    loader: false,
    difficulty: 'easy',
    height: 150,
    offsetTop: 25,
    isMobile: false,
    howToPlay: false,
    leaderboard: false,
    popup: false,
    spinerState: false,
    leaderboardData: [],
    wastePile: [],
    tableau: Array(7).fill({
        faceDown: [],
        faceUp: [],
    }),
    stockPile: [],
    foundation: {
        0: [],
        1: [],
        2: [],
        3: [],
    }
}
let validateScore = {
    0: {
        maxLength: 0,
        currentLength: 0,
    },
    1: {
        maxLength: 0,
        currentLength: 0,
    },
    2: {
        maxLength: 0,
        currentLength: 0,
    },
    3: {
        maxLength: 0,
        currentLength: 0,
    },
}

const nonReactiveState = <{ totalCards: number, streakInterval: number | undefined, timeInterval: number | undefined }>{
    totalCards: 52,
    streakInterval: undefined,
    timeInterval: undefined

}

let time = {
    minutes: 0,
    seconds: 0,
}
function setTime(props: any) {
    time = props
}
function resetStore() {
    for (const [key, value] of Object.entries(validateScore)) {
        value.currentLength = 0
        value.maxLength = 0
    }
    // store = structuredClone(initialState)
    if (nonReactiveState.streakInterval) clearInterval(nonReactiveState.streakInterval)
    if (nonReactiveState.timeInterval) clearInterval(nonReactiveState.timeInterval)
    nonReactiveState.totalCards = 52
    time.minutes = 0
    time.seconds = 0

}

export { initialState, setTime, resetStore, nonReactiveState, validateScore }