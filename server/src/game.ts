import { Board } from "./types/board"
import { PlaySymbol, Turn } from "./types/in_game"

let board: Board = [
    'None', 'None', 'None',
    'None', 'None', 'None',
    'None', 'None', 'None'
]

// [1][2][3]
// [4][5][6]
// [7][8][9]

let winningCombitation = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
]

export default function turn(data: Turn): boolean {
    board[data.position] = data.symbol
    return checkWinning(data.symbol)
}

function checkWinning(playerSymbol: PlaySymbol): boolean {

    for (let i: number = 0; i < winningCombitation.length; ++i) {
        const set = winningCombitation[i]
        if (
            board[set[0] - 1] === playerSymbol &&
            board[set[1] - 1] === playerSymbol &&
            board[set[2] - 1] === playerSymbol
        ) return true
    }
    return false
}
