import React from "react";
import Grid from '@material-ui/core/Grid';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import logo from "../logo.png";
import phone from "../phone.png";
import user from "../user.png";
function Mainpage(){
	const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
return (
<div>
	<header>
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand">
					<img src={logo} />
				</a>
				<a className="" href="#">
					<img src={user} alt="" className="user-image-mobile" />
				</a>
				
				<div className="navbar-collapse" id="">
					<div className="col-12 text-center menu"><a href="#" className="menu_a">মেনু</a>  <a href="#">এইটা কোথায়?</a>  <a href="#">রিওয়ার্ড প্রোগ্রাম</a>   <a href="#about">ফিডব্যাক</a>
				</div>
				
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="#">
							<img src={user} alt="" className="user-image" />
						</a>
					</li>
				</ul>
			</div>
			<div className="mobile_menu" id="navbarSupportedContent">
				<div className="col-12 text-center menu py-4">
			</div>
		</div>
	</nav>
</div>
</header>
<hr />
<section className="pickup py-3">
<div className="container">
	<Grid container spacing={3}>
		<Grid item xs={12}>
			<h1 className=" text-center font-weight-bold">পিকআপ সেন্টার</h1>
		</Grid>
	</Grid>
</div>
</section>
<hr/>
<section className="pickup-content mb-5">
<div className="container">
	<div className="row">
		<div className="col-md-5">
			<div className="left-side">
<div className="card">
	<div className="card-body">
		<h5 className="h2 card-title text-center font-weight-bold  custom-line-height pb-3">মিরপুর কমার্স কলেজ এক্সপ্রেস আউটলেট</h5>
		<p className="h4 card-text text-center pb-3"> কমার্স কলেজ রোড, কমার্স কলেজ এর বিপরীতে</p>
		<p className="h5 text-muted text-center pb-3">এখন খোলা রাত ৯:৩০ প্রজ্জন্থ খোলা থাকবে</p>
		<a href="#" className="card-link mt-2"><u>ম্যাপ এর লিংক </u></a>
		<a href="#" className="card-link float-right" >
		<img src={phone}  className="px-1" alt="" /><u>01706908611</u></a>
		
		<div className="clearfix"></div>
		<br/>
		<p className="text-center"><a href="#" className="btn btn-lg  text-center custom-btn">অর্ডার করুন</a></p>
	</div>
</div>

					<div className="card">
				<div className="card-body">
					<h5 className="h2 card-title text-center font-weight-bold  custom-line-height pb-3">মিরপুর কমার্স কলেজ এক্সপ্রেস আউটলেট</h5>
					<p className="h4 card-text text-center pb-3"> কমার্স কলেজ রোড, কমার্স কলেজ এর বিপরীতে</p>
					<p className="h5 text-center pb-3 text-danger">এখন খোলা রাত ৯:৩০ প্রজ্জন্থ খোলা থাকবে</p>
					<a href="#" className="card-link mt-2"><u>ম্যাপ এর লিংক </u></a>
					<a href="#" className="card-link float-right" >
					<img src={phone}  className="px-1" alt="" /><u>01706908611</u></a>
					
					<div className="clearfix"></div>
						<br/>
						<p className="text-center"><a href="#" className="btn btn-lg  text-center custom-btn">অর্ডার করুন</a></p>
					</div>
					</div>
<div className="card">
				<div className="card-body">
					<h5 className="h2 card-title text-center font-weight-bold  custom-line-height pb-3">মিরপুর কমার্স কলেজ এক্সপ্রেস আউটলেট</h5>
					<p className="h4 card-text text-center pb-3"> কমার্স কলেজ রোড, কমার্স কলেজ এর বিপরীতে</p>
					<p className="h5 text-muted text-center pb-3">এখন খোলা রাত ৯:৩০ প্রজ্জন্থ খোলা থাকবে</p>
					<a href="#" className="card-link mt-2"><u>ম্যাপ এর লিংক </u></a>
					<a href="#" className="card-link float-right" >
					<img src={phone}  className="px-1" alt="" /> <u> 01706908611</u></a>
					
					<div className="clearfix"></div>
						<br/>
						<p className="text-center"><a href="#" className="btn btn-lg  text-center custom-btn">অর্ডার করুন</a></p>
					</div>
					</div>

				</div>
			</div>
		
		<div className="col-md-7 d-none d-sm-none d-md-block">
		<div className="googleMap">
			<GoogleMapExample
          containerElement={ <div style={{ height: `800px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
        </div>
		</div>
	</div>
</div>
</section>
</div>
)
}
export default Mainpage;