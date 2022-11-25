import '../assets/styles/main.scss';
import { AppHeader } from './AppHeader/AppHeader';
import { Features } from './Features/Features';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Features />
      </main>
    </div>
  );
}

export default App;
