import React from "react";

const Modal = ({ showModal, closeModalCallback, children  }) => {
  
  return (
    <>
      {showModal ? (
        <>
        <div className="bg-black bg-opacity-75 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="overscroll-none relative w-auto my-6 mx-auto  max-w-4xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[650px] bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font=semibold">General Info</h3>
                            <strong className="text-xl align-center cursor-pointer alert-del" 
                                onClick={() => closeModalCallback()}
                                >&times;
                            </strong>
                    </div>
                    {children}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={() => closeModalCallback()}
                        >
                        Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;