import React, {useState} from 'react'
import {Popconfirm, Space, Table, Tag} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import ProductUpdate from './ProductUpdate';
const ProductData = (props) => {
    const {productData, deleteProduct,handleUpdateProduct} = props
    const [isModalUpdateOpen, setModalUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)
    const handleDelete = (id) => {
        deleteProduct(id)
    }
    const columns = [
        {
            title: 'STT',
            dataIndex: '',
            key: 'stt',
            render: (_, __, index) => index + 1
        },
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        }, {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={
                    {
                        display: "flex",
                        gap: "20px"
                    }
                }>
                    <EditOutlined onClick={
                            () => {
                                setDataUpdate(record);
                                setModalUpdateOpen(true);
                            }
                        }
                        style={
                            {
                                cursor: "pointer",
                                color: "orange"
                            }
                        }/>
                    <Popconfirm title="Delete product " description="Are you sure to delete product?"
                        onConfirm={
                            () => handleDelete(record.id)
                        }
                        okText="Yes"
                        cancelText="No"
                        placement='left'>
                        <DeleteOutlined style={
                            {
                                cursor: "pointer",
                                color: "red"
                            }
                        }/>
                    </Popconfirm>

                </div>
            )
        },
    ];
    return (
        <div style={
            {padding: "30px"}
        }>
            <Table columns={columns}
                dataSource={productData}/>
            <ProductUpdate isModalUpdateOpen={isModalUpdateOpen}
                setModalUpdateOpen={setModalUpdateOpen}
                dataUpdate={dataUpdate}
                handleUpdateProduct={handleUpdateProduct}></ProductUpdate>
        </div>
    )
}

export default ProductData
