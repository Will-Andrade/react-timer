import classes from './App.module.css';
import Timer from './components/Timer';

function App() {
  return (
    <main className={classes.container} data-testid="app-component">
      <h1 className={classes.title}>React Timer</h1>
      <Timer />
    </main>
  );
}

export default App;
