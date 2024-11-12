import "../style/TestPages.css";
import {Link} from "react-router-dom";
import {PathNames} from "../routes";

export default function TestPage1() {
    return (
        <div className="page-container">
            <h1 className="page-title">Welcome to Test Page 1</h1>
            <div className="content-card">
                <h2 className="card-title">Main Features</h2>
                <div className="feature-grid">
                    <div className="feature-item">
                        <Link to={`/${PathNames.WithoutHeader}/${PathNames.Info}`}>
                            <h3>Transfer to additional info</h3>
                        </Link>
                    </div>
                    <div className="feature-item">
                        <Link to="teasdfasdf/ewewr">
                            <h3> Transfer to not found page </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}