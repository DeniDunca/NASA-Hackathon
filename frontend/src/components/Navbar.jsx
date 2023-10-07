import {Link} from 'react-scroll';

export default function Navbar() {
    return (
        <>
            <nav className="w-full flex justify-between bg text-xl p-3">
                <div className="font-bold text-2xl cursor-pointer">Everything starts with water</div>
                <ul className="flex gap-2">
                    {/*<li><a href="#landing-page">section 1</a></li>*/}
                    {/*<li><a href="#ocean">section 2</a></li>*/}
                    {/*<li><a href="#">section 3</a></li>*/}
                    {/*<li><a href="#">section 4</a></li>*/}
                </ul>
            </nav>
            <ul className="flex flex-col gap-2 fixed right-2 top-52 z-50 translate-y-1/2">
                <Link activeClass="bg-blue-700 opacity-1"
                      to="landing-page"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="rounded-full bg-blue-400 p-5 opacity-80 cursor-pointer"
                  />                
                  <Link activeClass="bg-blue-400 opacity-1"
                      to="ocean"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="rounded-full bg-blue-400 p-5 opacity-80 cursor-pointer"
                      />
            </ul>
        </>
    )
}