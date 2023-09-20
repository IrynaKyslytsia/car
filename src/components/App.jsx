import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Favorites from "../pages/Favorites";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState } from "react";

const App = () => {
    const [favoriteCars, setFavoriteCars] = useLocalStorage('favorites', []);
    const [isShowModal, setIsShowModal] = useState(false);
    const [carDetails, setCarDetails] = useState(null);

    const handleSelectCar = (car) => {
        setCarDetails(car)
    }; 

    const showModal = () => {
        setIsShowModal(true);
        console.log(carDetails)
    };

    const closeModal = () => {
        setIsShowModal(false);
    }; 

    const handleFavoriteCars = (car) => {
        setFavoriteCars((favoriteCars) => [...favoriteCars, car]);
    };
    
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="catalog" element={<Catalog
                    onAddCars={handleFavoriteCars}
                    handleSelectCar={handleSelectCar}
                    carDetails={carDetails}
                    favoriteCars={favoriteCars}
                    setFavoriteCars={setFavoriteCars}
                    isShowModal={isShowModal}
                    onOpen={showModal}
                    onClose={closeModal} />} />
                <Route path="favorites" element={<Favorites
                    favoriteCars={favoriteCars}
                    carDetails={carDetails}
                    isShowModal={isShowModal}
                    onOpen={showModal}
                    onClose={closeModal}/>} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
  
    )
};

export default App;