const https = require('https');

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'jsonplaceholder.typicode.com',
            path: `/users/${id}`,
            method: 'DELETE',
        };

        const req = https.request(options, (res) => {
            res.on('data', () => {}); 
            res.on('end', () => {
                resolve({ status: res.statusCode });
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.end();
    });
}

console.log(deleteUser(1));

module.exports = deleteUser;
