import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { get, put } from  '@/axios/axios.js'

const UserEdit = () => {
   const { id } = useParams();
   const [user, setUser] = useState({});

   useEffect(() => {

      get(`users/`+id)
      .then((response) => {
         setUser(response);
      })
      .catch((error) => {
            console.log(error);
      });

   }, []);

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      put(`users/`+id, user)
      .then(res => {
         navigate('/users');
      })
      .catch((error) => {
         console.log(error);
      });
   }
   

   return (
      <>
            <div className="grid justify-items-center bg-gray-100">
            <div className=" w-[1000px] mt-8 p-8 rounded-lg">
               <div className="mt-5 md:mt-0 ">
                  
                  <form onSubmit={handleSubmit}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                     <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                           <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                           <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                              value={user.firstName} onChange={e => setUser({...user, firstName: e.target.value})}
                           />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                           <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                           <input type="text" name="last_name" id="last_name" value={user.lastName} autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                           <input type="text" name="email_address" id="email_address" value={user.email} autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6">
                           <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                           <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                           <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                           <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                           <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                           <input type="text" name="postal_code" id="postal_code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        </div>
                     </div>
                     <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                        </button>
                     </div>
                  </div>
                  </form>
               </div>
            </div>
            </div>
         </>
   );
};

export default UserEdit;