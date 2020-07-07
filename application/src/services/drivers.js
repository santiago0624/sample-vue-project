import DriversClient from '@/clients/drivers'

const Service = {
    async getDrivers() {
        return DriversClient.getDrivers();
    },

    async getDriver(driverId) {
        return DriversClient.getDriver(driverId)
            .then((res) => {
                return res.data;
            });
    }
};

export default Service;