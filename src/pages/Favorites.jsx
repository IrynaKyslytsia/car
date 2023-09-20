import { Helmet } from "react-helmet";
import Sidebar from "../components/Sidebar/Sidebar";
import FavoriteList from "../components/FavoriteList";
import Modal from "../components/Modal/Modal";

const Favorites = ({ favoriteCars, onOpen, onClose, isShowModal }) => {
    
console.log(favoriteCars)
    return (
        <>
            <Helmet>
                <title>Favorites</title>
            </Helmet>
            <Sidebar />
            <FavoriteList
                favoriteCars={favoriteCars}
                onOpen={onOpen} />
            {isShowModal && <Modal onClose={onClose} />}
        </>
    )
};

export default Favorites;