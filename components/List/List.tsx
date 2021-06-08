import React from 'react';
import ListInterface from './ListInterface';
import ListItem from './ListItem/ListItem';


import style from './List.module.scss';


class List extends React.Component<ListInterface.IProps, ListInterface.IState> {
    constructor(props: ListInterface.IProps) {
        super(props);
        this.state = {};
    }

    CPU_Artikeln = this.props.ItemsData.map(artikel => <ListItem artikel-image={artikel.image} artikel-title={artikel.title} artikel-komments={artikel.komments} artikel-price={artikel.price}/>);

    render(): JSX.Element {
        return <div className={style.cpu_artiklen}>
           {this.CPU_Artikeln}
        </div>;
}}
export default List;
