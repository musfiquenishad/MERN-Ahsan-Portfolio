import React from "react";
import Logo from "./../Assets/Images/ahsan-logo.png";

function Footer() {
	return (
		<div className="container-fluid bg-light">
			<footer className=" pt-5   border-top bg-light ">
				<div className="row">
					<div className="col-12 col-md text-center">
						<img className="mb-2" src={Logo} alt="" width="24" height="24" />
						<small className="d-block mb-3 text-muted">
							&copy; Ahsan all right reserved
						</small>
					</div>
					<div className="col-6 col-md">
						<h5>Features</h5>
						<ul className="list-unstyled text-small">
							<li>
								<a className="text-muted" href="/">
									Cool stuff
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Random feature
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Team feature
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Stuff for developers
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Another one
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Last time
								</a>
							</li>
						</ul>
					</div>
					<div className="col-6 col-md">
						<h5>Resources</h5>
						<ul className="list-unstyled text-small">
							<li>
								<a className="text-muted" href="/">
									Resource
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Resource name
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Another resource
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Final resource
								</a>
							</li>
						</ul>
					</div>
					<div className="col-6 col-md">
						<h5>About</h5>
						<ul className="list-unstyled text-small">
							<li>
								<a className="text-muted" href="/">
									Team
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Locations
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Privacy
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Terms
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
