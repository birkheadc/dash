import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const withQueryProvider = (Story: any) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  );
};

export default withQueryProvider;
