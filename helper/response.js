const response = (statusCode, message, error) => {
    let body = {};
    if (message) {
        body = { message }
    } else if (error) {
        body = { error }
    }
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    };
    return response;
}


module.exports = response;