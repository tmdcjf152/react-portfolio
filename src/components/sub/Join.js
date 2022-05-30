import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function Join() {
	const history = useHistory();

	const initVal = {
		name: '',
		tel: '',
		email: '',
		comments: '',
		gender: null,
		center: '',
		purchase: ''
	};

	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const check = (val) => {
		const errs = {};

		if (val.name.length < 5) {
			errs.name = 'Please write your name';
		}
		if (val.email.length < 8 || !/@/.test(val.email)) {
			errs.email = 'Please write an email including @';
		}
		if (val.tel < 11) {
			errs.tel = 'Please enter your cell phone numbe';
		}
		if (!val.gender) {
			errs.gender = 'Please select a gende';
		}
		if (!val.purchase) {
			errs.purchase = 'Please select a purchase plan';
		}
		if (!val.center) {
			errs.center = 'Please select an exhibition hall to experience';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...val, [name]: isCheck });
	};

	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.options[e.target.selectedIndex].value;
		setVal({ ...val, [name]: isSelected });
	};

	const handleReset = () => {
		setVal(initVal);
		setErr({});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	useEffect(() => {
		const len = Object.keys(err).length;
		if (len === 0 && isSubmit) {

			history.push('/');
		}
	}, [err]);

	return (
		<Layout name={'Join'}>
			{/* 시승차량선택 */}
			<div class="stepBox">


				<h1 class="campaignTitle">MINI test drive application</h1>
				<div class="stepTitle"><p>This application will be a test drive and vehicle introduction program that will allow you to check MINI's performance/design/ride prior to your vehicle purchase and will contact you for reservations from your sales representative or showroom. (Program within 30 minutes)</p></div>
				<h2 className="selectCar">
				Please select a car to experience
				</h2>


			</div>
			<ul className="carCategory">
				<li>
					<div className="categoryNameMINI" >MINI</div>
					<div className="categoryName">3 DOOR</div>
				</li>
				<li>
					<div className="categoryNameMINI">MINI</div>
					<div className="categoryName">5 DOOR</div>
				</li>
				<li>
					<div className="categoryNameMINI">MINI</div>
					<div className="categoryName">CONVERTIBLE</div>
				</li>
				<li>
					<div className="categoryNameMINI">MINI</div>
					<div className="categoryName">CLUBMAN</div>
				</li>
				<li>
					<div className="categoryNameMINI">MINI</div>
					<div className="categoryName">COUNTRYMAN</div>
				</li>
				<li>
					<div className="categoryNameMINI">MINI</div>
					<div className="categoryName">JCW</div>
				</li>
				<li>
					<div className="categoryNameMINI">MINI</div>
					<div className="categoryName">ELECTRIC</div>
				</li>
			</ul>

			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Apply for a test drive</legend>
<div className="showBox">
						<div className='tableBox'>
							<table>
								<caption></caption>
								<tbody>
									{/* NAME */}
									<tr>
										<th scope='row'>
											<label htmlFor='userid'>NAME</label>
										</th>
										<td>
											<input
												type='text'
												id='name'
												name='name'
												placeholder='Please enter your name'
												value={val.name}
												onChange={handleChange}
											/>
											<span className='err'>{err.name}</span>
										</td>
									</tr>
									{/* TEL */}
									<tr>
										<th scope='row'>
											<label htmlFor='tel'>TEL</label>
										</th>
										<td>
											<input
												type='tel'
												id='tel'
												name='tel'
												placeholder='Enter your cell phone number'
												value={val.tel}
												onChange={handleChange}
											/>
											<span className='err'>{err.tel}</span>
										</td>
									</tr>
							
							
									{/* email */}
									<tr>
										<th scope='row'>
											<label htmlFor='email'>E-MAIL</label>
										</th>
										<td>
											<input
												type='text'
												id='email'
												name='email'
												placeholder='Please enter an email'
												value={val.email}
												onChange={handleChange}
											/>
											<span className='err'>{err.email}</span>
										</td>
									</tr>
							
									{/* gender */}
									<tr>
										<th>
											<label htmlFor='gender'>Gender</label>
										</th>
										<td>
											<select name='gender' id='gender' onChange={handleSelect}>
												<option value=''>--Please choose--</option>
												<option value='male'>Male</option>
												<option value='female'>Female</option>
							
											</select>
											<span className='err'>{err.gender}</span>
										</td>
									</tr>
							
									{/* purchase */}
									<tr>
										<th>
											<label htmlFor='purchase'>Intent to purchase</label>
										</th>
										<td>
											<select name='purchase' id='purchase' onChange={handleSelect}>
												<option value=''>--Please choose--</option>
												<option value='Within 3 months'>Within 3 months</option>
												<option value='Within 6 months'>Within 6 months</option>
												<option value='within a year'>within a year</option>
												<option value='after a year'>after a year</option>
												<option value='No Purchase Plan'>No Purchase Plan</option>
							
											</select>
											<span className='err'>{err.purchase}</span>
										</td>
									</tr>
							
									{/* Center */}
									<tr>
										<th>
											<label htmlFor='center'>Experience Center</label>
										</th>
										<td>
											<select name='center' id='center' onChange={handleSelect}>
												<option value=''>--Select Showroom--</option>
												<option value='Barbarian Motors Ilsan'>Barbarian Motors Ilsan</option>
												<option value='Barbarian Motors Mokdong'>Barbarian Motors Mokdong</option>
												<option value='Barbarian Motors Gyeyang'>Barbarian Motors Gyeyang</option>
												<option value='Kolon Motors seocho'>Kolon Motors seocho</option>
												<option value='Kolon Motors Bucheon'>Kolon Motors Bucheon</option>
												<option value='Kolon Motors Samsung'>Kolon Motors Samsung</option>
												<option value='Deutsche Motors Gangnam'>Deutsche Motors Gangnam</option>
												<option value='Deutsche Motors Yongsan'>Deutsche Motors Yongsan</option>
												<option value='Deutsche Motors Bundang'>Deutsche Motors Bundang</option>
											</select>
											<span className='err'>{err.center}</span>
										</td>
									</tr>
							
							
							
									{/* button set */}
									<tr className="btn">
										<th colSpan='2'>
											<input type='reset' value='CANCEL' onClick={handleReset} />
											<input
												type='submit'
												value='SEND'
												onClick={() => setIsSubmit(true)}
											/>
										</th>
									</tr>
								</tbody>
							</table>
						</div>
													{/* 약관동의 */}
													<div className="agree">
									<div class="fieldGroup"><span>Consent to use personal information</span></div>
									<div class="fieldGroupDescription">
										&lt;Act on Promotion of Information and Communication Network Utilization and Information Protection, etc&gt;, &lt;Personal Information Protection Act&gt; We will inform you of the items of personal information collected from customers, the purpose of collecting and using personal information, and the period of retention and use of personal information, so please read it in detail and agree.
									</div>
									<div class="agreement">
										<div class="agreementItem row">
											<div class="th">
												<label class="miniCheckboxWrap"><input type="checkbox" name="agreementRequire" value="Y" />
													<span>Consent to collect and use personal information <span class="gray">(Essential)</span></span></label>
											</div>
										</div>
										<div class="agreementItem row">
											<div class="th">
												<label class="miniCheckboxWrap"><input type="checkbox" name="agreementOption" value="Y" data-popup="layerPopupAgreementOption" /><span>Consent to use personal information marketing <span class="gray">(Option)</span></span></label>
											</div>
										</div>
									</div>
								</div>
</div>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Join;
