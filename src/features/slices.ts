import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "../store"
import { card, row, TFoundation } from "../types/cards"

const winSlice = createSlice({
    name: 'win',
    initialState: {
        value: initialState.win
    },
    reducers: {
        updateWinState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const scoreSlice = createSlice({
    name: 'score',
    initialState: {
        value: initialState.score
    },
    reducers: {
        updateScoreState(state, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }

})
const streakSlice = createSlice({
    name: 'streak',
    initialState: {
        value: initialState.streak
    },
    reducers: {
        updateStreakState(state, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }

})
const gameLoadingAnimationSlice = createSlice({
    name: 'gameLoadingAnimation',
    initialState: {
        value: initialState.gameLoadingAnimation
    },
    reducers: {
        updateGameLoadingState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const pauseSlice = createSlice({
    name: 'pause',
    initialState: {
        value: initialState.pause
    },
    reducers: {
        updatePauseState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const gameStartedSlice = createSlice({
    name: 'gameStarted',
    initialState: {
        value: initialState.gameStarted
    },
    reducers: {
        updateGameStartedState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const menuToggledSlice = createSlice({
    name: 'menuToggled',
    initialState: {
        value: initialState.menuToggled
    },
    reducers: {
        updateMenuToggledState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        value: initialState.loader
    },
    reducers: {
        updateLoaderState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const isMobileSlice = createSlice({
    name: 'isMobile',
    initialState: {
        value: initialState.isMobile
    },
    reducers: {
        updateIsMobileState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const howToPlaySlice = createSlice({
    name: 'howToPlay',
    initialState: {
        value: initialState.howToPlay
    },
    reducers: {
        updateHowToPlayState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState: {
        value: initialState.leaderboard
    },
    reducers: {
        updateLeaderboardState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        value: initialState.popup
    },
    reducers: {
        updatePopupState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const spinerStateSlice = createSlice({
    name: 'spinerState',
    initialState: {
        value: initialState.spinerState
    },
    reducers: {
        updateSpinnerState(state, action: PayloadAction<boolean>) {
            state.value = action.payload
        }
    }

})
const difficultySlice = createSlice({
    name: 'difficulty',
    initialState: {
        value: initialState.difficulty
    },
    reducers: {
        updateDifficultyState(state, action: PayloadAction<"easy" | "medium" | "hard">) {
            state.value = action.payload
        }
    }

})
const stockPileSlice = createSlice({
    name: 'stockPile',
    initialState: <{ value: card[] }>{
        value: []
    },
    reducers: {
        removeStockPileLastCard(state) {
            state.value.pop()
        },
        setStockPile(state, action: PayloadAction<card[]>) {
            state.value = action.payload
        }

    }

})
const wastePileSlice = createSlice({
    name: 'wastePile',
    initialState: <{ value: card[] }>{
        value: []
    },
    reducers: {
        setWastePile(state) {
            state.value = []
        },
        addWastePile(state, action: PayloadAction<card>) {
            state.value = [...state.value, action.payload,]
        }
    }

})
const tableauSlice = createSlice({
    name: 'tableau',
    initialState: <{ value: row[] }>{
        value: Array(7).fill({
            faceDown: <Array<card>>[],
            faceUp: <Array<card>>[],
        })
    },
    reducers: {
        setTableau(state, action: PayloadAction<row[]>) {
            state.value = action.payload
        },

    }

})
const foundationSlice = createSlice({
    name: 'foundation',
    initialState: <{ value: TFoundation }>{
        value: {
            0: <Array<card>>[],
            1: <Array<card>>[],
            2: <Array<card>>[],
            3: <Array<card>>[]
        },
    },
    reducers: {
        setFoundation(state, action: PayloadAction<{ key: keyof TFoundation, card: card }>) {
            state.value[action.payload.key].push(action.payload.card)
        },
        removeFoundation(state, action: PayloadAction<{ key: keyof TFoundation }>) {
            state.value[action.payload.key].pop()
        }
    }

})
const timeSlice = createSlice({
    name: 'time',
    initialState: <{ value: { minutes: number, seconds: number } }>{
        value: {
            minutes: 0,
            seconds: 0,
        }
    },
    reducers: {
        setSeconds(state) {
            state.value.seconds++
        },
        setMinutes(state) {
            state.value.minutes++
        },
        resetSeconds(state) {
            state.value.seconds = 0
        },
        resetMinutes(state) {
            state.value.minutes = 0
        }

    }

})



export const { updateWinState } = winSlice.actions
export const { updateScoreState } = scoreSlice.actions
export const { updateStreakState } = streakSlice.actions
export const { updateGameLoadingState } = gameLoadingAnimationSlice.actions
export const { updatePauseState } = pauseSlice.actions
export const { updateGameStartedState } = gameStartedSlice.actions
export const { updateMenuToggledState } = menuToggledSlice.actions
export const { updateLoaderState } = loaderSlice.actions
export const { updateIsMobileState } = isMobileSlice.actions
export const { updateHowToPlayState } = howToPlaySlice.actions
export const { updateLeaderboardState } = leaderboardSlice.actions
export const { updatePopupState } = popupSlice.actions
export const { updateSpinnerState } = spinerStateSlice.actions
export const { updateDifficultyState } = difficultySlice.actions
export const { setStockPile, removeStockPileLastCard } = stockPileSlice.actions
export const { addWastePile, setWastePile } = wastePileSlice.actions
export const { setTableau } = tableauSlice.actions
export const { setFoundation, removeFoundation } = foundationSlice.actions
export const { setSeconds, setMinutes, resetMinutes, resetSeconds } = timeSlice.actions

const winReducer = winSlice.reducer
const scoreReducer = scoreSlice.reducer
const streakReducer = streakSlice.reducer
const gameLoadingAnimationReducer = gameLoadingAnimationSlice.reducer
const pauseReducer = pauseSlice.reducer
const gameStartedReducer = gameStartedSlice.reducer
const menuToggledReducer = menuToggledSlice.reducer
const loaderReducer = loaderSlice.reducer
const isMobileReducer = isMobileSlice.reducer
const howToPlayReducer = howToPlaySlice.reducer
const leaderboardReducer = leaderboardSlice.reducer
const popupReducer = popupSlice.reducer
const spinerStateReducer = spinerStateSlice.reducer
const difficultyReducer = difficultySlice.reducer
const stockPileReducer = stockPileSlice.reducer
const wastePileReducer = wastePileSlice.reducer
const tableauReducer = tableauSlice.reducer
const foundationReducer = foundationSlice.reducer
const timeReducer = timeSlice.reducer



export { winReducer, scoreReducer, streakReducer, gameLoadingAnimationReducer, pauseReducer, gameStartedReducer, menuToggledReducer, loaderReducer, isMobileReducer, howToPlayReducer, leaderboardReducer, popupReducer, spinerStateReducer, difficultyReducer, stockPileReducer, wastePileReducer, tableauReducer, foundationReducer, timeReducer }