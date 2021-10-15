import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupsPage() {
  const history = useHistory();

  function addMeetupHandler(data) {
    console.log(data);
    //meetups at end will add new collection for meetups, .json at end firebase specific
    const url =
      "https://react-practice-rachit-default-rtdb.firebaseio.com/meetups.json";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=>{
      history.replace('/');
    });
    //https://react-practice-rachit-default-rtdb.firebaseio.com/
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  );
}
