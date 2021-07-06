window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const commonJustify = {
    display: 'flex',
    justifyContent: 'center',
}

const commonDirection = {
    flexDirection: 'column',
}

const commonAlign = {
    alignSelf: 'center'
}

const commonColor = {
    color: 'black'
}

export const counterStyles = theme => {
    return({
        generalContainer: {
            ...commonJustify,
            ...commonDirection,
            margin: '20px 0px'
        },
        container:{
            ...commonJustify,
        },
        buttonsContainer: {
            ...commonJustify,
            ...commonDirection
        },
        counter:{
            ...commonAlign
        },
        buttonCart: {
            ...commonAlign,
            marginTop: '10px',
            color: '#FFFFFF',
            border: 'solid 2px black',
            background: '#3acbf7',
            fontFamily: 'Montserrat',
            ...commonColor,
            '&:hover':{
                color: '#FFFFFF',
                backgroundColor: 'rgb(201, 122, 122)',
            }
        },
        counterButtons:{
            ...commonColor
        }
    })
}