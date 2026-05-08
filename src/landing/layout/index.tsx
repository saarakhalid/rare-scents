import { Outlet } from "react-router-dom";
import AppNavbar from "../navbar";
import Footer from "../footer";


// import ViewFooterPage from "./footer/view";



const LandingLayout = () => {
	return (
		<section>
			{/* navbar */}
			<AppNavbar />

			{/* content */}
			<section className="min-h-[50vh]">
				<Outlet />
			</section>

			{/* footer */}

			<Footer />
		</section>
	);
};

export default LandingLayout;