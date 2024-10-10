const https = require('https');

function fetchUsers() {
    return new Promise((resolve, reject) => {
        https.get('https://jsonplaceholder.typicode.com/users', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                const users = JSON.parse(data).map(user => ({
                    id: user.id,
                    name: user.name
                }));
                resolve(users);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

console.log(fetchUsers())

module.exports = fetchUsers;
