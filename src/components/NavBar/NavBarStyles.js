export const navBarStyles = theme => {
    return({
        appBar: {
            backgroundColor: 'linear-gradient(90deg, rgb(110, 94, 254) 0%, rgba(73,56,252,1) 100%);',
            position: 'static'

        },
        toolBar:{
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 30,
            paddingLeft: 30,
            marginRight: '50px',
        },
        title:{
            flexGrow: 1,
            fontFamily: 'Arial',
            fontWeight: 500
        },
        titleLink:{
            textDecoration: 'none',
            color: '#ffffff',
            padding: 20,
        },
        botones:{
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 400,
            fontFamily: 'Arial',
            '&:hover':{
                color: 'rgb(201, 122, 122)',
                backgroundColor: 'transparent',
                textDecoration: 'underline'
            },
            textDecoration: 'none',
            padding: '2rem',
            textTransform: 'uppercase'
        },
        list:{
            listStyle: 'none',
            display: 'flex'
        }
    })
}