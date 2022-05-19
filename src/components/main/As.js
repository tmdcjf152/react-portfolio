import React from 'react'
import asPic1 from '../../src_assets/showroom2.jpeg';

function As() {
    return (
        <section id='As' className='myScroll'>
            <h1>SERVICE CENTER</h1>
            <div className='asBox'>
                <div className='box1'>
                    <img src={asPic1} alt="" />
                </div>
                <div className='box2'>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat saepe, ea quos, ut quia nemo accusamus corporis quibusdam aut hic nisi, illo neque numquam iste illum similique? Tenetur ad natus beatae aspernatur aperiam necessitatibus inventore ex corrupti maiores explicabo.
                    </p>
                    <a href="#">VIEW MORE</a>
                </div>

            </div>

        </section>
    )
}

export default As