import React from 'react'

const MyOrders = () => {
  return (
    <>
        <div className='tp-order-inner'>
            <div className="profile__ticket table-responsive p-4">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Product Title</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> #2245</th>
                        <td data-info="title">How can i share ?</td>
                        <td data-info="status pending">Pending </td>
                    </tr>
                    <tr>
                        <th scope="row"> #2220</th>
                        <td data-info="title">Send money, but not working</td>
                        <td data-info="status reply">Cancel</td>
                    
                    </tr>
                    <tr>
                        <th scope="row"> #2125</th>
                        <td data-info="title">Balance error</td>
                        <td data-info="status done">Delivered</td>
                    </tr>
                    <tr>
                        <th scope="row"> #2124</th>
                        <td  data-info="title">How to decline bid</td>
                        <td data-info="status hold">On Hold</td>

                    </tr>
                    <tr>
                        <th scope="row"> #2121</th>
                        <td data-info="title">How to contact</td>
                        <td data-info="status done">Delivered</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default MyOrders
