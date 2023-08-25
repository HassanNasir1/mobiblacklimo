import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Root,
  Home,
  VehicleGrid,
  VehicleView,
  NotFound,
  Features,
  TailwindFaqs,
} from "./routes";
import "./main.css";
import WhatsAppIcon from "./components/WhatsappIconComponent";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/vehicles",
          element: <VehicleGrid />,
        },
        {
          path: "/vehicles/:slug",
          element: <VehicleView />,
        },
        {
          path: "/features",
          element: <Features />,
        },
        {
          path: "/faqs",
          element: <TailwindFaqs />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="min-h-screen">
        {/* Your app content */}
        <WhatsAppIcon />
      </div>
    </RouterProvider>
  );
}

export default App;
