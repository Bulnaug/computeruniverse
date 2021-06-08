import React from 'react';
import Layout from '../components/Layout';


const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        {/*  SEARCH FORM */}
        <List/>
    </Layout>
);

export default IndexPage;