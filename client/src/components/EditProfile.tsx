import {  useContext, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

function EditProfile () {

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('useContext must be used within a UserContextProvider');
  }
  
  const { user, ready } = userContext;

  // Initialize state with user data after it has been fetched
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [address, setAddress] = useState(user?.address || '');
  const [zipcode, setZipcode] = useState(user?.zipcode || '');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setAddress(user.address);
      setZipcode(user.zipcode);
    }
  }, [user]);

  async function saveChanges(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      address,
      zipcode
    };
    
    try {
     const response =  await axios.put('http://localhost:5000/edit-profile', userData);
      if (response.status === 200) {
        setRedirect(true);
      } else {
        console.error('Error updating profile: Server responded with status', response.status);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }

  if (!ready) {
    return <div>Loading...</div>; 
  }

  if (redirect) {
    return <Navigate to={"/main"} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-red-500 via-purple-600 to-blue-900 text-gray-900">
      <div className="container mx-auto mt-24 mb-12 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-col items-center max-w-lg">
       
        <h1 className="text-4xl mb-6 text-center text-black font-bold">
          Edit Profile
        </h1>
        <form className="w-full" onSubmit={saveChanges}>
          <label
            htmlFor="first-name"
            className="block text-lg font-semibold mb-2"
          >
            First Name:
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label
            htmlFor="last-name"
            className="block text-lg font-semibold mb-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />


          <label htmlFor="address" className="block text-lg font-semibold mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label htmlFor="zipcode" className="block text-lg font-semibold mb-2">
            Zip code:
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />         
          <button type="submit" className="bg-green-400 py-2 mt-6 rounded-md px-4 text-black hover:bg-green-700">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
