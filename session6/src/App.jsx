import { useEffect, useState } from 'react';

const UserProfileFetcher = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [refreshTrigger]);

  const handleRefresh = () => {
    setRefreshTrigger(prev => !prev);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>User Profile</h2>

      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: 'red' }}>Failed to fetch user data. Please try again.</p>}

      {userData && !isLoading && !isError && (
        <div>
          <img src={userData.picture.large} alt="User" />
          <h3>{userData.name.first} {userData.name.last}</h3>
          <p>Email: {userData.email}</p>
        </div>
      )}

      <button onClick={handleRefresh} style={{ marginTop: '20px' }}>
        Fetch New User
      </button>
    </div>
  );
};

export default UserProfileFetcher;
