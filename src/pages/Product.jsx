import React, { useEffect, useState } from 'react'
import ModalCreate from '../components/ModalCreate'
import ModalEdit from '../components/ModalEdit'
import ModalDelete from '../components/ModalDelete'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import getMonth from '../config/redux/action/monthAction'


const Product = () => {
    const dispatch = useDispatch()
    const { month } = useSelector((state) => state.month)
    // const [num, setNum] = useState(1);
    useEffect(() => {
        dispatch(getMonth())
    }, [])
    return (
        <div className='container'>
            {/* {num === 0 ? "nilai kosong" : num} */}
            <ModalCreate />
            <table class="table border m-4">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Day</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {month.map((item) => (
                        <tr>
                            <td>{item.ID}</td>
                            <td>{item.Name}</td>
                            <td>{item.Day}</td>
                            <td>
                                <Link to={`product/${item.ID}`}>Detail</Link>
                                <ModalEdit Name={item.Name} Day={item.Day} id={item.ID} />
                                <ModalDelete id={item.ID} />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Product