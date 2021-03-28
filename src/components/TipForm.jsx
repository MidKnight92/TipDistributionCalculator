import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

export default function TipForm({ formData, setFormData }) {
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
    <Form
      onChange={handleChange}
      style={{
        background: "lightgray",
        padding: "1rem",
        border: "black solid .05rem",
        margin: "1rem"
      }}
    >
      <Form.Group controlId="formTotalTipAmount">
        <Form.Label>Total Tip Amount:</Form.Label>
        <Form.Control
          type="text"
          placeholder="$000.00"
          name="totalTipAmount"
          required
        />
        <Form.Text className="text-muted">
          Please omit currency symbol.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formTotalHoursWorked">
        <Form.Label>Total Tippable Hours:</Form.Label>
        <Form.Control
          type="text"
          placeholder="000.00 hrs"
          name="totalTippableHours"
        />
      </Form.Group>
      <Form.Group controlId="formHoursWorked">
        <Form.Label>Total Hours Worked by Employee:</Form.Label>
        <Form.Control type="text" placeholder="000.00 hrs" name="hoursWorked" />
      </Form.Group>
      <Button variant="success" type="button" onClick={calulateTipPayOut}>
        Calculate
      </Button>
      <Button
        style={{ float: "right" }}
        variant="danger"
        type="reset"
        onClick={handleClick}
      >
        Reset
      </Button>
    </Form>
  );
}
