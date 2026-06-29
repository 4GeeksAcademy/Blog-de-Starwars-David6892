import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";

export const Home = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        getPeople();
        getPlanets();
        getVehicles();
    }, []);

    const getPeople = async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/people");
            const data = await response.json();

            dispatch({
                type: "SET_PEOPLE",
                payload: data.results
            });

        } catch (error) {
            console.log(error);
        }
    };

    const getPlanets = async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/planets");
            const data = await response.json();

            dispatch({
                type: "SET_PLANETS",
                payload: data.results
            });

        } catch (error) {
            console.log(error);
        }
    };

    const getVehicles = async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/vehicles");
            const data = await response.json();

            dispatch({
                type: "SET_VEHICLES",
                payload: data.results
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="container mt-4">

            <h2 className="text-danger mb-3">
                Characters
            </h2>

            <div className="d-flex overflow-auto pb-4">

                {
                    store.people.map(person => (

                        <Card
                            key={person.uid}
                            item={person}
                            type="people"
                        />

                    ))
                }

            </div>

            <h2 className="text-danger mb-3 mt-5">
                Planets
            </h2>

            <div className="d-flex overflow-auto pb-4">

                {
                    store.planets.map(planet => (

                        <Card
                            key={planet.uid}
                            item={planet}
                            type="planets"
                        />

                    ))
                }

            </div>

            <h2 className="text-danger mb-3 mt-5">
                Vehicles
            </h2>

            <div className="d-flex overflow-auto pb-5">

                {
                    store.vehicles.map(vehicle => (

                        <Card
                            key={vehicle.uid}
                            item={vehicle}
                            type="vehicles"
                        />

                    ))
                }

            </div>

        </div>

    );

};

