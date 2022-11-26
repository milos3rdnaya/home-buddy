import './zipCode.scss';

export function ZipCode() {
  return (
    <section className="zipCode">
      <div className="container container_zipCode">
        <h2 className="zipCode__header">See How Much Gutter Guards Cost In The XX, XXX Area</h2>
        <div className="zipCodeForm">
          <label className="zipCodeForm__label">What is your ZIP Code?</label>
          <div className="input-wrapper">
            <input className="input" type="text" placeholder="  Enter ZIP Code"/>
            <span>Label</span>
          </div>
          <small className="zipCodeForm__small">Free, no-obligation estimates.</small>
          <button className="button">Get estimate</button>
        </div>
      </div>
    </section>
  );
}
