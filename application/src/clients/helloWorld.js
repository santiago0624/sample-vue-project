const Client = {
    getSampleByID(id) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
};

export default Client;