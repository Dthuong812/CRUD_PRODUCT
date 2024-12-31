import {Input, Modal, message} from 'antd'
import React, {useEffect, useState} from 'react'

const ProductUpdate = (props) => {
    const {isModalUpdateOpen, setModalUpdateOpen, dataUpdate, handleUpdateProduct} = props
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    useEffect(() => {
        if (dataUpdate) {
            setName(dataUpdate.name)
            setPrice(dataUpdate.price)
        }
    }, [dataUpdate])
    const handleSubmit = () => {
        const updatedProduct = {
            id: dataUpdate.id,
            name,
            price,
        };
        handleUpdateProduct(updatedProduct);
        message.success('Cập nhật sản phẩm thành công!');
        resetAndCloseModal();
    }
    const resetAndCloseModal = () => {
        setName('');
        setPrice('');
        setModalUpdateOpen(false);
    };
    return (
        <Modal title="Cập nhật sản phẩm "
            open={isModalUpdateOpen}
            onOk={handleSubmit}
            onCancel={
                () => resetAndCloseModal()
        }>
            <Input style={
                    {marginBottom: "10px"}
                }
                placeholder="Tên sản phẩm"
                value={name}
                onChange={
                    (event) => {
                        setName(event.target.value)
                    }
                }/>
            <Input placeholder="Giá"
                value={price}
                onChange={
                    (event) => {
                        setPrice(event.target.value)
                    }
                }/>
        </Modal>
    )
}

export default ProductUpdate
