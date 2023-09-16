import { useState } from "react";
import Form from "react-bootstrap/Form";

function FAQ() {
  const [answer, setAnswer] = useState("");
  const selectHandler = async (e) => {
    const selectedOption = Number(e.target.value);
    console.log(selectedOption);
    const response = await fetch(
      `https://cyf-7rfc.onrender.com/answers/${selectedOption}`
    );
    if (!response.status === 200) {
      throw new Error("something went wrong!");
    }
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <>
      <Form.Select
        className="select-form"
        style={{
          display: "block",
          fontSize: 20,
          textAlign: "center",
          marginTop: "2em",
        }}
        onChange={selectHandler}
        aria-label="Default select example"
      >
        <option>Open this select menu</option>
        <option value="1">How can I join?</option>
        <option value="2">Who can be a volunteer?</option>
        <option value="3">When will the next course start?</option>
        <option value="4">What level of English required?</option>
        <option value="5">What financial support do you offer?</option>
      </Form.Select>
      <p className="text-center">{answer}</p>
    </>
  );
}

export default FAQ;
