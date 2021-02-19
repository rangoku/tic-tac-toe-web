import '../styles/board.css'

const styles_btn: React.CSSProperties = {
    fontSize: 75,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#06C305'
}

const PlayButton = (): JSX.Element => {
    return (
        <div className={"container"}>
            <span style={styles_btn}>Play</span>
        </div>
    )
}

export default PlayButton