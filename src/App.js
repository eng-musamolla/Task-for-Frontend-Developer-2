import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Column from "./components/Column";
import "./App.css";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  // Use react-query's useQuery to fetch data
  const {
    data = [],
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["data"], // Add a query key
    queryFn: async () => {
      const response = await fetch("https://bt.musamolla.com/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    },
  });

  // Loading state
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  // Error state
  if (error) {
    return <div className="error">Error fetching data: {error.message}</div>;
  }

  // Render the data using the Column component
  return (
    <div className="app">
      <div className="columns-container">
        {data?.map((item, index) => (
          <React.Fragment key={index}>
            <Column refetch={refetch} item={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// Wrap your App with QueryClientProvider
export default function RootApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
