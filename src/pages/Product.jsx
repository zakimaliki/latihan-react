import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ModalCreate from '../components/ModalCreate'
import ModalEdit from '../components/ModalEdit'
import ModalDelete from '../components/ModalDelete'


const Product = () => {
    const [date, setDate] = useState([])
    // const [num, setNum] = useState(1);
    useEffect(() => {
        axios.get('https://gofiber-production.up.railway.app/api/v1/month/data').then((res) => {
            setDate(res.data);
        }).catch((err) => {
            console.log(err);
        })
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
                    {date.map((item) => (
                        <tr>
                            <td>{item.ID}</td>
                            <td>{item.Name}</td>
                            <td>{item.Day}</td>
                            <td>
                                <ModalEdit Name={item.Name} Day={item.Day} id={item.ID}/>
                                <ModalDelete id={item.ID}/>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Product