import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const SingleEvent = ({ data }) => {

  //to store input value
  const inputEmail = useRef();

  //The useRouter hook allows to identify the event id and change routes inside client components.
  const router = useRouter();


  //to display the `message`
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    console.log(eventId);

    //to check if the format of the email is correct
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }

    try {
      const response = await fetch("/api/email-registr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      
      const data = await response.json();
      setMessage(data.message);

      //to reset the value inserted after submitting
      inputEmail.current.value = "";
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} width={600} height={400} alt={data.title} />
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registr">
        <label>Get tickets for this event:</label>
        <input
          ref={inputEmail}
          id="email"
          placeholder="Please insert your email"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};
