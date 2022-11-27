import './zipCode.scss';

export function ZipCode() {
  return (
    <section className="zipCode" id="zipCode">
      <div className="container container_zipCode">
        <div className="zipCodeForm">
          <div className="zipCodeForm__wrapper">          
            <label className="zipCodeForm__label">What is your ZIP Code?</label>
            <div className="input-wrapper">
              <input className="input" type="text" placeholder="  Enter ZIP Code"/>
              <span>Enter ZIP Code</span>
            </div>
            <small className="zipCodeForm__small">Free, no-obligation estimates.</small>
            <button className="button">Get estimate</button></div>
        </div>
      </div>
    </section>
  );
}
