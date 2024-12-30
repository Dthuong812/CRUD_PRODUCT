import React, {useState} from 'react'
import {Button, Input, Modal, message} from 'antd';
const ProductForm = (props) => {
    const {addProduct}= props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productNew, setProductNew] = useState([{
            name: "",
            price: ""
        }])
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        if (productNew.name.trim() === "" || productNew.price <= 0) {
            message.warning("Please enter a valid product name and price!");
            return;
        }
        addProduct(productNew);
        setProductNew({ name: "", price: "" }); 
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleOnChange = (field, value) => {
        setProductNew({
            ...productNew,
            [field]: value,
        });
    }
    return (
        <div style={
            {
                display: "flex",
                alignItems: "start",
                justifyContent: "end",
                padding: "40px"
            }
        }>
            <Button type="primary"
                onClick={showModal}>
                Thêm sản phẩm
            </Button>
            <Modal title="Thêm sản phẩm"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <Input style={
                        {marginBottom: "10px"}
                    }
                    placeholder="Tên sản phẩm"
                    onChange={
                        (event) => {
                            handleOnChange("name",event.target.value)
                        }
                    }
                    value={
                        productNew.name
                    }/>
                <Input placeholder="Giá"
                    onChange={
                        (event) => {
                            handleOnChange("price",event.target.value)
                        }
                    }
                    value={
                        productNew.price
                    }/>
            </Modal>
    </div>
    )
}

export default ProductForm
