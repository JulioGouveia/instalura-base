import styled, {css} from 'styled-components';
import {TextStyleVariants} from '../../foundation/Text'
import get from 'lodash/get';

const ButtonDefault = css `
    color: ${({theme, variant}) => get(theme, `colors.${variant}.contrastText`)};
    background-color: ${({theme, variant})=> get(theme, `colors.${variant}.color`)};
    `;

const ButtonGhost = css`
    color: ${({theme, variant}) => get(theme, `colors.${variant}.color`)};
    background-color: transparent;
    `;

export const Button = styled.button`
       border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: ${({theme}) => theme.borderRadius};
    transition: ${({theme}) => theme.transition};
    ${TextStyleVariants.smallestException}
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};
    &:hover,
    &:focus {
        opacity: .5;
    }
`; 