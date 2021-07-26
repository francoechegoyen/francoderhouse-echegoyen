export const orderMessageStyles = () => {
    return({
        container:{
            display: 'flex',
            justifyContent: 'center',
        },
        buttons:{
            textDecoration: 'none',
            borderRadius: '4px',
            border: 'solid 1px #7577fa',
            width: '12em',
            color: '#7577fa',
            padding: '6px 8px',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginTop: '15px',
            fontSize: '0.875rem',
            '&:hover':{
                color: '#FFFFFF',
                backgroundColor: '#7577fa',
            }
        },
        messageOrder:{
            marginTop: '15px',
            textAlign: 'center'
        }
    })
}

