import styled, {css} from 'styled-components';
import {TextStyleVariants} from '../../foundation/Text'
import get from 'lodash/get';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

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
    
    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
  })}

    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};
    &:hover,
    &:focus {
        opacity: .5;
    }
`; 