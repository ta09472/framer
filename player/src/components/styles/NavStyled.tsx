import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import styled from "styled-components";

export interface NavProps {
  children: React.ReactNode;
}
const NavStyled = styled(motion.nav)`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration-line: none;
  margin-top: 40px;
  padding: 10px;
  border-radius: 40px;

  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
`;

export const NavContainer = (props: NavProps) => (
  <NavStyled whileHover={{ scale: 1.2 }}>{props.children}</NavStyled>
);
