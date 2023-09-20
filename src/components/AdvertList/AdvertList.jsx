import AdvertCard from "../AdvertCard/AdvertCard";
import { List } from "./AdvertList.styled";

const AdvertList = ({adverts, onOpen, onAddCars, favoriteCars, setFavoriteCars}) => {
    return (
        <List>
            {adverts && adverts.map((advert) => (
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

export default AdvertList;