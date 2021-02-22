import { Board } from "./types/board"
import { PlayerSymbol, Turn, WinningCombitation } from "./types/in_game"

let board: Board = [
    'None', 'None', 'None',
    'None', 'None', 'None',
    'None', 'None', 'None'
]

// [1][2][3]
// [4][5][6]
// [7][8][9]

let winningCombitation: Array<WinningCombitation> = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
]

export default function turn(data: Turn): WinningCombitation | null {
    board[data.position] = data.symbol
    return checkWin(data.symbol)
}

function checkWin(playerSymbol: PlayerSymbol): WinningCombitation | null {

    for (let i: number = 0; i < winningCombitation.length; ++i) {
        const set = winningCombitation[i]
        if (
            board[set[0] - 1] === playerSymbol &&
            board[set[1] - 1] === playerSymbol &&
            board[set[2] - 1] === playerSymbol
        ) return set
    }
    return null
}
