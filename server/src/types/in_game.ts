export type PlayerSymbol = 'X' | 'O'

export type Turn = {
    symbol: PlayerSymbol,
    position: number
    room: string
}

export type WinningCombination = number[]