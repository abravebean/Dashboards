import './App.css'
import DashBoard from './components/DashBoard'
import Visitors from "./components/Visitors"
import Ratings from "./components/Ratings"
import Sentiment from "./components/Sentiment"
import Reviews from "./components/Reviews"
export default function App() {
  return (
    <div className="container">
    <DashBoard />
    <Visitors />
    <Ratings/>
    <Reviews/>
    <Sentiment/>
 
    </div>
  );
}


