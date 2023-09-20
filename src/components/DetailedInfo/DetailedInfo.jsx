// import { Link } from "react-router-dom";
import { CardWrapper, Conditions, ConditionsWrapper, Description, Image, Info, MainInfo, SecondTitle, Title } from "./DetailedInfo.styled";
import MainButton from "../MainButton/MainButton";

const DetailedInfo = ({carDetails}) => {
    
    const {
        id,
        make,
        img,
        model,
        rentalPrice,
        year,
        address,
        type,
        description,
        accessories,
        fuelConsumption,
        engineSize,
        functionalities,
        rentalConditions,
        mileage
    } = carDetails;

    const city = address.split(",")[1];
    const country = address.split(",")[2];

    return (
        <CardWrapper>
            <MainInfo>
                <Image src={img} alt={make} width="100%" height="248"/>
                <Title>
                    <h3>{make}{" "} 
                        <span style={{ color: "#3470FF" }}>{model}, </span>
                        <span>{year}</span>
                    </h3>                    
                </Title>
                <Info>
                    <span>{city} |</span>
                    <span>{country} |</span>
                    <span>Id: {id} |</span>
                    <span>Year: {year} |</span>
                    <span>Type: {type}</span>
                </Info>
                <Info>
                    <span>Fuel Consumption: {fuelConsumption}</span>
                    <span>Engine Size: {engineSize}</span>
                </Info>
                <Description>{description}</Description>
            </MainInfo>
            <div>
                <SecondTitle>Accessories and functionalities:</SecondTitle>
                <Info>{accessories}, {functionalities}</Info>
            </div>
            <div>
                <SecondTitle>Rental Conditions:</SecondTitle>
                <ConditionsWrapper>
                    <Conditions>{rentalConditions}</Conditions>
                    <Conditions>{mileage}</Conditions>
                    <Conditions>{rentalPrice}</Conditions>
                </ConditionsWrapper>
            </div>
            <MainButton as="a" href="#" size="medium">Rental car</MainButton>
        </CardWrapper>
    )
};

export default DetailedInfo;