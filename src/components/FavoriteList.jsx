import { List } from "./AdvertList/AdvertList.styled";
import FavoriteCard from "./FavoriteCard";

const FavoriteList = ({onOpen, onAddCars, favoriteCars, setFavoriteCars}) => {
    return (
        <List>
            {favoriteCars && favoriteCars.map((advert) => (
                <FavoriteCard
                    key={advert.id}
                    advert={advert}
                    onOpen={onOpen}
                />
            ))}
        </List>
    )
};

export default FavoriteList;