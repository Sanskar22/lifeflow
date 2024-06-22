import { useState, useEffect } from 'react';
import axios from 'axios';

function BloodGroupCounts() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:5000/blood-group-counts')
      .then(response => {
        setCounts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blood group counts:', error);
        setError('Failed to fetch blood group counts');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 w-5/6 mx-auto">
      {bloodTypes.map((bloodType, index) => (
        <div
          key={index}
          className="bg-primary text-white p-4 rounded-lg text-lg"
        >
          {bloodType}
          <div className="text-sm mt-2">{`${counts[bloodType] || 0} Donors`}</div>
        </div>
      ))}
    </div>
  );
}

export default BloodGroupCounts;
