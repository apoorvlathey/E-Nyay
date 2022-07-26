import React, { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";

export const Web3Context = createContext({
  web3: undefined,
});

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState();

  const getWeb3 = async () => {
    if (window.ethereum) {
      const _web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Accounts now exposed
        setWeb3(_web3);
      } catch (error) {
        console.error(error);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use MetaMask/Mist's provider.
      const _web3 = window.web3;
      console.log("Injected web3 detected.");
      setWeb3(_web3);
    }
  };

  useEffect(() => {
    getWeb3();
  }, []);

  return (
    <Web3Context.Provider value={{
      web3
    }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
