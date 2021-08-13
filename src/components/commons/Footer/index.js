/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */

import React from 'react';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <Text tag="a" href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo.svg"
          alt="Logo Alura"
        />
      </Text>
      <Text variant="paragraph2" tag="p" color="tertiary.light">
        Orgulhosamente criado durante
        {' '}
        o
        {' '}
        <Text tag="a" href="https://www.alura.com.br/">
          <Text>Bootcamp Alura JAM Stack</Text>
        </Text>
      </Text>
    </FooterWrapper>
  );
}
