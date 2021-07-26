export const cartGridStyles = theme => {
    return({
        container:{
            display: 'flex',
            justifyContent: 'center'
        },
        botonVaciar: {
            marginTop: '10px',
            backgroundColor: 'rgb(201, 122, 122)',
            fontFamily: 'Arial',
            color: '#fff',
            '&:hover':{
                color: '#FFFFFF',
                backgroundColor: '#000',
            }
        },
        generalContainer:{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        headerTable:{
            backgroundColor: '#fff'
        },
        tableContainer:{
            width: '80%',
            marginTop: '5%'
        },
        imgProducto:{
            maxWidth: '9rem'
        },
        delete:{
            '&:hover':{
                color: '#ff0000'
            }
        },
        messageOrder:{
            marginTop: '15px',
            textAlign: 'center'
        }
    })
}