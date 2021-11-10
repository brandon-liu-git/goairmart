import './App.less';
import { Layout } from 'antd';
import React from 'react';
import PageHeader from './components/header';
import PageContent from './components/content';
import PageFooter from './components/footer';


function App() {

  return (
    <div>
      <Layout>
        <PageHeader />
        <PageContent />
        <PageFooter />
      </Layout>
    </div>
  );
}

export default App;
