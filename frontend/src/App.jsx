import Navbar from "./components/Navbar.jsx";
import Index from "./views/Index.jsx";
import Modal from "./components/Modal.jsx";
import CaraouselCity from "./components/CarouselCity/CarouselCity.jsx";

import after1 from "./assets/images/after1.png"
import before1 from "./assets/images/before1.png"

const images = [after1, before1]
const texts = ["Descriere 1", "Descriere 2"]

export default function App() {
    
    return (
        <main className="bg-blue-100 overflow-hidden min-w-[1500px]">
            <Navbar/>
            <Index/>
            <Modal title="ana are mere"><div>asd</div></Modal>
        </main> 
    )
}