import { useState, useEffect } from "react/cjs/react.development";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-practice-rachit-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetupsData=[];
        for(const key in data){
          const meetupObj={
            id:key,...data[key]
          };
          meetupsData.push(meetupObj);
        }
        setIsLoading(false);
        setLoadedMeetups(meetupsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading.....</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList items={loadedMeetups}></MeetupList>
    </section>
  );
}

export default AllMeetupsPage;
