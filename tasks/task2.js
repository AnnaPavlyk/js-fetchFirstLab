const https = require('https');

function createUser(user) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(user);

        const options = {
            hostname: 'jsonplaceholder.typicode.com',
            path: '/users',
            method: 'POST',
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

console.log(createUser({name: "Sam", email: "fjsnfkjns2342@gmail.com"}))

module.exports = createUser;
