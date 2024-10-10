const https = require('https');

function updateUser(id, updatedData) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(updatedData);

        const options = {
            hostname: 'jsonplaceholder.typicode.com',
            path: `/users/${id}`,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = https.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(responseData));
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.write(data);
        req.end();
    });
}
console.log(updateUser(1, { name: 'New Name' }));

module.exports = updateUser;
