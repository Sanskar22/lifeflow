import React, { createContext, useEffect, useState, ReactNode, PropsWithChildren } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

// Define the User type
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dob: Date;
  gender: string;
  address: string;
  zipcode: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  ready: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: PropsWithChildren<UserContextProviderProps>) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/profile')
      .then(({ data }) => {
        setUser(data);
        setReady(true);
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
        setReady(true);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
