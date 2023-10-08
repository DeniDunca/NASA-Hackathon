import Drop from "../components/Drop.jsx";
import Bubble from "../components/Bubble.jsx";
import waves from "../assets/waves.svg";
import bubble from "../assets/bubble.svg";
import steam from "../assets/steam.svg";
import sun from "../assets/sun.svg";
import wind from "../assets/wind.svg";
import precipitation from "../assets/rain.svg";
import wata from "../assets/wata.png";
import globPamantesc from "../assets/glob-pamantesc.jpg";
import QuizCity from "../components/QuizCity/QuizCity.jsx";
import {FaPlus} from "react-icons/fa6";
import {Popover} from "react-tiny-popover";
import {useState} from "react";
import PhotoSliderCity from "../components/PhotoSliderCity/PhotoSliderCity.jsx";
import pl from "../assets/output1.json";
import greenhouse from "../assets/greenhouse.gif";
import swot from "../assets/swot.gif";
import Md from "../components/Modal.jsx";
import ReactSliderCity from "../components/ReactSliderCity/ReactSliderCity.jsx";
import before2 from "../assets/images/before2.jpg";
import after2 from "../assets/images/after2.jpg";
import before3 from "../assets/images/before3.jpg";
import after3 from "../assets/images/after3.jpg";
import ReactCompareImage from "react-compare-image";

