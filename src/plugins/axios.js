import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://mi.api.com/',
    //Se puede añadir más configuraciones como headers por defecto
});

export default axiosInstance;