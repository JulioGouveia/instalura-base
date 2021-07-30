import React from 'react';
import styled, {css} from 'styled-components';
import {get} from 'lodash';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
    smallestException,
    paragraph1,
  };

const TextBase = styled.span`
    ${({variant})=> TextStyleVariants[variant]}
    
    
}
    
`;

export function Text ({tag, variant, children, ...props}) {
    return (
        <TextBase as={tag} variant={variant} {...props}>
            {children}
        </TextBase>
    )
}