import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "../ThemeContext/ThemeProvider";
import Toast from "../../components/toast/Toast/Toast";

type ContextProvidersProps = {
  children?: React.ReactNode;
};

export function ContextProviders({
  children,
}: ContextProvidersProps): JSX.Element | null {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toast />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
