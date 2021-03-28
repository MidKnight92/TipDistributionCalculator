import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

export default function TipForm({
  handleClick,
  handleChange,
  calulateTipPayOut,
  hourlyRate
}) {
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
          required
        />
      </Form.Group>
      <Form.Group controlId="formHoursWorked">
        <Form.Label>Total Hours Worked by Employee:</Form.Label>
        <Form.Control
          type="text"
          placeholder="000.00 hrs"
          name="hoursWorked"
          required
        />
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
