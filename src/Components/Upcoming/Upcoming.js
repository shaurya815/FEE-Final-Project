import React from 'react'
import './Upcoming.css'
import sub_title_2 from '../../images/sub_title_2.png';
import image_5 from '../../images/image_5.jpg';
import image_6 from '../../images/image_6.jpg';
import image_4 from '../../images/image_4.jpg';
import image from '../../images/image.jpg';
import image_2 from '../../images/image_2.jpg';
import image_3 from '../../images/image_3.jpg';
function Upcoming() {
    return (
        <div className='Upcoming-main'>
            <div className='discover-upcoming'>DISCOVER</div>
            <div className='Choose-Title'>
                <img className='upcoming_image' src={sub_title_2} alt="" />
            </div>
            <div className='Choose-discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
            <div className='upcoming-images'>
                <img className='images-center' src={image_4}></img>
                <img className='images-center' src={image_6}></img>
                <img className='images-center' src={image_5}></img>
            </div>

            <div className='upcoming-images-2'>
                <div className='try'>
                    <div className='try-text'>
                        TRY IT TODAY <br></br>
                        MOST<br></br>
                        POPULAR<br></br>
                        PASTA<br></br>
                    </div>
                    <div style={{ background: "red", width: "50%" }}></div>
                </div>
                <div className='upcoming-images-3 none'>
                    <div className='try image'>
                        <div className='try-text-image'>
                            TRY IT TODAY<br></br>
                            MORE FUN<br></br>
                            MORE TASTE
                        </div>
                        <div style={{ background: "red", width: "50%" }}></div>
                    </div>
                    <div className='try image image2'>
                        <div className='try-text-image'>
                            TRY IT TODAY <br></br>
                            FRESH & CHILI
                        </div>
                        <div style={{ background: "red", width: "50%" }}></div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Upcoming