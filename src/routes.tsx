// import LandingLayout from "@layouts/landing";
import { useRoutes } from "react-router-dom";
import LandingLayout from "./landing/layout";

import ViewPage from "./pages/HOME/view";
import About from "./pages/about";

// import ViewPage from "./pages/herosection/view";

// import MissionVision from "./pages/mission";

// import AboutPage from "./pages/About";
// import GeneralInquiry from "./pages/contact";



// import Home from "@pages/home";

const Router = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <LandingLayout />,
			children: [
				 { index: true, element: <ViewPage /> },
				{ path: "about-us", element: <About /> },
				// { path: "mission & vision", element: < MissionVision/> },
				// { path: "contact-us", element: < GeneralInquiry/> },


				

				
			],
		},
		// Wildcard route for 404 Not Found
		// { path: "*", element: <NotFoundPage /> },
	]);

	return routes;
};

export default Router;
