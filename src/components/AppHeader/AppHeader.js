import './appHeader.scss';

export const AppHeader = () => {
	return (
		<header className="header">
      <div className='container'>
        <div className='headerTop'>
          <div className='headerTop__logo'>
            <a href='https://www.homebuddy.com/'>
              <img src="https://www.homebuddy.com/static/shared1/homebuddy-logo.svg" alt="homebuddy logo"/>
              <small className='headerTop__small'>for homeowners</small>
            </a>
          </div>
          <div className='headerTop__anchor'>
            <a href='#'>Link to form</a>
          </div>
        </div>
      </div>
    </header>
	);
}