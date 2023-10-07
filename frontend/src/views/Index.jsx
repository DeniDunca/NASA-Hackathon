import Drop from "../components/Drop.jsx";

export default function Index() {
    return (
        <div>
            <section id="landing-page" className="flex justify-between bg-blue-400 bg-opacity-30 w-screen translate-y-[-56px] h-screen px-10 py-16">
                <div className="flex flex-col h-full items-center">
                    <Drop hasButton={true}/>
                </div>
                <div className="flex flex-col h-full items-center justify-center">
                    <Drop hasButton={true}/>
                </div>
                <div className="flex-grow-1 w-[30vw] flex items-center">
                    <Drop className="w-full" text="Dive into the fascinating world of water, explore the magic of the water cycle and find out how it is affected by climate change!
    Embark on an exciting journey to unravel the nature secrets and learn new facts about climate change by clicking on the + icon."/>
                </div>
                <div className="flex flex-col h-full items-center justify-center">
                    <Drop hasButton={true}/>
                </div>
                <div className="flex flex-col h-full items-center">
                    <Drop hasButton={true}/>
                </div>
            </section>
        </div>
    )
}