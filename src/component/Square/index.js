import React from "react";
import { Button } from "react-bootstrap";

const Square = ({ value, onClick }) => (
  <Button
    variant="outline-primary"
    onClick={onClick}
    className="border border-primary rounded-0 square"
  >
    <p className="mb-0">{value}</p>
  </Button>
);

export default Square;
