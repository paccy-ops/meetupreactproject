import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetUps = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-start-5e6a2-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          console.log(meetup);
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
  }
  return (
    <div>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetUps;
