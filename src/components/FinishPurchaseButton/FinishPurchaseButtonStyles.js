export const finishPurchaseButtonStyles = theme => {
    return({
        botones:{
            textDecoration: 'none',
            borderRadius: '4px',
            border: 'solid 1px #636363',
            fontFamily: 'Rubik',
            width: '10em',
            color: '#636363',
            padding: '6px 8px',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin:'2.5px 0',
            fontSize: '0.875rem',
            '&:hover':{
                color: '#FFFFFF',
                backgroundColor: '#636363',
            }
        },
        contenedorGeneral:{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px'
        },
        contenedor:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
    })
}