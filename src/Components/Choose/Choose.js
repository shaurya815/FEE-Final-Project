import React from 'react'
import './Choose.css'
import sub_title_3 from '../../images/sub_title_3.png';
import bread from '../../images/bread.png';
import place_your_image_here_dou from '../../images/place_your_image_here_dou.png';
import place_your_image_here_dou_2 from '../../images/place_your_image_here_dou_2.png';

function Choose() {
  return (
    <div className='choose-Main'>
        <div className='Choose-Title'>
            <img className='title-image' src={sub_title_3} alt="" />
        </div>
        <div className='Choose-discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
        <div className='Boxes-choose'>
        <div className='Single-box-choose'>
                <img className='bread-image' src={place_your_image_here_dou} alt="" />
                <div className='Title-choose'>LOREM IPSUM DOLOR</div>
                <div className='discription-choose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</div>
                <div className='Order-choose'>Order Now</div>
            </div>
            <div className='Single-box-choose'>
                <img className='bread-image' src={bread} alt="" />
                <div className='Title-choose'>LOREM IPSUM DOLOR</div>
                <div className='discription-choose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</div>
                <div className='Order-choose'>Order Now</div>
            </div>
            <div className='Single-box-choose'>
                <img className='bread-image' src={place_your_image_here_dou_2} alt="" />
                <div className='Title-choose'>LOREM IPSUM DOLOR</div>
                <div className='discription-choose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</div>
                <div className='Order-choose'>Order Now</div>
            </div>
        </div>
    </div>
  )
}

export default Choose