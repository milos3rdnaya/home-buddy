import '../assets/styles/main.scss';
import { AppHeader } from './AppHeader/AppHeader';
import { Features } from './Features/Features';
import { FormBlock } from './FormBlock/FormBlock';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Features />
        <FormBlock />
      </main>
    </div>
  );
}

export default App;
