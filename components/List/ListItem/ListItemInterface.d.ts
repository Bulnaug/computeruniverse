namespace ListItemInterface {
    interface IProps {
        ItemsData?: IProduct[]
    }

    // interface zum beschreiben des types Product
    interface IProduct {
        image: string;
        title: string;
        comments: string;
        starts: string;
        price: string;
    }

    interface IState {}
}

export default ListItemInterface;
