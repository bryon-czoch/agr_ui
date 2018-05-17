import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  WordpressPage,
  WordpressPostList,
  WordpressPost,
} from './containers/wordpress';
import Layout from './containers/layout';
import Search from './containers/search';
import GenePage from './containers/genePage';
import DiseasePage from './containers/diseasePage';
import NotFound from './components/notFound';

export default (
  <Route path='/' component={
    (props) => (
      <Layout {...props}>
        <Switch>
          <Route path='/' exact component={() => (
            <WordpressPage slug='home' />
          )} />
          <Route component={Search} path='/search' />
          <Route component={GenePage} path='/gene/:geneId' />
          <Route component={DiseasePage} path='/disease/:diseaseId' />
          {/* <Redirect from='/posts/news' to='/posts' /> */}
          <Route component={WordpressPost} path='/posts/:slug' />
          <Route component={WordpressPostList} path='/posts' />
          {/* <Redirect from='/wordpress/:id' to='/:id' />  */}
          {/* before links within user edited WordPress content is fixed, this path rewrite is necessary */}
          <Route component={({location}) =>
            <WordpressPage slug={location.pathname}/>
          } path='/:slug' />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    )
  } />

);
