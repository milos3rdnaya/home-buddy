import './features.scss';

export function Features() {
  return (
    <section className="features">
      <div className="container container_features">
        <ul className="featuresList">
          <li className="featuresList__item featuresList__item_check"><span>Lifetime warranty with 100% no-clog guarantee</span></li>
          <li className="featuresList__item featuresList__item_home"><span>Fits most homes</span></li>
          <li className="featuresList__item featuresList__item_pig"><span>Installs over existing gutters saving you thousands</span></li>
          <li className="featuresList__item featuresList__item_star"><span>Сustomer rating</span></li>
        </ul>
        <div className="piggyLabel">
          <span>You will be surprised how affordable gutter guards are!</span>
        </div>
      </div>
    </section>
  );
}
