export type state = {
    score: number,
    streak: number,
    gameLoadingAnimation: boolean,
    win: boolean,
    pause: boolean,
    gameStarted: boolean,
    menuToggled: boolean,
    loader: boolean,
    difficulty: "easy" | "hard" | "medium" | "extreme",
    height: number,
    offsetTop: number,
    isMobile: boolean,
    howToPlay: boolean,
    leaderboard: boolean,
    popup: boolean,
    spinerState: boolean,
    leaderboardData: Array<{ name: string, score: number, time: string }>
}