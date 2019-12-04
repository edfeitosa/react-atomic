import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Heading = ({ level, children }) => (
  <Container level={level}>
    {React.createElement(`h${level}`, null, children)}
  </Container>
);

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.string
};

Heading.defaultProps = {
  level: 1
};

export default Heading;
