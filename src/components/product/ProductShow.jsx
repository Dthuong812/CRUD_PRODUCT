import React from 'react';
import { Drawer } from 'antd';

const ProductShow = ({ dataDetail, isDetailOpen, setDetailOpen }) => {
    return (
        <Drawer
            title="Chi tiết sản phẩm"
            onClose={() => setDetailOpen(false)}
            open={isDetailOpen}
        >
            {dataDetail ? (
                <>
                    <p>Id: {dataDetail.id}</p>
                    <p>Name: {dataDetail.name}</p>
                    <p>Price: {Number(dataDetail.price).toLocaleString()} VND</p>
                </>
            ) : (
                <p>Không có dữ liệu</p>
            )}
        </Drawer>
    );
};

export default ProductShow;
