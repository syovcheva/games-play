

export const request = async (method, url, data) => {
    // for GET requests:
    const response = await fetch(url, {
        method,
    });

    const result = await response.json();
    return result;
}