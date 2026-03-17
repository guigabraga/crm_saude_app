import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { GlobalProvider } from "./contexts/GlobalContext.tsx";
import App from "./App.tsx";
import "./index.css";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <AuthProvider>
      <QueryClientProvider
        client={client}
      >
        <App />
      </QueryClientProvider>
    </AuthProvider>
  </GlobalProvider>
);
