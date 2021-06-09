import React from 'react';
import Layout from '../components/Layout';
import List from "../components/List/List";
import Search from '../components/Search/Search'
import state from '../state/state'

const IndexPage = () => (

    <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <Search/>

        {/* übergabe der Daten an die List component */}
        <List ItemsData={state.ItemsData}/>
        
    </Layout>
);

export default IndexPage;
