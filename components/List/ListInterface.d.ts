namespace ListInterface {
    // interface für die Parameter / Properties der List Component
    interface IProps {
        ItemsData: IProduct[]
    }

    // interface zum beschreiben des types Product
    interface IProduct {
        image: string;
        title: string;
        comments: string;
        stars: string;
        price: string;
    }

    interface IState {

    }
}

export default ListInterface;
