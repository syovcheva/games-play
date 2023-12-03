// creating a service layer - supposed to group the requests by resource, which we perform CRUD requests on

import * as request from "../lib/request";
const baseUrl = 'http://localhost:3030/jsonstore/games';

// gets all games from the server:
export const getAll = async () => {

    const result = await request.get(baseUrl);
    return Object.values(result);
}

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    return result;

}
/*
export const create = async (gameData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(gameData)
    });
    const result = await response.json();

    return result;

}
*/