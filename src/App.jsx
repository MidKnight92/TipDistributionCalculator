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
  const calulateTipPayOut = () => {
    if (
      formData.totalTipAmount &&
      formData.totalTippableHours &&
      formData.hoursWorked
    ) {
      let hrTipRate = formData.totalTipAmount / formData.totalTippableHours;
      let tipPayOut = Math.round(hrTipRate * formData.hoursWorked);
      setFormData({
        ...formData,
        ...{
          hourlyTipRate: hrTipRate,
          payOut: tipPayOut,
          showPayOut: true
        }
      });
    }
  };
  const handleChange = (e) => {
    try {
      let parsedValue = parseFloat(e.target.value) || 0;
      const newFormData = {
        ...formData,
        [e.target.name]: parsedValue
      };
      setFormData(newFormData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setFormData({
      totalTipAmount: 0,
      totalTippableHours: 0,
      hourlyTipRate: 0,
      hoursWorked: 0,
      payOut: 0,
      showPayOut: false
    });
  };

  return (
    <Container fluid>
      <h1 style={{ textAlign: "center", marginBottom: ".7rem" }}>
        Tip Distribution Calculator
      </h1>
      <TipForm
        handleClick={handleClick}
        handleChange={handleChange}
        calulateTipPayOut={calulateTipPayOut}
      />
      {formData.showPayOut && (
        <TipAmount
          payOut={formData.payOut}
          hourlyTipRate={formData.hourlyTipRate}
        />
      )}
    </Container>
  );
}
