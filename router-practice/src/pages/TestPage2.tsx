import "../style/TestPages.css";

export default function TestPage2() {
    return (
        <div className="page-container">
            <h1 className="page-title">Test Page 2 Dashboard</h1>
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Users</h3>
                    <div className="stat-value">1,234</div>
                </div>
                <div className="stat-card">
                    <h3>Active Now</h3>
                    <div className="stat-value">56</div>
                </div>
                <div className="stat-card">
                    <h3>Total Revenue</h3>
                    <div className="stat-value">$7,890</div>
                </div>
            </div>
        </div>
    );
}
