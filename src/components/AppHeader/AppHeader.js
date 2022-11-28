import "./appHeader.scss";
import header from "../../assets/img/header.png";
import nbc from "../../assets/img/nbc.png";

export const AppHeader = () => {
	return (
		<header className="header">
			<div className='container container_header'>
				<div className='headerTop'>
					<div className='headerTop__logo'>
						<a href='https://www.homebuddy.com/'>
							<img
								src="https://www.homebuddy.com/static/shared1/homebuddy-logo.svg"
								alt="homebuddy logo"
							/>
							<small className='headerTop__small'>for homeowners</small>
						</a>
					</div>
					<div className='headerTop__anchor'>
						<a href='#zipCode'>Link to form</a>
					</div>
				</div>
				<div className='headerBottom'>
					<h1 className='headerBottom__text'>
						<p>
							How
							<span className='headerBottom__text_green'>
								Over 410,000 Americans
							</span>{" "}
							Increased Their Property Value
							<span className='headerBottom__text_green'>
								{" "}
								In Under 6 Hours*
							</span>{" "}
							With This Simple Upgrade.
						</p>
						<p className='headerBottom__description'>
							Ideal for detached and semi-detached homes with sloped roofs.
						</p>
					</h1>
					<div className='headerBottom__img'>
						<img src={header} alt="house" className='headerBottom__img_big' />
						<a href='https://google.com' rel="noreferrer" target="_blank">
							<img src={nbc} alt="nbc" className='headerBottom__img_sm' />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};
