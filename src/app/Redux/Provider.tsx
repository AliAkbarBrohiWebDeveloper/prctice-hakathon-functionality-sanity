


'use client'

import { Provider } from 'react-redux';
import { store, persistor } from "@/app/Redux/store";  // Import persistor from your store file
import { PersistGate } from 'redux-persist/integration/react';  // Import PersistGate

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;









