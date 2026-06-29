import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Card = ({ item, type }) => {

    const { dispatch } = useGlobalReducer();

    const addFavorite = () => {
        dispatch({
            type: "ADD_FAVORITE",
            payload: item.name
        });
    };

    return (
        <div
            className="card me-3"
            style={{ minWidth: "18rem" }}
        >
            <img
                src={`https://picsum.photos/300/200?random=${item.uid}`}
                className="card-img-top"
                alt={item.name}
            />

            <div className="card-body">

                <h5 className="card-title">{item.name}</h5>

                <p className="card-text text-muted">
                    {type === "people" && "Personaje"}
                    {type === "planets" && "Planeta"}
                    {type === "vehicles" && "Vehículo"}
                </p>

                <div className="d-flex justify-content-between">

                    <Link to={`/single/${item.uid}`}>
                        <button className="btn btn-outline-primary">
                            Learn more
                        </button>
                    </Link>

                    <button
                        className="btn btn-outline-warning"
                        onClick={addFavorite}
                    >
                        ❤️
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Card;