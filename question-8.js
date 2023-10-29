// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
};

const handleResponse = (response) => {
    return response.json();
};

const displayUsers = (data) => {
    console.log(data.map(user => user.name));
};

getUsers().then(handleResponse).then(displayUsers);