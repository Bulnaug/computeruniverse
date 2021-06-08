import React from 'react';
import ListInterface from './ListInterface';
import ListItem from './ListItem/ListItem';


import style from './List.module.scss';


class List extends React.Component<ListInterface.IProps, ListInterface.IState> {
    constructor(props: ListInterface.IProps) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        const {ItemsData} = this.props;

        const cpuArtikel = ItemsData.map((artikel) => <ListItem artikel-image={artikel.image} artikel-title={artikel.title} artikel-komments={artikel.comments} artikel-price={artikel.price}/>);
        return (<div className={style.cpu_artiklen}>
           {cpuArtikel}
        </div>);
    }
}
export default List;
