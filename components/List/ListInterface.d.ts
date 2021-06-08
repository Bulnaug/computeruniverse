import Intel_i5_9400F from '../../images/Intel Core I5-9400F.png';
import Intel_i5_9600KF from '../../images/Intel Core I5-9600KF.png';
import Ryzen7_2700X from '../../images/Ryzen 7 2700X.png';
import Ryzen7_3700X from '../../images/Ryzen 7 3700X.png';

namespace ListInterface {
    interface IProps {
        ItemsData: [
            {image: Intel_i5_9400F, title: 'Intel Core I5-9400F 6-Kern (Hexa-Core) Cpu mit 2.90 GHz', komments: '6', price: '195,90'},
            {image: Intel_i5_9600KF, title: 'Intel Core I5-9600KF 6-Kern (Hexa-Core) Cpu mit 3.70 GHz', komments: '31', price: '153,90'},
            {image: Ryzen7_2700X, title: ' AMD Ryzen 7 2700X 8-Kern (Okta Core) CPU mit 3.70 GHz', komments: '28', price: '291,90'},
            {image: Ryzen7_3700X, title: 'AMD Ryzen 7 3700X Boxed inkl. Wraith Prism Kühler', komments: '21', price: '180,75'}
        ]
    }

    interface IState {
       
    }
}

export default ListInterface;
