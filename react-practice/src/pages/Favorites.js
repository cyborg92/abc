import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

export default function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  if(favoritesCtx.totalFavorites===0){
    return (
      <section>
        <p>There are no favorites, start adding to favorites from all meetups page.</p>
      </section>
    )
  }
  return (
    
    
    <section>
      <h1>My Favorites</h1>
      <MeetupList items={favoritesCtx.favorties}></MeetupList>
    </section>
  );
}
