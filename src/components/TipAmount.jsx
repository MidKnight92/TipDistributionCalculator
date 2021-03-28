export default function TipAmount({ payOut, hourlyTipRate }) {
  return (
    <>
      <p
        style={{
          fontWeight: "bolder",
          color: "black",
          textAlign: "center",
          fontSize: "1.5rem"
        }}
      >
        Employee Tip Pay Out: ${payOut}
      </p>
      <p
        style={{
          color: "black",
          textAlign: "center",
          fontSize: "1 rem"
        }}
      >
        {`Tip Rate Per Hour: $${hourlyTipRate.toFixed(2)}`}
      </p>
    </>
  );
}
