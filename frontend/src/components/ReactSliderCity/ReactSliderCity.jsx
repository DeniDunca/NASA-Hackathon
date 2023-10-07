import ReactCompareImage from 'react-compare-image';
import './ReactSliderCity.css'

const ReactSliderCity = (props) => {

    return(
        <div className={props.className || '' }>
            <ReactCompareImage leftImage={ props.leftImage } rightImage={ props.rightImage }/>
        </div>
    )
}

export default ReactSliderCity;