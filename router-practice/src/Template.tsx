import {NavLink, Outlet} from "react-router-dom";
import {TestLinkPath1, TestLinkPath2, TestLinkPath3, WithoutHeaderTo} from "./routes";
import './Template.css';

export default function Template() {
    const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
        return isActive ? 'nav-link active' : 'nav-link';
    };

    return (
        <div className="layout">
            <header className="header">
                <nav className="nav">
                    <NavLink
                        to={TestLinkPath1}
                        className={getLinkClassName}
                    >
                        Link 1
                    </NavLink>

                    <NavLink
                        to={TestLinkPath2}
                        className={getLinkClassName}
                    >
                        Link 2
                    </NavLink>

                    <NavLink
                        to={TestLinkPath3}
                        className={getLinkClassName}
                    >
                        Link 3
                    </NavLink>

                    <NavLink
                        to={WithoutHeaderTo}
                        className={getLinkClassName}
                    >
                        Transfer to without header
                    </NavLink>
                </nav>
            </header>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}
