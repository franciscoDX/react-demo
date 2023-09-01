import React from 'react';
import { FindIcon, EditIcon } from '@/components/icons';
import { Link } from "react-router-dom";

const UserTable = ({ userList, userDetailCallback }) => {
    const getStatusColorClass = (status) => {
        switch (status) {
            case 'active':
                return 'text-green-700 bg-green-100';
            case 'inactive':
                return 'text-yellow-700 bg-yellow-100';
            case 'blocked':
                return 'text-red-700 bg-red-100';
            default:
                return '';
        }
    };

    return (
        <div className="w-full mb-8 overflow-hidden rounded-lg">
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {userList.map((user, index) => (
                            <tr key={index} className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold text-black">{user.firstName} {user.lastName}</p>
                                            <p className="text-xs text-gray-600">{user.profession}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">{user.email}</td>
                                <td className="px-4 py-3 text-xs border">
                                    <span
                                        className={`px-2 py-1 font-semibold leading-tight rounded-sm ${getStatusColorClass(user.status)}`}
                                    > {user.status} </span>
                                </td>
                                <td className="px-4 py-3 text-sm border">

                                    <div className='inline-block mr-1' onClick={() => userDetailCallback(user)}>
                                        <FindIcon />
                                    </div>
                                    <Link to={`/user/${user.id}`}>
                                        <div className='inline-block'><EditIcon /></div>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;