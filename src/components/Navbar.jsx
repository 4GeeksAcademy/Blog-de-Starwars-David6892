import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

    const { store, dispatch } = useGlobalReducer();

    const removeFavorite = (name) => {
        dispatch({
            type: "REMOVE_FAVORITE",
            payload: name
        });
    };

    return (
        <nav className="navbar navbar-light bg-light px-4">

            <Link to="/" className="navbar-brand">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                    alt="Star Wars"
                    width="120"
                />
            </Link>

            <div className="dropdown">

                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                >
                    Favorites ({store.favorites.length})
                </button>

                <ul className="dropdown-menu dropdown-menu-end">

                    {
                        store.favorites.length === 0 ?

                            <li className="dropdown-item">
                                No favorites
                            </li>

                            :

                            store.favorites.map((fav, index) => (

                                <li
                                    key={index}
                                    className="dropdown-item d-flex justify-content-between align-items-center"
                                >

                                    {fav}

                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => removeFavorite(fav)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>

                                </li>

                            ))
                    }

                </ul>

            </div>

        </nav>
    );
};