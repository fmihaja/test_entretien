import Activity from "./pages/Activity";
import Comfort from "./pages/Comfort";
import Discovery from "./pages/Discovery";
import GMap from "./pages/GMap";
import Home from "./pages/Home";
import Location from "./pages/Location";

function App() {
    return (
        <>
            <Home/>
            <Comfort />
            <Location />
            <GMap />
            <Discovery />
            <Activity />
        </>
    );
}

export default App;
