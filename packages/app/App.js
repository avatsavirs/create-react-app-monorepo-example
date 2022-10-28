import SomeComponent from 'some-component';
import * as hooks from '@pkg/hooks';
import { Alert, Affix, Badge } from '@pkg/components'
import './App.css';
import { Container } from './App.styled'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1 className="App-title">Welcome to React</h1>
        </Container>
      </header>
      <p className="App-intro">
        To get started, edit <code>packages/app/App.js</code> and save to reload.
      </p>
      <SomeComponent />
      {
      Object.keys(hooks).join('<>')
    }
      <div>
        <Badge count={100} title="badge" />
        <Alert message="tessssssst" description="dessccc" />
        <Affix offsetTop={10}>
          <Alert message="fix" description="ne" />
        </Affix>
      </div>
    </div>
  );
}

export default App;
