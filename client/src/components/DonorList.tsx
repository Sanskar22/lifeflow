import { useLocation } from 'react-router-dom';

function DonorList() {
  const location = useLocation();
  const { donors } = location.state || { donors: [] };

  interface Donor {
    name: string;
    phone: string;
    address: string;
  }

  if (donors.length === 0) {
    return (<div>
      <h2>No Donors Found!!</h2>
    </div>)
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-gray-900 text-2xl font-bold mb-6">Donor Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {donors.map((donor: Donor, index: number) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{donor.name}</h3>
            <div className="mb-1">
              <span className="font-medium">Phone: </span>
              {donor.phone}
            </div>
            <div>
              <span className="font-medium">Address: </span>
              {donor.address}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default DonorList;
