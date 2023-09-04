import React, { useEffect } from 'react';
import { get } from  '@/axios/axios.js'

export const UserListApiData = ({ setUserList }) => {
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            get(`users`)
            .then((response) => {
                setUserList(response);
            })
            .catch((error) => {
                console.log(error);
            });
        } catch (error) {
        console.log(error);
        }
    };

    return null;
};
