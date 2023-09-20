import AdvertCard from "./AdvertCard/AdvertCard";
import { List } from "./AdvertList/AdvertList.styled";

const FavoriteList = ({onOpen, onAddCars, favoriteCars, setFavoriteCars}) => {
    return (
        <List>
            {favoriteCars && favoriteCars.map((advert) => (
                <AdvertCard
                    key={advert.id}
                    advert={advert}
                    onOpen={onOpen}
                    onAddCars={onAddCars}
                    favoriteCars={favoriteCars}
                    setFavoriteCars={setFavoriteCars}
                />
            ))}
        </List>
    )
};

export default FavoriteList;