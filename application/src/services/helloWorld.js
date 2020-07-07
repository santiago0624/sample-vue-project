import HelloWorldClient from '@/clients/helloWorld'

const Service = {
    getSampleJsonByID(id) {
        return HelloWorldClient.getSampleByID(id)
            .then((response) => {
                return response.json();
            });
    }
};

export default Service;