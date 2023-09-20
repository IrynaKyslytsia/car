import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AdvertList from "../components/AdvertList/AdvertList";
import { getAdverts } from "../services/api";
import { LoadMoreButton } from "../components/MainButton/MainButton.styled";
import Sidebar from "../components/Sidebar/Sidebar";
import Modal from "../components/Modal/Modal";

const Catalog = ({onAddCars, onOpen, onClose, isShowModal, favoriteCars, setFavoriteCars }) => {
    const [adverts, setAdverts] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        getAdverts(page)
            .then(data => { setAdverts(prevState => ([...prevState, ...data])) })
            .catch(error => setError(error))
            .finally(() => { setIsLoading(false) })
    }, [page]);

    const onLoadMore = () => {
        setPage(page + 1)
    };

    return (
        <>
            <Helmet>
                <title>Catalog</title>
            </Helmet>
            <Sidebar />
            {isLoading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {adverts && <AdvertList
                adverts={adverts}
                favoriteCars={favoriteCars}
                setFavoriteCars={setFavoriteCars}
                onAddCars={onAddCars}
                onOpen={onOpen}/>}
            {(adverts.length > 0 && !isLoading) && <LoadMoreButton onClick={onLoadMore}>Load more</LoadMoreButton>}
            {isShowModal && <Modal onOpen={onOpen} onClose={onClose} />}
        </>
    )
};

export default Catalog;