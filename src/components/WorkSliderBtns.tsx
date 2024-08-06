import React from 'react';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

interface WorkSliderBtnsProps {
    containerStyles: string; // Tailwind CSS classes for the container
    btnStyles: string;       // Tailwind CSS classes for the buttons
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles }) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold  />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold />
            </button>
        </div>
    );
}

export default WorkSliderBtns;
