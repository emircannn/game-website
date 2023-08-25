import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token && !user) {
        const getUser = async () => {
        try {
            const response = await axios.get(`${process.env.REQUEST}auth/getUser`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
            if(response.data) {
                setUser(response.data);
            }else {
                setUser(null);
                return localStorage.removeItem('authToken');
            }
        } catch (error) {
            console.error('Kullanıcı bilgisi alınamadı:', error);
        }
    };
    getUser();
    }
    if (!token) {
        setUser(null);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
