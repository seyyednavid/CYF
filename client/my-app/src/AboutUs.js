import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function AboutUs() {
  return (
    <Card className="text-white">
      <Card.Img
        src="https://codeyourfuture.io/wp-content/uploads/2023/06/Social-fallback.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay
        className="text-center fw-bold"
        style={{
          display: "block",
          fontSize: 50,
          textAlign: "center",
          marginTop: "2em",
        }}
      >
        <Card.Text>Training for refugees & disadvantaged people</Card.Text>
        <Card.Text>Learn to code and change your life</Card.Text>
        <Button variant="danger" size="lg">
          Train with CodeYourFuture
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}
export default AboutUs;
