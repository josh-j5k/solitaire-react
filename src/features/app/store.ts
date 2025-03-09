import { configureStore } from "@reduxjs/toolkit";
import { winReducer, wastePileReducer, gameLoadingAnimationReducer, timeReducer, pauseReducer, popupReducer, spinerStateReducer, menuToggledReducer, leaderboardReducer, gameStartedReducer, foundationReducer, difficultyReducer, stockPileReducer, howToPlayReducer, isMobileReducer, tableauReducer, streakReducer, loaderReducer, scoreReducer } from "../slices";

export const store = configureStore({
    reducer: {
        win: winReducer,
        wastePile: wastePileReducer,
        gameLoadingAnimation: gameLoadingAnimationReducer,
        time: timeReducer,
        pause: pauseReducer,
        popup: popupReducer,
        spinerState: spinerStateReducer,
        menuToggled: menuToggledReducer,
        leaderboard: leaderboardReducer,
        gameStarted: gameStartedReducer,
        foundation: foundationReducer,
        difficulty: difficultyReducer,
        stockPile: stockPileReducer,
        howToPlay: howToPlayReducer,
        isMobile: isMobileReducer,
        tableau: tableauReducer,
        streak: streakReducer,
        loader: loaderReducer,
        score: scoreReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
