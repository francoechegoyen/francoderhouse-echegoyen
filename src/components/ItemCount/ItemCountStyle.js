export const itemCountStyle = () => {
    return ({
        contenedorItem:{
            display:'flex',
            flexFlow: 'column nowrap',
            rowGap: '1rem',
            '& > button':{
                display:'flex',
                fontFamily: 'Montserrat',
                alignItems: 'center',
                justifyContent:'center',
                columnGap:'0.8rem',
                padding:'0.5rem',
                backgroundColor: '#3acbf7',
                border: '1px solid #3acbf7',
                cursor:'pointer',
                transition: '0.5s',
                '&:hover':{
                    backgroundColor: 'rgb(201, 122, 122)',
                    border: '1px solid rgb(201, 122, 122)',
                    color:'white'
                }
            }
        },
        inputGroup: {
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            border: '1px solid rgb(199, 199, 199)',
            '& > div > button':{
                display:'flex',
                alignItems:'center',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
            },
            '& > span':{
                border: 'transparent',
                width:'3.0rem',
                textAlign: 'center',
                fontSize:'1rem',

            }
        },
        cantidadDiv:{
            display:'flex',
            columnGap: '1rem',
            alignItems:'center'
        },
    })
}