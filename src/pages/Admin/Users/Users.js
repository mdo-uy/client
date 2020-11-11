import React, { useState, useEffect } from 'react';
import { getAccessTokenApi } from '../../../api/auth';
import { getUsersActiveApi } from '../../../api/user'; 
import ListUsers from '../../../component/Admin/Users/ListUsers';

import './Users.scss';

export default function Users() {
    // Estados
    const [usersActive, setUsersActive] = useState([]);
    const [usersInactive, setUsersInactive] = useState([]);
    const [reloadUsers, setReloadUsers] = useState(false); // Refresca componente

    const token = getAccessTokenApi();
    

    useEffect(() => {
        getUsersActiveApi(token, true).then(response => {
            setUsersActive(response.users)
        });
        getUsersActiveApi(token, false).then(response => {
            setUsersInactive(response.users)
        });
        setReloadUsers(false);
    }, [token, reloadUsers]);

    return (
        <div className='users'>
            <ListUsers usersActive={usersActive} usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
        </div>
    );
}