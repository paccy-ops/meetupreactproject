import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetup = () => {
  const history = useHistory();
  function addMeetupHander(meetupdata) {
    fetch(
      "https://react-start-5e6a2-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupdata),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup </h1>
      <NewMeetupForm onAddMeetup={addMeetupHander} />
    </section>
  );
};

export default NewMeetup;
