import AdvertCard from "../AdvertCard/AdvertCard";
import { List } from "./AdvertList.styled";

const AdvertList = ({adverts, onOpen, onAddCars, onCarList}) => {
    return (
        <List>
            {adverts && adverts.map((advert) => (
                <AdvertCard
                    key={advert.id}
                    advert={advert}
                    onOpen={onOpen}
                    onAddCars={onAddCars}
                    onCarList={onCarList}
                />
            ))}
        </List>
    )
};

export default AdvertList;