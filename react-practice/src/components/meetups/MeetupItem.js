import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const isItemFavorite=favoritesCtx.itemIsFavorites(props.id);
  let btnText='Add to Favorites';
  function toggleFavoritesHandler() {
    if(isItemFavorite){
      favoritesCtx.removeFavorites(props.id);
      btnText='Add to Favorites';
    }
    else{
      favoritesCtx.addFavorites({
        id:props.id,
        image:props.image,
        address:props.address,
        title:props.title,
        description:props.description
      });
      btnText='Remove from Favorites';
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesHandler}>{btnText}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
