let storedData = {};  // Global variable to store data

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    try {
        // Check if any data has been stored
        if (Object.keys(storedData).length === 0) {
            return {
                statusCode: 404,
                body: 'No data found'
            };
        }

        // Return the stored data
        return {
            statusCode: 200,
            body: JSON.stringify(storedData)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: `Error: ${error.message}`
        };
    }
};
