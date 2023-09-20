const BASE_URL = "https://6506de823a38daf4803ecb63.mockapi.io";

export const getAdverts = (page = 1) => {
    return fetch(`${BASE_URL}/adverts?page=${page}&limit=8`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error('Oops... Something went wrong'));
        })
};