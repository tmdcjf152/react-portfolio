import React from 'react'
import asPic1 from '../../src_assets/AS.jpg';
import asPic2 from '../../src_assets/AS1.jpg';
import asPic3 from '../../src_assets/AS2.jpg';
function As() {
    return (
        <section id='As' className='myScroll'>            <h1>Service Center</h1>
            <section className="centerBox">
                <article className='center'>
                    <img src={asPic1} alt="" />
                    <p className='PicsTitle'>MINI SERVICE INCLUSIVE.</p>
                    <p className='PicsText'>The MINI service enclosure prevents unexpected maintenance costs. <br/>Once you pay the fee, repair and maintenance will be supported for 3 or 5 years. Now feel free to walk around the road.
                    </p>
                    <a href="#">Read more </a>
                </article>
                <article className='center'>
                    <img src={asPic2} alt="" />
                    <p className='PicsTitle'>MINI ORIGINAL PARTS.</p>
                    <p className='PicsText'>For complete work, MINI always uses original parts only. In order to provide the right parts for the MINI, the original parts are manufactured according to strict quality standards, and a two-year warranty is also provided. Maintain the value of MINI by keeping it truly pure
                        
                    </p><a href="#">Read more</a>
                </article>
                <article className='center'>
                    <img src={asPic3} alt="" />
                    <p className='PicsTitle'>READY, STEADY, MINI.</p>
                    <p className='PicsText'>Do you want a quick repair? If so, use Fastlane service. Leave your car and relax in a comfortable lounge during maintenance. Our skilled technicians will change the oil, replace the brake pads and tires, and even complete a complete vehicle inspection in a short period of time.
                     
                    </p>   <a href="#">Read more</a>
                </article>

            </section>
        </section>
    )
}

export default As