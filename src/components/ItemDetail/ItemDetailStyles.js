const commonWeight = {
    fontWeight: 'bold',
}
export const itemDetailStyles = theme => {
    return({
        gridContainer:{
            marginTop: '20px'
        },
        precio:{
            fontSize: '35px',
            fontFamily: "montserrat"
        },
        descripcion:{
            fontSize: '23px',
            color: 'grey',
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
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            padding: '2px'
        }
    })
}