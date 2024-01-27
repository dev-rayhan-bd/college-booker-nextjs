"use client";



import AuthProvider from "./AuthProviders";
import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>

      {children}
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;