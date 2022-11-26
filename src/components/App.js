import '../assets/styles/main.scss';
import { AppHeader } from './AppHeader/AppHeader';
import { Features } from './Features/Features';
import { ZipCode } from './ZipCode/ZipCode';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Features />
        <ZipCode />
      </main>
    </div>
  );
}

export default App;
