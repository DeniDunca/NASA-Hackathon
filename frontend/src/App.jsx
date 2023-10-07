import Navbar from "./components/Navbar.jsx";
import Index from "./views/Index.jsx";
import Modal from "./components/Modal.jsx";

export default function App() {
    return (
        <main className="bg-blue-100 overflow-hidden min-w-[1500px]">
            <Navbar/>
            <Index/>
            <Modal title="ana are mere"><div>asd</div></Modal>
        </main> 
    )
}