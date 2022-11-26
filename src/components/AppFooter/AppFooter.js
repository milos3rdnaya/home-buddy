import './appFooter.scss';

export function AppFooter() {
  return (
    <footer className="footer">
      <a className="footer__logo" href='https://www.homebuddy.com/'>
        <img src="https://www.homebuddy.com/static/shared1/homebuddy-logo.svg" alt="homebuddy logo"/>
      </a>
      <ul className="footerList">
        <li className="footerList__item"><a href="#">Terms of Use</a></li>
        <li className="footerList__item"><a href="#">Privacy Policy</a></li>
        <li className="footerList__item"><a href="#">Cookie Policy</a></li>
        <li className="footerList__item"><a href="#">Do Not Sell My Personal Information</a></li>
        <li className="footerList__item"><a href="#">Contact us</a></li>
      </ul>
    </footer>
  );
}
