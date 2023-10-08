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

export default function Index() {
    const [openPopover, setOpenPopover] = useState('');

    return (
        <div className="slides">
            <section id="landing-page"
                     className="section flex justify-between bg-opacity-30 w-screen h-screen px-10 py-16 gap-10">
                <div className="flex flex-col h-full items-center">
                    <Drop hasButton={true} popoverProps={{
                        imgUrl: globPamantesc,
                        // title: 'Water fact #1',
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
                    <Drop className="w-full" text="Dive into the fascinating world of water, explore the magic of the water cycle and find out how it is affected by climate change!
    Embark on an exciting journey to unravel the nature secrets and learn new facts about climate change by clicking on the + icon."/>
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
                            content={() => <div className="text-white bg-black p-5 rounded flex h-fit w-[50vw] min-w-[200px]">
                                <span className="text-white max-w-[40%]">Imagine you have a cup of water sitting outside on a sunny day. As the sun shines, the water in the cup starts to disappear slowly. Where does it go? It's actually turning into something called water vapor, which is like an invisible, lighter form of water. This process of water turning into vapor because of heat is called evaporation. It happens not just in cups, but in oceans, rivers, and even puddles when the sun heats them up.</span>
                                <PhotoSliderCity photoArray={pl} startYear={1884} endYear={2022}></PhotoSliderCity>
                            </div>}
                            isOpen={openPopover === 'sun'}
                            onClickOutside={() => setOpenPopover('')}
                            positions={['bottom', 'left', 'top', 'right']}
                            padding={5}
                        >
                            <div onClick={() => setOpenPopover('sun')}>
                                <FaPlus
                                    className="text-2xl text-white cursor-pointer hover:rotate-45 transition-all"
                                />
                            </div>
                        </Popover></div>
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
                    <Bubble hasButton={true} className="absolute z-20 bottom-4"></Bubble>
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
        </div>
    )
}