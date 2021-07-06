export const cartMessageStyles = theme => {
    return({
        container:{
            marginTop: '30px',
            padding: 10,
        },
        buttons:{
            textDecoration: 'none',
            borderRadius: '4px',
            border: 'solid 1px #7577fa',
            fontFamily: 'arial',
            width: '10em',
            color: '#7577fa',
            padding: '10px 8px',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin:'3px 0',
            fontSize: '0.875rem',
            '&:hover':{
                color: '#FFFFFF',
                backgroundColor: '#7577fa',
            }

        },
        text:{
            textAlign: 'center'
        },
        buttonContainer:{
            display: 'flex',
            justifyContent: 'center'
        }
    })
}