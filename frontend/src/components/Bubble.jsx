import drop from "../assets/drop.svg";
import bubble from "../assets/bubble.svg";
import {FaPlus} from "react-icons/fa6";
import {Popover} from "react-tiny-popover";
import {useState} from "react";

export default function Index({hasButton = false, buttonAction, className, text, popoverProps = {}}) {
    const [isPopoverOpen, setPopoverState] = useState(false);


    const onClick = (event) => {
        event.preventDefault();
        setPopoverState(true);
        if (buttonAction && typeof buttonAction === "function") {
            buttonAction();
        }
    }

    const popoverContent = hasButton &&
        <div className='max-w-[80vw] text-xl bg-gray-800 opacity-90 rounded px-10 py-5 text-white flex gap-2 z-[99!important]'>
            {popoverProps?.imgUrl && <img className="max-w-[40%]" src={popoverProps.imgUrl}/>}
            <div>
                <h2 className="font-bold text-2xl">{popoverProps?.title}
                </h2>
                <div className="">{popoverProps?.text}</div>
            </div>
        </div>
    ;

    return (
        <div className={"select-none h-[30px] w-[30px] " + className || ""}>
             <object data={bubble} className="h-[30px] w-[30px]"/>
            {/*{!!text && <div*/}
            {/*    className="text-xl text-white absolute w-[50%] top-1/2 right-1/2 translate-x-1/2 translate-y-[-50px] text-center select-none">*/}
            {/*    {text}*/}
            {/*</div>}*/}
            {hasButton && <div className="-translate-y-6 w-full text-center flex justify-center">
                <Popover
                    content={() => popoverContent}
                    isOpen={isPopoverOpen}
                    onClickOutside={() => setPopoverState(false)}
                    positions={['right', 'left', 'top', 'bottom']}
                    padding={5}
                >
                    <div onClick={onClick}>
                        <FaPlus
                            className="text-2xl text-white cursor-pointer hover:rotate-45 transition-all"
                        />
                    </div>
                </Popover>
            </div>}
        </div>
    )
}