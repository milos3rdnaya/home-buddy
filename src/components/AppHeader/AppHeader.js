import './appHeader.scss';

export const AppHeader = () => {
	return (
		<header className="appHeader">
      <a href='https://www.homebuddy.com/'>
        <span>HomeBuddy</span>
        <span>.</span> <br/>
        <span>for homeowners</span>
      </a>
      <a>Link to form</a>
    </header>
	);
}