import React, {useState, useEffect, useRef} from 'react';


/*
OffsetHeight = Height of an element + Scrollbar Height.
ClientHeight = Height of an element.
Height of scrollbar = offsetHeight  – clientHeight.

https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
*/
const CustomScrollBar = ({innerComponent}) => {
    const innerComponentRef = useRef();
    const [clientHeight, setClientHeight] = useState();
    const [scrollHeight, setScrollHeight] = useState();
    const trackRef = useRef();
    const thumbRef = useRef();
    //const resizeObserver = new ResizeObserver(() => null);

    useEffect(() => {}, []);
    return (  
        <div className="custom-scrollbars__container">
            <div className="custom-scrollbars__content" ref={innerComponentRef}>
                {innerComponent}
            </div>
            <div className="custom-scrollbars__scrollbar">
                <button className="custom-scrollbars__button">⇑</button>
                <div style={styles.track_And_Thumb}>
                    <div style={styles.track} ref={trackRef}></div>
                    <div style={styles.thumb} ref={thumbRef}></div>
                </div>
                <button className="custom-scrollbars__button">⇓</button>
            </div>
        </div>
    );
}

export default CustomScrollBar;

const styles = {
    track_And_Thumb: {
        display: "block",
        height: "100%",
        position: "relative",
        width: "16px"
    },
    track: {
        bottom: 0,
        cursor: "pointer",
        position: "absolute",
        top: 0,
        width: "16px" 
    },
    thumb: {
        position: "absolute",
        width: "16px" 
    }
};