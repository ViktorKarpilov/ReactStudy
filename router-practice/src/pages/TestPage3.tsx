import "../style/TestPages.css";

export default function TestPage3() {
    return (
        <div className="page-container">
            <h1 className="page-title">Test Page 3 Overview</h1>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-date">Today</div>
                    <div className="timeline-content">
                        <h3>Latest Update</h3>
                        <p>New features have been added to the platform.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-date">Yesterday</div>
                    <div className="timeline-content">
                        <h3>Maintenance</h3>
                        <p>System maintenance was performed successfully.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
