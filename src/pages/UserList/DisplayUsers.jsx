import React, { useState } from 'react';
import UserTable from './UserListTable';
import UserApiData from './UserApiData';
import Modal from '@/components/Modal';
import UserDetailSection from './UserDetailSection';

function DisplayUser() {
    const [userList, setUserList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [userDetail, setUserDetail] = useState(null);

    const openModalClient = (user) => {
        const userData = userList.find((userData) => userData.id === parseInt(user.id));
        setUserDetail(userData);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
        <div className="grid justify-items-center">
            <div className="shadow-2xl w-[1000px] mt-8 p-8 rounded-lg">
                <div>
                    <div className="flex justify-center font-bold text-gray-700 text-4xl pb-5">List of Users</div>
                    <UserApiData setUserList={setUserList} />
                    {userList.length > 0 ? (
                        <UserTable userList={userList} userDetailCallback={openModalClient} />
                    ) : (
                        <p>Cargando datos...</p>
                    )}

                    <Modal showModal={showModal} closeModalCallback={closeModal}>
                        {userDetail && <UserDetailSection userDetail={userDetail} />}
                    </Modal>
                </div>
            </div>
        </div>
            
        </>
    );
}

export default DisplayUser;
