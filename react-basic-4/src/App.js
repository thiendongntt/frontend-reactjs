import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AlbumFeature from './feature/Album';
import CartFeature from './feature/Cart';
import ProductFeature from './feature/Product';
import TodoFeature from './feature/Todo';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums"> Albums</Link>
      </p> */}
      {/* <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} /> */}
      <Switch>
        <Redirect from="/" to="/products" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Route path="/" component={ProductFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />

        <Route path="/cart" component={CartFeature} />
        <Route component={NotFound} />
      </Switch>
      {/* <TodoFeature />
      <AlbumFeature /> */}
      {/* Footer */}
    </div>
  );
}

export default App;
