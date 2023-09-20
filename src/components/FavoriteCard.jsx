import MainButton from "./MainButton/MainButton";
import { Card, CardInfo, CardTitle, Image } from "./AdvertCard/AdvertCard.styled";
import defaultImage from "../images/default-image.jpg";

const FavoriteCard = ({ advert, onOpen }) => {
    const {
        make,
        img,
        model,
        rentalPrice,
        year,
        address,
        rentalCompany,
        type,
        id,
        accessories,
    } = advert;

    const city = address.split(",")[1];
    const country = address.split(",")[2];
    const accessory = accessories[0];

    function handleClick() {
        onOpen();
    };

    return (
        <Card key={id}>
            <Image src={img ? img : defaultImage} alt={make} />
            <CardTitle>
                <span>{make} {model}, {year}</span>
                <span>{rentalPrice}</span>
            </CardTitle>
            <CardInfo>
                <span>{city} | </span>
                <span>{country} | </span> 
                <span>{rentalCompany} | </span> 
                <span>{type} | </span> 
                <span>{make} | </span> 
                <span>{id} | </span> 
                <span>{accessory}</span>
            </CardInfo>
            <MainButton size="large" onClick={handleClick}>Learn more</MainButton>
        </Card>
    )
};

export default FavoriteCard;