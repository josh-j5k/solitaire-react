import { actionType } from "../helpers/constants"
import { nonReactiveState, validateScore } from "../store"


// export function setScore(isFoundation: boolean, difficulty:string, ) {
//     let newScore = score
//     if (nonReactiveState.streakInterval) {
//         isFoundation ? (dispatch({ type: actionType.update_score, value: newScore += Math.round(15 * difficultyMultiplier()) })) : (dispatch({ type: actionType.update_score, value: newScore += Math.round(10 * difficultyMultiplier()) }))
//     } else {
//         isFoundation ? (dispatch({ type: actionType.update_score, value: newScore += 10 })) : (dispatch({ type: actionType.update_score, value: newScore += 5 }))
//     }

//     if (nonReactiveState.streakInterval) {
//         resetStreak()
//     } else {
//         streaking()
//     }
// }



// function difficultyMultiplier(): number {
//     switch (difficulty) {
//         case 'extreme':
//             return 2.5
//         case 'medium':
//             return 1.5
//         case 'hard':
//             return 2
//         default:
//             return 1
//     }
// }
// export function showWinnigScreen() {
//     if (
//         validateScore[0].maxLength === 13 &&
//         validateScore[1].maxLength === 13 &&
//         validateScore[2].maxLength === 13 &&
//         validateScore[3].maxLength === 13
//     ) {
//         dispatch({ type: actionType.update_win, value: true })
//         clearInterval(nonReactiveState.timeInterval)
//     }
// }