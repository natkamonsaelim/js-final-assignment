// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
};

const handleResponse = (response) => {
    return response.json();
};

const displayUsers = () => {
    getUsers()
        .then(handleResponse)
        .then((data) => {
            const newUsers = data.map(user => user.name);
            console.log(newUsers);
        });
};

getUsers().then(handleResponse).then(displayUsers);