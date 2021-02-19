import Board from './components/Board';
import PlayButton from './components/PlayButton';
import { BrowserRouter, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={PlayButton} />
      <Route path='/game' component={Board} />
    </BrowserRouter>
  );
}
