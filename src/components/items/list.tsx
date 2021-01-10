import React from 'react'
import {useDispatch} from 'react-redux'
import {addItem} from '../../globalState/createSlice'
import {useSelector} from 'react-redux'
import {Products} from '../../globalState/initialState'
import {RootState} from '../../store/store'
import './style.css'
import Basket from '../basket/basket'

const MyList = () => {
    const dispatch = useDispatch()
    const select = useSelector((state:RootState)=>{
        return state.reducer.basket
    })
    
    console.log(select)
    

    return(
        <div className='list_container'>
            <div className='items_div' >
                {Products.list.map((values)=>{
                    return(
                        <div  key={values.id} className={!values.bool? 'items':'items2'}
                         
                        >
                            <span   style={{
                                backgroundImage: `url("${values.imgUrl}")`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'250px 300px',
                                backgroundPosition:'center',
                                width:'250px',
                                height:'160px',
                                backgroundPositionY:'2px',
                                position:'absolute',
                                zIndex:-1
                                } }>
                                
                            </span>
                            {!values.bool?
                            
                            <button className='add_btn'    onClick={()=>dispatch(addItem({
                                id:values.id,
                                name:values.name,
                                desc:values.description,
                                price:values.price,
                                img:values.imgUrl,
                                // added:true
                            }))}>{values.name}</button>
                            : null
                        }
                        </div>
                        )
                })}
              
            </div>
           
        </div>
    )
}
export default MyList