import { Board } from "./types/board"
import { PlayerSymbol, WinningCombination } from "./types/in_game"

// [0][1][2]
// [3][4][5]
// [6][7][8]

const winningCombination: Array<WinningCombination> = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

export default function checkWin(playerSymbol: PlayerSymbol,
    board: Board): WinningCombination | null {

    for (let i: number = 0; i < winningCombination.length; ++i) {
        const set = winningCombination[i]
        if (
            board[set[0]] === playerSymbol &&
            board[set[1]] === playerSymbol &&
            board[set[2]] === playerSymbol
        ) return set
    }
    return null
}
