export type store = {
    score: number,
    streak: number,
    gameLoadingAnimation: boolean,
    win: boolean,
    pause: boolean,
    gameStarted: boolean,
    menuToggled: boolean,
    loader: boolean,
    difficulty: "easy" | "hard" | "normal",
    height: number,
    offsetTop: number,
    isMobile: boolean,
    howToPlay: boolean,
    leaderboard: boolean,
    popup: boolean,
    spinerState: boolean,
    leaderboardData: Array<{ name: string, score: number, time: string }>
}