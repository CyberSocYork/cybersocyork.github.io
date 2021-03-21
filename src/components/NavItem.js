import React from "react";
import styled from "styled-components";

import TextLink from "./TextLink";

import config from "../theme/config";
const { color, breakpoint } = config;

const StyledNavItem = styled.li`
  margin-bottom: 1em;
  font-weight: 300;
  font-size: 1.5rem;

  &:nth-last-child(3) {
    margin-bottom: 0;
  }

  ${breakpoint.md} {
    font-size: 1rem;
    margin-bottom: 0;
    margin-right: 2em;
    
    &:last-child {
      margin-right: 0;
    }
  }
`;

const NavLink = styled(TextLink)`
  text-decoration: none;

  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${({ hover }) => hover || color.accent};
  }
`;

const NavItem = ({ to, text, hover, className }) => {
  return (
    <StyledNavItem className={className}>
      <NavLink to={to} hover={hover}>
        {text}
      </NavLink>
    </StyledNavItem>
  );
};

export default NavItem;