export default function Index() {
    const [openPopover, setOpenPopover] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOceanModalOpen, setIsOceanModalOpen] = useState(false);


    return (<div className="slides">
        <section id="landing-page"
                 className="section flex justify-between bg-opacity-30 w-screen h-screen px-10 py-16 gap-10">
            <div className="flex flex-col h-full items-center">
                <Drop hasButton={true} popoverProps={{
                    imgUrl: globPamantesc, // title: 'Water fact #1',
                    text: 'Imagine Earth as a grand, watery kingdom. The story of our planet, especially when it comes to life, is written in the deep blue pages of its oceans. Oceans are like the heartbeats of our world, shaping our home planet and making it uniquely habitable'
                }}/>
            </div>
            <div className="flex flex-col h-full items-center justify-center">
                <Drop hasButton={true} popoverProps={{
                    imgUrl: wata,
                    text: 'If Earth were a giant puzzle, oceans would cover most of its pieces. In fact, 71% of Earth\'s surface is covered by oceans. They control Earth\'s weather and drive the water cycle, which waters our lands and fills the air we breathe.'
                }}/>
            </div>
            <div className="flex-grow-1 w-[35vw] max-h-[70vh] flex items-center">
                <Drop className="w-full"
                      text="Embark on an exciting journey to unravel the nature secrets and learn new facts about climate change by clicking on the + icon."/>
            </div>
            <div className="flex flex-col h-full items-center justify-center">
                <Drop hasButton={true} popoverProps={{
                    // title: 'Water fact #3',
                    text: 'Water is Earth\'s precious treasure, and we\'ve got lots of it! There are more than 326 million trillion gallons of water on our planet. The oceans hold about 96.5 percent of this watery wealth. Oceans are like Earth\'s giant reservoirs.\n'
                }}/>
            </div>
            <div className="flex flex-col h-full items-center">
                <Drop hasButton={true} popoverProps={{
                    // title: 'Water fact #4',
                    text: 'Despite the abundance of water, only a tiny fraction - less than 3% - is freshwater. And more than 2/3 of this freshwater is trapped in ice caps and glaciers, making it hard for us to use.\n'
                }}/>
            </div>
        </section>
        <section id="sun"
                 className="section flex flex-col justify-between bg-opacity-30 w-screen h-screen gap-2 overflow-hidden">
            <div className="relative">
                <object data={sun} className="h-[200px] w-full"/>
                <div className="absolute bottom-[50%] right-[48%] bg-gray-12">
                    <Popover
                        content={() => <div
                            className="text-white bg-black p-5 rounded flex h-fit w-[50vw] min-w-[200px]">
                            <span className="text-white max-w-[40%]">Imagine you have a cup of water sitting outside on a sunny day. As the sun shines, the water in the cup starts to disappear slowly. Where does it go? It's actually turning into something called water vapor, which is like an invisible, lighter form of water. This process of water turning into vapor because of heat is called evaporation. It happens not just in cups, but in oceans, rivers, and even puddles when the sun heats them up.</span>
                            <PhotoSliderCity photoArray={pl} startYear={1884} endYear={2022}></PhotoSliderCity>
                        </div>}
                        isOpen={openPopover === 'sun'}
                        onClickOutside={() => setOpenPopover(undefined)}
                        positions={['bottom', 'left', 'top', 'right']}
                        padding={5}
                    >
                        <div onClick={() => setOpenPopover('sun')}>
                            <FaPlus
                                className="text-2xl text-white cursor-pointer hover:rotate-45 transition-all"
                            />
                        </div>
                    </Popover></div>
                <div className="absolute bottom-[30%] left-[30%] bg-gray-12">
                    <Popover
                        content={() => <div
                            className="text-white bg-black p-5 rounded flex h-fit w-[50vw] min-w-[200px] z-[999]">
                            <span className="text-white w-[40%] break-all"><h2 className="text-xl font-bold">Greenhouse effect</h2> Our planet's atmosphere acts like a blanket. It lets sunlight in, which warms the Earth. When we burn fossil fuels like coal and oil for energy, or when we clear land for farms and cities, we release special gases into the air. These gases, such as carbon dioxide (CO2), methane, and others, trap extra heat in our atmosphere. It's like adding an extra layer to our cozy blanket. This extra heat can cause our planet to get too warm, leading to problems like melting ice, rising sea levels, and changes in weather patterns.</span>
                            <img src={greenhouse} className="max-w-[50%]"/>
                        </div>}
                        isOpen={openPopover === 'cloud'}
                        onClickOutside={() => setOpenPopover(undefined)}
                        positions={['right', 'left', 'top', 'bottom']}
                        padding={5}
                    >
                        <div onClick={() => setOpenPopover('cloud')}>
                            <FaPlus
                                className="text-2xl text-white cursor-pointer hover:rotate-45 transition-all"
                            />
                        </div>
                    </Popover></div>

                <div className="absolute bottom-[-55%] left-[48%] bg-gray-12 z-[99]">
                    <FaPlus
                        className="text-2xl text-white cursor-pointer hover:rotate-45 transition-all"
                        onClick={() => setIsModalOpen(true)}
                    />
                    <Md isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <div className="flex">
                            <span className="w-1/3 text-xl font-semibold p-2">Increased evaporation means more water is going up into the atmosphere, potentially leading to drier conditions on land. This can affect the availability of freshwater for us and for plants and animals. Evaporated water eventually comes back down as rain. Climate change can lead to imbalances in the water cycle, causing some places to experience heavy rainfall (leading to floods) while others might face droughts due to reduced rainfall. Changes in evaporation patterns can also affect natural habitats and ecosystems. Plants, animals, and even people who depend on regular rainfall patterns for agriculture might face challenges.</span>
                            <div className="w-2/3">
                                <div>
                                    <h2 className="font-bold">Draught in Spain</h2>
                                    <h2 className="font-bold">May 10, 2022 - May 11, 2023</h2>
                                    <ReactCompareImage leftImage={before2} rightImage={after2} className=""/></div>
                                <br></br>
                                <div>
                                    <h2 className="font-bold">Floods in Greece</h2>
                                    <h2 className="font-bold">Aug 31, 2023 - Sept 8, 2023</h2>
                                    <ReactCompareImage leftImage={before3} rightImage={after3} className=""/>
                                </div>
                            </div>
                        </div>
                    </Md>
                </div>
            </div>
            <div className="">
                <object data={steam} className="h-[200px] w-full"/>
            </div>
            <div className="h-[500px] relative flex justify-center w-full">
                <object data={waves} className="p-0 m-0 border-0 ocean-waves z-[3]"/>
                <div className="h-[165px] bg-[#00beea] w-full absolute bottom-0 "></div>
                <div className="h-[89px] bg-[#76dfff] w-full absolute bottom-0 z-[4]"></div>

            </div>
        </section>
        <section id="sun"
                 className="section flex flex-col justify-between bg-opacity-30 w-screen h-screen gap-2 overflow-hidden relative">
            <div className="h-[800px] relative flex justify-center w-full">
                <object data={waves} className="p-0 m-0 border-0 ocean-waves z-[2]"/>
                <div className="h-[350px] bg-[#00beea] w-full absolute bottom-0 "></div>
                <div className="h-[274px] bg-[#76dfff] w-full absolute bottom-0 z-[4]"></div>
                <div className="absolute bottom-[12%] left-[48%] bg-gray-12 z-[99]">
                    <FaPlus
                        className="text-2xl text-white cursor-pointer hover:rotate-45 transition-all"
                        onClick={() => setIsOceanModalOpen(true)}
                    />
                    <Md isOpen={isOceanModalOpen} onClose={() => setIsOceanModalOpen(false)}>
                        <div className="flex">
                                <span className="w-1/3 text-xl font-semibold p-2">NASA is like a team of super scientists and astronauts who explore space! They have a special mission called SWOT. Now, SWOT is not a superhero, but it stands for something really cool: Surface Water and Ocean Topography.
                                    Think of surface water as all the water you can see, like in rivers, lakes, and oceans. It's the water that's on the surface of the Earth.
                                    Topography means the shape of the land. So, ocean topography is like understanding the bumps and dips at the bottom of the oceans. It's a bit like exploring the hills and valleys, but deep down under the sea!
                                    NASA's mission, SWOT, is like a super space gadget that helps them study water on Earth. It's a satellite (which is like a really fancy space robot) that orbits our planet. From way up high, it can see how much water there is in different places and how the land underwater is shaped.
                                    Imagine you have a big bowl of jelly, and you want to know how wobbly it is in different places. SWOT helps scientists understand how much water is in different parts of the world and how the shape of oceans and rivers change over time. This helps them learn about floods, droughts, and how the Earth is changing because of things like climate change.
                                </span>
                            <div className="w-2/3">
                                <div>
                                    <iframe width="944" height="531" src="https://www.youtube.com/embed/2oKYXKKf28g"
                                            title="Earth’s Water Budget" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>
                                </div>
                                <br></br>
                                <div>
                                    <img src={swot}/>
                                    <span>
                                        Source: NASA/JPL-Caltech <br></br>
                                        Published: January 19, 2022 <br/>
                                        This animation shows the collection of data over the state of Florida, which is rich with rivers, lakes, and wetlands.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Md>
                </div>
            </div>
        </section>
        <section id="wind"
                 className="section flex flex-col justify-between bg-opacity-30 w-screen h-screen gap-10 overflow-hidden">
            <div>
                <object data={wind} className="h-[800px] w-full"/>
            </div>
        </section>
        <section id="precipitation"
                 className="section flex flex-col justify-between bg-opacity-30 w-screen h-screen gap-10 overflow-hidden">
            <div>
                <object data={precipitation} className="h-screen w-full"/>
            </div>
        </section>
        <section id="quiz"
                 className="section flex flex-col justify-between bg-opacity-30 w-screen h-screen gap-10 overflow-hidden">
            <div>
                <QuizCity/>
            </div>
        </section>
    </div>)
}