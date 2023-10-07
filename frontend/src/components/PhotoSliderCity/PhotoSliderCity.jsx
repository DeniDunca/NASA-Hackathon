import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState, useEffect } from 'react';
import './PhotoSliderCity.css'

const PhotoSliderCity = (props) => {
    const [urlIndex, setUrlIndex] = useState(0);
    const [photoArray, setPhotoArray] = useState([]);
    const [value, setValue] = useState(props.startYear)

    useEffect(() => {
        setPhotoArray(props.photoArray);
    },[])

    const update = (e) => {
        setUrlIndex(photoArray.length - props.endYear + e - 1);
        setValue(e);
    }

    return(
        <div className="photoSlider">
            <img src={props.photoArray[urlIndex]} loading="eager"></img>
            <div className="photoSliderDivDiv">
                <div>
                    {props.startYear}
                </div>
                <Slider min={props.startYear} max={props.endYear} value={value} onChange={update} />
                <div>
                    {props.endYear}
                </div>
            </div>
        </div>
        
    )
}

export default PhotoSliderCity;