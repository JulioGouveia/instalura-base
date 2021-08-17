/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

import React from 'react';
import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Box = styled.div`
    ${propToStyle('flex')}
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundColor')}
`;
