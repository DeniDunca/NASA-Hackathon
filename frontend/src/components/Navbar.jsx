export default function Navbar() {
    return (
        <nav className="w-full flex justify-between bg text-xl p-3">
            <div className="font-bold text-2xl cursor-pointer">Everything starts with water</div>
            <ul className="flex gap-2">
                <li><a href="#landing-page">section 1</a></li>
                <li><a href="#">section 2</a></li>
                <li><a href="#">section 3</a></li>
                <li><a href="#">section 4</a></li>
            </ul>
        </nav>
    )
}