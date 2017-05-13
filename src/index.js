import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import ListPosts from './containers/posts/list_posts';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware( ReduxPromise )( createStore );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware( reducers )}>
    <BrowserRouter>
      <div>
          <Route path="/" component={ListPosts}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector( '.container' ) );
