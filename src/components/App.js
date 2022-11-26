import '../assets/styles/main.scss';

import { AppHeader } from './AppHeader/AppHeader';
import { Features } from './Features/Features';
import { ZipCode } from './ZipCode/ZipCode';
import { AppFooter } from './AppFooter/AppFooter';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Features />
        <ZipCode />
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;
