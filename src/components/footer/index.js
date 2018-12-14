import React from 'react';
import styled from 'styled-components';
import { grayLight } from 'colors';
import { DesignCredits } from './design-credits';
import { MadeWith } from './made-with';

const StyledFooter = styled.footer`
  font-size: 12px;
  margin-top: auto;
  padding: .5rem 0.5rem;
  display: flex;
  color: ${grayLight};
  justify-content: space-between;
`

export const Footer = () => (
  <StyledFooter>
    <DesignCredits
      content=" Juan (Aerea UI Kit)"
      arialLabel="Know more about Juan Valle and Aerea UI Kit"
      link="http://juanluisvalle.com/"/>
  <MadeWith description="Made with React and"/>
  </StyledFooter>);
