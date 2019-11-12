import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { font, primaryColors, shape } from 'config/styles'

export default function Button({ text, onClick, style, color }) {
    const BtnWrapper = styled.button`
    ${font}; 
    ${primaryColors}; 
    ${shape}; 
    color: ${color ? color : '#fff'};
`;

    return (
        <BtnWrapper onClick={onClick} style={style}>{text}</BtnWrapper>
    )
}

Button.propTypes = {
    style: PropTypes.object,
    color: PropTypes.string,
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    color: '',
    style: {}
}