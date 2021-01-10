import shirt1 from '../images/shirt1.jpg'
import shirt2 from '../images/grey.jpg'
import shirt3 from '../images/red-black.jpg'
import {items,state} from '../types/types'

export const Products:items = {
    list: [{
        id: 1,
        imgUrl: shirt1,
        description: 'The only product on our site that might actually be worth buying',
        price: 343,
        name: 'black t-shirt',
        bool:false
    },
    {
        id: 2,
        imgUrl: shirt2,
        description: 'This unique shirt is guaranteed to fit nobody, not even new born babies',
        price: 400,
        name: 'grey shirt',
        bool:false
    },
    {
        id: 3,
        imgUrl: shirt3,
        description: 'No fancy sizing charts here, one shirt size to rule them all',
        price: 500,
        name: 'check shirt',
        bool:false

    }]
}

export const Initial_state:state ={
    basket:[
        // {
        //     id: 2,
        //     img: shirt2,
        //     desc: 'This unique shirt is guaranteed to fit nobody, not even new born babies',
        //     price: 400,
        //     name: 'grey shirt',
        //     added:true
    
        // },
    ],
}
