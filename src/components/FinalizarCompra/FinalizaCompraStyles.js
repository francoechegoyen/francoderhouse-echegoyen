export const finalizarCompraStyles = theme => {
    return({
        generalContainer:{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            margin: '20px 0px',
        },
        container:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '20px 0px'
        },
        buttonAccept:{
            textDecoration: 'none',
            borderRadius: '4px',
            border: 'solid 2px black',
            background: '#3acbf7',
            fontFamily: 'Montserrat',
            width: '10em',
            color: 'black',
            padding: '6px',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin:'10px',
            fontSize: '0.875rem',
            '&:hover':{
                color: '#FFFFFF',
                backgroundColor: 'darkgreen',
            }

        },
        buttonCancel:{
            textDecoration: 'none',
            borderRadius: '4px',
            border: 'solid 2px black',
            background: 'rgb(201, 122, 122)',
            fontFamily: 'Montserrat',
            width: '10em',
            color: '#FFFFFF',
            padding: '6px',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin:'10px',
            fontSize: '0.875rem',
            '&:hover':{
                color: '#FFFFFF',
                backgroundColor: 'red',
            }

        }
    })
}