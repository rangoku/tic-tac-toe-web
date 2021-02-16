export enum PlaySymbol {
    X = 'X',
    O = 'O'
}

export type Turn = {
    symbol: PlaySymbol,
    position: number
    room: string
}
