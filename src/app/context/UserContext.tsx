import { createContext, useContext, useState, ReactNode } from 'react';

interface Transaction {
  id: string;
  plan: string;
  amount: number;
  credits: number;
  date: string;
  status: 'success' | 'pending' | 'failed';
}

interface UserContextType {
  credits: number;
  addCredits: (amount: number) => void;
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [credits, setCredits] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addCredits = (amount: number) => {
    setCredits((prev) => prev + amount);
  };

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  };

  return (
    <UserContext.Provider value={{ credits, addCredits, transactions, addTransaction }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}
