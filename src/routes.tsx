import { useRoutes } from "react-router-dom";
import LandingLayout from "./landing/layout";
import ViewPage from "./pages/HOME/view";
import NewIn from "./pages/product/newin/new";
import View from "./pages/product/newin/view";


const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <LandingLayout />,
      children: [
        // HOMEPAGE
        {
          index: true,
          element: <ViewPage />,
        },

        // ONLY PAGE WITH PATH
        {
          
          element: <NewIn />,
        },
        {
          path: "view",
          element: <View />,
        }
      ],
    },

    // NOT FOUND
  
  ]);

  return routes;
};

export default Router;