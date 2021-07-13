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
        headerTable:{
            backgroundColor: '#e6e6e6'
        },
        tableContainer:{
            width: '80%',
            marginTop: '5%'
        },
        imgProducto:{
            maxWidth: '8rem'
        },
        delete:{
            '&:hover':{
                color: '#ff0000'
            }
        }
    })
}