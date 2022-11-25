import './features.scss';
import { PiggyLabel } from '../PiggyLabel/PiggyLabel';

export function Features() {
  return (
    <section className="features">
      <div className="container container_features">
        <ul className="featuresList">
          <li className="featuresList__item featuresList__item_check">Lifetime warranty with 100% no-clog guarantee</li>
          <li className="featuresList__item featuresList__item_home">Fits most homes</li>
          <li className="featuresList__item featuresList__item_pig">Installs over existing gutters saving you thousands</li>
          <li className="featuresList__item featuresList__item_star">Сustomer rating </li>
        </ul>
        <PiggyLabel/>
      </div>
    </section>
  );
}
