import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
import { RootState } from '../../store/store'
import {deleteItem} from '../../globalState/createSlice'
import './style.css'

const Basket = () => {
    const basket = useSelector((state: RootState) => {
        // console.log(state)
        return state.reducer.basket
    })

    const getIncome = ():number => {
        let incomee = 0;
        for (var i = 0; i < basket.length; i++) {
                incomee +=  basket[i].price;
        }
        return incomee;
    }

    const dispatch = useDispatch()

    // console.log(basket)
    if(basket.length===0)
    return <h2 className='empty'>Your cart is empty</h2>
    return (
        <div className='basket_container'>
            <div className='main_basket_div'>
                <div className='head_div'>
                    <h3 className='head'>Shopping Basket</h3>
                    <p className='para1'>You have {basket.length} items in your basket</p>
                </div>
                <div className='list_odiv'>
                    <ul className='ul'>
                        {
                            basket.map((value,index) => {
                                return (

                                    <li className='li' key={index}>
                                        <img className='li_img' src={value.img} alt="" />
                                        <div className='desc_div'>
                                            <h3 className='head2'>{value.name}</h3>
                                            <p className='para2'>RS : {value.price}- {value.desc}</p>
                                        </div>
                                        <DeleteIcon onClick={()=>dispatch(deleteItem({id:value.id}))} className='icon' />
                                    </li> 
                                )
                            })
                        }
                        
                    </ul>
                    <div className='.total_div'>
                        <h2 className='total'>RS : {getIncome()} <hr/> </h2> 
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Basket;