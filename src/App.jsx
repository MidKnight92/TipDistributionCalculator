import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import TipForm from "./TipForm";

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
        <>
          <p
            style={{
              fontWeight: "bolder",
              color: "black",
              textAlign: "center",
              fontSize: "1.5rem"
            }}
          >
            Employee Tip Pay Out: ${formData.payOut}
          </p>
          <p
            style={{
              color: "black",
              textAlign: "center",
              fontSize: "1 rem"
            }}
          >
            {formData.hourlyTipRate
              ? `Tip Rate Per Hour $${formData.hourlyTipRate.toFixed(2)}`
              : ""}
          </p>
        </>
      )}
    </Container>
  );
}
