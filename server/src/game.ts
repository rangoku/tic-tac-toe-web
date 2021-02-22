import { Board } from "./types/board"
import { PlayerSymbol, Turn, WinningCombitation } from "./types/in_game"

let board: Board = [
    'None', 'None', 'None',
    'None', 'None', 'None',
    'None', 'None', 'None'
]

// [0][1][2]
// [3][4][5]
// [6][7][8]

let winningCombitation: Array<WinningCombitation> = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

export default function turn(data: Turn): WinningCombitation | null {
    board[data.position] = data.symbol
    return checkWin(data.symbol)
}

function checkWin(playerSymbol: PlayerSymbol): WinningCombitation | null {

    for (let i: number = 0; i < winningCombitation.length; ++i) {
        const set = winningCombitation[i]
        if (
            board[set[0]] === playerSymbol &&
            board[set[1]] === playerSymbol &&
            board[set[2]] === playerSymbol
        ) return set
    }
    return null
}
