import React from "react";

const Modal = ({ userDetail }) => {
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
        <>
            <div className="px-4 py-5 sm:px-6">
                <p className="mt-1 max-w-2xl text-md text-gray-500">
                    This is some information about {userDetail.firstName}.
                </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <div className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">
                            Full name
                        </div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userDetail.firstName} {userDetail.lastName}
                        </div>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">
                            Position
                        </div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userDetail.profession}
                        </div>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">
                            Status
                        </div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <span
                                className={`px-2 py-1 font-semibold leading-tight rounded-sm ${getStatusColorClass(userDetail.status)}`}
                            > {userDetail.status} </span>
                        </div>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">
                            Email address
                        </div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userDetail.email}
                        </div>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">
                            Phone number
                        </div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userDetail.details.phone}
                        </div>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">
                            Address
                        </div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userDetail.details.address} {userDetail.details.city}, {userDetail.details.zipCode}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;