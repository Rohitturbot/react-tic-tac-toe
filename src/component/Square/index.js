import React from "react";
import { Button } from "react-bootstrap";

const Square = ({ value, onClick }) => (
  <Button
    variant="outline-warning"
    onClick={onClick}
    className="border border-warning rounded-0 square"
  >
    <p className="mb-0">{value}</p>
  </Button>
);

export default Square;
