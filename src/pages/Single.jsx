
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {

    const { theId } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItem();
    }, []);

    const getItem = async () => {

        try {
            setLoading(true);

            // Como no tienes "type" en la ruta,
            // probamos en people (lo más común en este ejercicio 4Geeks)
            let response = await fetch(`https://www.swapi.tech/api/people/${theId}`);
            let result = await response.json();

            if (!response.ok) throw new Error("Not found");

            setData(result.result);

        } catch (error) {
            console.log("No es persona, intentando planeta...");

            try {
                let response = await fetch(`https://www.swapi.tech/api/planets/${theId}`);
                let result = await response.json();

                setData(result.result);

            } catch (error2) {
                console.log("No es planeta, intentando vehículo...");

                try {
                    let response = await fetch(`https://www.swapi.tech/api/vehicles/${theId}`);
                    let result = await response.json();

                    setData(result.result);

                } catch (error3) {
                    console.log("No encontrado");
                }
            }
        }

        setLoading(false);
    };

    if (loading) {
        return (
            <div className="container mt-5">
                <h3>Cargando...</h3>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="container mt-5">
                <h3>No se encontró el elemento</h3>
            </div>
        );
    }

    return (
        <div className="container mt-5">

            <div className="card p-4">

                <h2>{data.properties?.name}</h2>

                <hr />

                <ul>
                    {
                        Object.entries(data.properties).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key}:</strong> {value}
                            </li>
                        ))
                    }
                </ul>

            </div>

        </div>
    );
};

export default Single;