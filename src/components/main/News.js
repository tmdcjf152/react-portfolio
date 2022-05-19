import React from 'react'
import countryMan from '../../src_assets/car4.webp'
import clubMan from '../../src_assets/car3.webp'
import mini5Door from '../../src_assets/car1.webp'

function News() {


	return (
		<>
			<section id='news' className='myScroll'>
				<h1>BEST <span className="underline">MINI</span> MODELS </h1>
				<section id='newsBox'>
					<article className='textBox1'>

						<h2>TAKE A JOURNEYBEND SPACE </h2>
						<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maiores expedita excepturi exercitationem laboriosam culpa similique esse recusandae aperiam dolor distinctio eveniet voluptatem, eligendi facilis inventore sit enim 
						</span>
			
					</article>
					<article className='textBox2'>
						<a href="http://localhost:3000/react-portfolio#/gallery">VIEW MORE </a>
					</article>

					<article className='textBox3'>
						<h2>1. COUNTRYMAN</h2>
						<span>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, cupiditate?
						</span>
						<img src={countryMan} alt="" />
					</article>

					<article className='textBox4'>

						<h2>2. CLUBMAN</h2>
						<span>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, cupiditate?
						</span>
						<img src={clubMan} alt="" />
					</article>

					<article className='textBox5'>
						<h2>3. MINI 5-DOOR</h2>
						<span>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, cupiditate?
						</span>
						<img src={mini5Door} alt="" />
					</article>

				</section>
			</section>

		</>
	);
}
export default News;