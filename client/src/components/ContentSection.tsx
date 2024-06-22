import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function ContentSection() {

  const user = useContext(UserContext)
  const value = user?.user

  function handleClick() {
    if (user?.user === null) {
      return <Navigate to={'/sign-in'} />
    }
  }




  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
        Welcome to LifeFlow
      </h1>
      <p className="text-lg mb-8 text-center text-gray-700">
        LifeFlow is a blood donation platform that connects donors with recipients
        in need of blood. Saving lives is easy with LifeFlow!
      </p>

      {/* Make "For Donors" and "For Recipients" sections interactive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out flex flex-col items-center"
          onClick={() => { /* Handle click event for "For Donors" section */ }}
        >
          <h3 className="text-xl font-bold mb-4 text-primary">For Donors</h3>
          <p className="text-lg mb-6 text-center text-gray-700">
            Are you ready to be a hero? Provide information about your
            blood type and availability. Find blood drives near you and connect
            with recipients in need.
          </p>
          {value !== null && (
            <Link
              to="/donate"
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Become a Donor
            </Link>
          )}

          {value === null && (
            <Link to="/sign-in" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
              Become a Donor
            </Link>
          )}
        </div>
        <div
          className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out flex flex-col items-center"
          onClick={() => { /* Handle click event for "For Recipients" section */ }}
        >
          <h3 className="text-xl font-bold mb-4 text-primary">For Recipients</h3>
          <p className="text-lg mb-6 text-center text-gray-700">
            Need blood donations? LifeFlow makes it easy to search for compatible
            donors. Request blood donations and connect with potential lifesavers.
          </p>
          <Link to='/sign-in' className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Find Blood Donors
          </Link>
        </div>
      </div>

      {/* Image section with improved layout and accessibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="flex flex-col items-center">
          <img
            src="blood-landing.webp"
            alt="Blood donation drive happening outdoors"
            className="mb-4 rounded-lg object-cover w-full h-64 md:h-80" // Set a fixed height
          />
          <h3 className="text-xl font-bold mb-3 text-primary">Blood Donation Drives</h3>
          <p className="text-lg text-center text-gray-700">
            We organize blood donation drives to collect blood and support hospitals.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/landing-home.webp"
            alt="Blood type testing equipment in a lab"
            className="mb-4 rounded-lg object-cover w-full h-64 md:h-80" // Set a fixed height
          />
          <h3 className="text-xl font-bold mb-3 text-primary">Blood Type Testing</h3>
          <p className="text-lg text-center text-gray-700">
            We conduct blood type testing to ensure compatibility for safe transfusions.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-3 text-primary">Blood Donation</h3>
            <p className="text-lg text-center text-gray-700">
              We connect donors and recipients, ensuring timely access to blood.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-3 text-primary">Blood Bank</h3>
            <p className="text-lg text-center text-gray-700">
              Our blood bank stores donated blood for emergencies.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-3 text-primary">Blood Type Matching</h3>
            <p className="text-lg text-center text-gray-700">
              We match donors with recipients for safe blood transfusions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;

