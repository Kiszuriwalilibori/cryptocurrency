import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useAxios } from 'use-axios-client';
import errorDictionary from '../resources/errorDictionary';

const useGetListOfCryptos = () => {
    const axiosInstance = axios.create({});
    const forecastURL = process.env.REACT_APP_ALL_CRYPTOS_URL;
    const { enqueueSnackbar } = useSnackbar();
    axiosInstance.interceptors.response.use(
        res => {
            const numberOfCryptos = Object.keys(res?.data.Data).length;
            enqueueSnackbar(`Fetched succesfully ${numberOfCryptos} cryptos`, {
                variant: 'success',
            });

            return res;
        },
        err => {
            if (err.response.status === 404) {
                enqueueSnackbar(`${errorDictionary[404]} ${err.config.url}`, { variant: 'error' });
                throw new Error(`${errorDictionary[404]} ${err.config.url}`);
            } else {
                enqueueSnackbar(`Fetching error no. ${err.response.status}for ${err.config.url}`, {
                    variant: 'error',
                });
            }
            throw err;
        },
    );

    return useAxios({ axiosInstance: axiosInstance, url: forecastURL });
};

export default useGetListOfCryptos;
