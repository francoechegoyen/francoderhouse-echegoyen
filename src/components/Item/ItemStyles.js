export const itemStyles = theme => {
    return({
        root: {
            maxWidth: 365,
            margin: '15px',
        },
        cardAction:{
            display: 'flex',
            justifyContent: 'center'
        },
        valor:{
            fontSize: '35px',
            fontFamily: "montserrat"
        },
        titulo:{
            fontSize: '22px',
            marginBottom: '5px',
            fontWeight: 'bold'
        },
        titleLink:{
            textDecoration: 'none',
            '&:visited':{
                color: '#000000'
            },
            '&:hover':{
                color: '#A03636',
                textDecoration: 'underline'
            },
            fontSize: '22px',
            marginBottom: '5px',
            fontWeight: 'bold'
        }
    })
}