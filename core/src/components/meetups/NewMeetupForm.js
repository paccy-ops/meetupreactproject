import React, { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function onSubmitHandler(event) {
    event.preventDefault();
    const enteredtitle = titleInputRef.current.value;
    const enteredaddress = addressInputRef.current.value;
    const entereddescription = descriptionInputRef.current.value;
    const enteredimage = imageInputRef.current.value;

    const meetupsEntre = {
      title: enteredtitle,
      address: enteredaddress,
      description: entereddescription,
      image: enteredimage,
    };
    props.onAddMeetup(meetupsEntre);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address </label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description </label>
          <textarea
            type="text"
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
