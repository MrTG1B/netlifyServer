const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    try {
        const data = JSON.parse(event.body);
        const filePath = path.resolve('/tmp/data.json'); // Using /tmp in Netlify

        fs.writeFileSync(filePath, JSON.stringify(data));

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
