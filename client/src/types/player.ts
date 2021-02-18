export type PlayerSymbol = 'X' | 'O' | undefined

export type Turn = {
    position: number,
    symbol: Exclude<PlayerSymbol, undefined>
}


