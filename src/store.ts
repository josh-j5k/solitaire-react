
import { useState } from "react";
import type { state } from "./types/store";
import type { card, TFoundation, row } from "./types/cards";

import { actionType } from "./helpers/constants";
import { resetStreak } from "./hooks/usePlayGame";

export const initialState = <state>{
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
    leaderboardData: <Array<{ name: string, score: number, time: string }>>[]

}

export let stockPile = <card[]>([])


export let wastePile = <card[]>([])
export let tableau = <row[]>(Array(7).fill({
    faceDown: <Array<card>>[],
    faceUp: <Array<card>>[],
}))

export let foundation = <TFoundation>({
    0: <Array<card>>[],
    1: <Array<card>>[],
    2: <Array<card>>[],
    3: <Array<card>>[],
})
export let validateScore = {
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

export const nonReactiveState = <{ totalCards: number, streakInterval: number | undefined, timeInterval: number | undefined }>{
    totalCards: 52,
    streakInterval: undefined,
    timeInterval: undefined

}

export let time = {
    minutes: 0,
    seconds: 0,
}
export function setTime(props: any) {
    time = props
}
export function resetStore(dispatch: React.Dispatch<{ type: string, value: any }>, state: state) {
    for (const [key, value] of Object.entries(validateScore)) {
        value.currentLength = 0
        value.maxLength = 0
    }
    if (Object.keys(foundation).length > 0) {
        for (let [key, value] of Object.entries(foundation)) {
            value.length = 0
        }
    }
    tableau.forEach(item => {
        item.faceDown.length = 0
        item.faceUp.length = 0
    })
    stockPile.length = 0
    wastePile.length = 0
    if (nonReactiveState.streakInterval) clearInterval(nonReactiveState.streakInterval)
    if (nonReactiveState.timeInterval) clearInterval(nonReactiveState.timeInterval)
    nonReactiveState.totalCards = 52
    time.minutes = 0
    time.seconds = 0
    dispatch({ type: actionType.update_score, value: 0 })
    resetStreak(dispatch, state.difficulty)
}