import React from 'react'
import styled from 'styled-components';

const StyleH3 = styled.h3 `
    color: #504c4c;
    font-weight: 400;
    margin: 0.5em 0;
    font-family: 'Roboto';
`

const H3Styled = ( { children} ) => <StyleH3> { children } </StyleH3>

export default H3Styled