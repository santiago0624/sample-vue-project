import axios from "axios";

const Client = {
    getDrivers() {
        let promises = [];
        let results = [];
        for (let i = 0; i < 6; i++) {
            let promise = axios.get(`/fixtures/driver_${i + 1}.json`)
                .then((result) => {
                    results.push(result.data);
                });
            promises.push(promise);
        }
        return Promise.all(promises)
            .then(() => {
                return results;
            });
    },
    getDriver(driverId) {
        return axios.get(`/fixtures/driver_${driverId}.json`);
    }
};

export default Client;