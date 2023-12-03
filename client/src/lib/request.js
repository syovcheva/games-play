

const buildOptions = (data) => {

    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        }
    }
    return options;
}

const request = async (method, url, data) => {
    // for GET requests:
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    const result = await response.json();
    return result;
}

// partial application

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');