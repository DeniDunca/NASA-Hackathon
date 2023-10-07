import drop from "../assets/drop.svg";
import {FaPlus} from "react-icons/fa6";


export default function Index({hasButton = false, buttonAction, className, text}) {

    const onClick = (event) => {
        event.preventDefault();
        if (buttonAction && typeof buttonAction === "function") {
            buttonAction();
        }
    }

    return (
        <div className={"w-full relative select-none" + className || ""}>
            <img src={drop} className="h-full w-full"/>
            {!!text && <div className="text-xl text-white absolute w-[70%] top-1/2 right-1/2 translate-x-1/2 translate-y--1/2 text-center select-none">
                {text}
            </div>}
            {hasButton && <div className="absolute bottom-2 w-full text-center flex justify-center">
                <FaPlus
                    className="text-2xl text-white cursor-pointer hover:rotate-45 transition-all"
                    onClick={onClick}
                />
            </div>}
        </div>
    )
}