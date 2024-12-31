import React, { useState } from 'react'
import { Popconfirm, Space, Table, Tag } from 'antd';
import { DeleteOutlined,EditOutlined  } from '@ant-design/icons';
const ProductData = (props) => {
  const {productData} = props
  
  const columns = [
    {
      title: 'STT',
      dataIndex: '',
      key: 'stt',
      render: (_, __, index) => index + 1,
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{display:"flex",gap:"20px"}}>
         <EditOutlined onClick={()=>{
         }} style={{cursor:"pointer",color:"orange"}}/>
         <Popconfirm
            title="Delete user "
            description="Are you sure to delete product ?"
            onConfirm={()=>handleDeleteUser(record._id)}
            okText="Yes"
            cancelText="No"
            placement='left'
          >
          <DeleteOutlined style={{cursor:"pointer",color:"red"}}
          />
          </Popconfirm>
          
        </div>
      ),
    },
  ];
  return (
    <div style={{
      padding:"30px"
    }}>
      <Table columns={columns} dataSource={productData} />
    </div>
  )
}

export default ProductData