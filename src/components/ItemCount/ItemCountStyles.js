window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const commonJustify = {
    display: 'flex',
    justifyContent: 'center',
}

const commonDirection = {
    flexDirection: 'row',
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
            margin: '10px 0px'
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
            marginTop: '5px',
            color: '#FFFFFF',
            border: 'solid 1px black',
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