import React from 'react';
import { Logo } from '../../../theme/Logo';
import {MenuWrapper} from './styles/MenuWrapper';


export default function Menu () {
  const links = [
        {
            texto: 'Home',
            url:  '/'
        },
        {
            texto: 'Perguntas Frequentes',
            url:  '/faq'
        },
        {
            texto: 'Sobre',
            url:  '/sobre'
        }
    ];
  
    return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo/>
      </MenuWrapper.LeftSide>
      <MenuWrapper.Central as="ul">
        {
            links.map((link) => {
                return (<li key={link.url}>
                    <a href={link.url}>
                        {link.texto}
                    </a>
                </li>)
            })
        }
      </MenuWrapper.Central>
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Sair</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>)
}

