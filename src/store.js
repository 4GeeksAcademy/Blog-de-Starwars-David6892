export const initialStore = () => ({
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
});

export default function storeReducer(store, action = {}) {

    switch (action.type) {

        case "SET_PEOPLE":
            return {
                ...store,
                people: action.payload
            };

        case "SET_PLANETS":
            return {
                ...store,
                planets: action.payload
            };

        case "SET_VEHICLES":
            return {
                ...store,
                vehicles: action.payload
            };

        case "ADD_FAVORITE":

            if (store.favorites.includes(action.payload)) return store;

            return {
                ...store,
                favorites: [...store.favorites, action.payload]
            };

        case "REMOVE_FAVORITE":
            return {
                ...store,
                favorites: store.favorites.filter(
                    fav => fav !== action.payload
                )
            };

        default:
            return store;
    }
}