import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons'

import style from './ListItem.module.scss';

class ListItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return <div className={style.productItem} >
            <div className={style.image_box}><img src={this.props.image}/></div>
            <div className={style.title}>{this.props.title}</div>
            <div className={style.rating}>
                <p className={style.stars}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </p>
                <p className={style.komments}>{this.props.komments}</p>
            </div>
            <div className={style.price}>{this.props.price}</div>
        </div>;
    }
}

export default ListItem;
