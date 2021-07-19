window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const commonWeight = {
    fontWeight: 'bold',
}
export const itemDetailStyles = theme => {
    return({
        gridContainer:{
            marginTop: '20px',
            padding: '20px'
        },
        precio:{
            fontSize: '30px',

        },
        descripcion:{
            fontSize: '23px',
            color: '#7D7D7D',
        },
        envio:{
        color: 'green',
        fontSize: '23px',
        },
        titulo:{
            ...commonWeight,
            margin: '15px 0px'
        },
        detalle:{
            fontSize: '23px',
            padding: '2px',
            color: '#7D7D7D',
        }
    })
}