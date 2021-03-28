import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import TipForm from "./TipForm";
import TipAmount from "./TipAmount";

export default function App() {
  const [formData, setFormData] = useState({
    totalTipAmount: 0,
    totalTippableHours: 0,
    hourlyTipRate: 0,
    hoursWorked: 0,
    payOut: 0,
    showPayOut: false
  });

  return (
    <Container fluid>
      <h1 style={{ textAlign: "center", marginBottom: ".7rem" }}>
        Tip Distribution Calculator
      </h1>
      <TipForm formData={formData} setFormData={setFormData} />
      {formData.showPayOut && (
        <TipAmount
          payOut={formData.payOut}
          hourlyTipRate={formData.hourlyTipRate}
        />
      )}
    </Container>
  );
}
