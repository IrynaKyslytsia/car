import { IconContext } from "react-icons";
import MainButton from "../MainButton/MainButton";
import { Card, CardInfo, CardTitle, FavoriteButton, Image } from "./AdvertCard.styled";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from "react";
import defaultImage from "../../images/default-image.jpg";
// import { nanoid } from "nanoid";
// import { useLocalStorage } from "../../hooks/useLocalStorage";

const AdvertCard = ({ advert, onOpen, favoriteCars, onCarList, setFavoriteCars }) => {
    const [isActive, setIsActive] = useState(false);

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
        fuelConsumption,
        engineSize,
        description,
        functionalities,
        rentalConditions,
        mileage,
    } = advert;

    const handleClick = () => {
    const carDetails = {
      make,
      img,
      model,
      rentalPrice,
      year,
      address,
      mileage,
      type,
      id,
      accessories,
      fuelConsumption,
      engineSize,
      description,
      functionalities,
      rentalConditions,
    };
    onOpen();
    onCarList(carDetails);
  }

    const city = address.split(",")[1];
    const country = address.split(",")[2];
    const accessory = accessories[0];

    const handleAdd = () => {
        const favoriteCar = { ...advert }
        console.log(favoriteCar)
        setIsActive(true);
        setFavoriteCars(prev => [...prev, favoriteCar])
    };

    const handleDelete = (id) => {
        setIsActive(false);
    };

    return (
        <Card key={id}>
            <Image src={img ? img : defaultImage} alt={make} />
            <IconContext.Provider value={{ size: '18px', color: isActive ? "#3470FF" : "#FFFFFF" }}>
                <FavoriteButton onClick={isActive ? handleDelete : handleAdd}>
                    {isActive ? <FaHeart /> : <FaRegHeart />}
                </FavoriteButton>
            </IconContext.Provider>
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

export default AdvertCard;