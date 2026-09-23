import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, signIn, logout } from './firebase';
import { getUserProfile, createUserProfile } from './db';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  profile: any | null;
  login: () => Promise<any>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        try {
          let userProfile = await getUserProfile(user.uid);
          if (!userProfile) {
            userProfile = {
              email: user.email,
              market: 'US',
              currency: 'USD',
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              automationEnabled: false,
              onboardingComplete: false,
            };
            await createUserProfile(user.uid, userProfile);
          }
          setProfile(userProfile);
        } catch (error) {
          console.error("Failed to load user profile:", error);
          // Fallback to basic profile if DB is failing
          setProfile({ email: user.email, error: true });
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signIn();
      return result;
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogoutAction = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, profile, login: handleLogin, handleLogout: handleLogoutAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
