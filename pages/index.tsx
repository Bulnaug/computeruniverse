import React from 'react';
import Layout from '../components/Layout';
import Intel_i5_9400F from "../images/Intel Core I5-9400F.png";
import Intel_i5_9600KF from "../images/Intel Core I5-9600KF.png";
import Ryzen7_2700X from "../images/Ryzen 7 2700X.png";
import Ryzen7_3700X from "../images/Ryzen 7 3700X.png";
import List from "../components/List/List";


const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        {/*  SEARCH FORM */}

        {/* übergabe der Daten an die List component */}
        <List ItemsData={[
            {image: Intel_i5_9400F, title: 'Intel Core I5-9400F 6-Kern (Hexa-Core) Cpu mit 2.90 GHz', comments: '6', price: '195,90'},
            {image: Intel_i5_9600KF, title: 'Intel Core I5-9600KF 6-Kern (Hexa-Core) Cpu mit 3.70 GHz', comments: '31', price: '153,90'},
            {image: Ryzen7_2700X, title: ' AMD Ryzen 7 2700X 8-Kern (Okta Core) CPU mit 3.70 GHz', comments: '28', price: '291,90'},
            {image: Ryzen7_3700X, title: 'AMD Ryzen 7 3700X Boxed inkl. Wraith Prism Kühler', comments: '21', price: '180,75'}
        ]}/>
    </Layout>
);

export default IndexPage;
