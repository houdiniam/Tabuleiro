const criarQuadrados = (tam, bool) => {
    const quadrados = []
    const matriz = []
    for (let i = 0; i < tam; i++) {
        for (let j = 0; j < tam; j++) {
            if(bool === false){
                quadrados.push(<div key={j} style={{ width: '100px', height: '100px', backgroundColor: (j % 2) ? 'black' : 'white' }}></div>)
            }else{
                quadrados.push(<div key={j} style={{ width: '100px', height: '100px', backgroundColor: (j % 2) ? 'white' : 'black' }}></div>)
            }
        }
        matriz.push(<div key={i}>{quadrados[i]}</div>)
    }
    return matriz
}

export default function Quadrado(props) {
    
    return (
        <>
            {[...Array(props.tam/2)].map((x, i) =>
                <div key={i}>
                    <div style={{display: 'flex'}}>
                        {criarQuadrados(props.tam, props.bool)}
                    </div>
                    <div style={{display: 'flex'}}>
                        {criarQuadrados(props.tam, !props.bool)}
                    </div>
                </div>
            )}
        </>
    )
}