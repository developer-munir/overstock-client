import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./routes/route/route";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
   useEffect(() => {
     AOS.init();
     AOS.refresh();
   }, []);
  const queryClient = new QueryClient();
  return (
    <div
      className="max-w-screen-xl mx-auto font-serif overflow-hidden app text-[#03203C] "
      data-theme="light"
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route}></RouterProvider>
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
