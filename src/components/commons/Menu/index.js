/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';
import { Text } from '../../foundation/Text';

export default function Menu({ onCadastrarClick }) {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas Frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.Central as="ul">
        {
            links.map((link) => (
              <li key={link.url}>
                <Text tag="a" variant="smallestException" href={link.url}>
                  {link.texto}
                </Text>
              </li>
            ))
        }
      </MenuWrapper.Central>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">Entrar</Button>
        <Button
          variant="primary.main"
          onClick={onCadastrarClick}
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
