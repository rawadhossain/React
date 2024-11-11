import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/neet" element={<Layout />}>
                        <Route
                            path="/neet/physics"
                            element={<h1>Physics</h1>}
                        />
                        <Route
                            path="/neet/chemistry"
                            element={<h1>Chemistry</h1>}
                        />
                        <Route path="/" element={<LandingPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

const Layout = () => {
    // Return the JSX for the layout component
    return (
        <div style={{ height: '100vh' }}>
            {/* Navigation section with links to different routes */}
            <nav style={{ background: 'yellow' }}>
                <Link to="/">Allen</Link> |{' '}
                <Link to="/neet/physics">Class 11</Link> |{' '}
                <Link to="/neet/chemistry">Class 12</Link>
            </nav>

            {/* Main content section with Outlet to render the child routes */}
            <div style={{ height: '80vh', background: 'gray' }}>
                <Outlet />
            </div>

            {/* Footer section with basic information */}
            <footer style={{ background: 'yellow' }}>
                Footer | Contact Us
            </footer>
        </div>
    );
};

const physics = () => {
    return <h1>Physics webpage here</h1>;
};

const chemistry = () => {
    return <h1>Chemistry webpage here</h1>;
};

export default App;
