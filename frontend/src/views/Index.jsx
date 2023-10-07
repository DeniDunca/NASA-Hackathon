import Drop from "../components/Drop.jsx";
import Bubble from "../components/Bubble.jsx";
import waves from "../assets/waves.svg";
import bubble from "../assets/bubble.svg";
import steam from "../assets/steam.svg";
import sun from "../assets/sun.svg";

export default function Index() {


    return (
        <div>
            <section id="landing-page"
                     className="flex justify-between bg-opacity-30 w-screen h-screen px-10 py-16 gap-10">
                <div className="flex flex-col h-full items-center">
                    <Drop hasButton={true} popoverProps={{
                        imgUrl: waves,
                        title: 'Water fact #1',
                        text: 'Imagine Earth as a grand, watery kingdom. The story of our planet, especially when it comes to life, is written in the deep blue pages of its oceans. Oceans are like the heartbeats of our world, shaping our home planet and making it uniquely habitable'
                    }}/>
                </div>
                <div className="flex flex-col h-full items-center justify-center">
                    <Drop hasButton={true} popoverProps={{
                        title: 'Water fact #2',
                        text: 'If Earth were a giant puzzle, oceans would cover most of its pieces. In fact, 71% of Earth\'s surface is covered by oceans. They control Earth\'s weather and drive the water cycle, which waters our lands and fills the air we breathe.'
                    }}/>
                </div>
                <div className="flex-grow-1 w-[40vw] flex items-center">
                    <Drop className="w-full" text="Dive into the fascinating world of water, explore the magic of the water cycle and find out how it is affected by climate change!
    Embark on an exciting journey to unravel the nature secrets and learn new facts about climate change by clicking on the + icon."/>
                </div>
                <div className="flex flex-col h-full items-center justify-center">
                    <Drop hasButton={true} popoverProps={{
                        title: 'Water fact #3',
                        text: 'Water is Earth\'s precious treasure, and we\'ve got lots of it! There are more than 326 million trillion gallons of water on our planet. The oceans hold about 96.5 percent of this watery wealth. Oceans are like Earth\'s giant reservoirs.\n'
                    }}/>
                </div>
                <div className="flex flex-col h-full items-center">
                    <Drop hasButton={true} popoverProps={{
                        title: 'Water fact #4',
                        text: 'Despite the abundance of water, only a tiny fraction - less than 3% - is freshwater. And more than 2/3 of this freshwater is trapped in ice caps and glaciers, making it hard for us to use.\n'
                    }}/>
                </div>
            </section>
            <section id="ocean"
                     className="flex flex-col justify-between bg-opacity-30 w-screen h-screen gap-10 overflow-hidden">
                <div>
                    <object data={sun} className="h-[200px] w-full"/>
                </div>
                <div className="">
                    <object data={steam} className="h-[200px] w-full"/>
                </div>
                <div className="h-[500px] relative flex justify-center w-full">
                    <object data={waves} className="p-0 m-0 border-0 ocean-waves z-[21]"/>
                    <div className="h-[160px] bg-[#76dfff] w-full absolute bottom-0 z-20"></div>
                    <div className="h-[235px] bg-[#00beea] w-full absolute bottom-0"></div>
                    <Bubble data={bubble} className="absolute p-0 m-0 border-0 bottom-3 text-sm w-[30px] bubble z-30"
                            hasButton={true}/>
                    <Bubble data={bubble}
                            className="absolute p-0 m-0 border-0 bottom-8 right-10 text-sm w-[30px] bubble z-30"
                            hasButton={true}/>
                    <Bubble data={bubble}
                            className="absolute p-0 m-0 border-0 bottom-12 left-32 text-sm w-[30px] bubble z-30"
                            hasButton={true}/>
                    <Bubble data={bubble}
                            className="absolute p-0 m-0 border-0 bottom-32 right-52 text-sm w-[30px] bubble z-30"
                            hasButton={true}/>
                    <Bubble className="absolute p-0 m-0 border-0 bottom-36 right-36 text-sm w-[30px] bubble z-30"
                            hasButton={true}/>
                </div>
            </section>
        </div>
    )
}