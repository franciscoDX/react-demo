import { Outlet, Link } from "react-router-dom";
import { HomeLogoIcon } from "../../components/icons";

const Layout = () => {
    return (
        <>
            <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="text-indigo-500 md:order-1">
                        <HomeLogoIcon />
                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">
                            <li className="md:px-4 md:py-2 text-indigo-500"><Link to="/">Dashboard</Link></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/users">Users</Link></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><Link to="/">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
