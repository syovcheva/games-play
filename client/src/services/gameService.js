// creating a service layer - supposed to group the requests by resource, which we perform CRUD requests on

const baseUrl = 'http://locallhost:3030/jsonstore';

export const create = async (gameData) => {
    const response = fetch(`${baseUrl}/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(gameData)
    });
    const result = await response.json();

    return result;

}
