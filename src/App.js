import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./routes/route/route";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="max-w-screen-xl mx-auto font-serif overflow-hidden app">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route}></RouterProvider>
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
