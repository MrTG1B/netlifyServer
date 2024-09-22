let storedData = {};  // Global variable to store data

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    try {
        const data = JSON.parse(event.body);

        // Store the data in the global variable
        storedData = data;

        return {
            statusCode: 200,
            body: 'Data saved successfully!'
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: `Error: ${error.message}`
        };
    }
};
