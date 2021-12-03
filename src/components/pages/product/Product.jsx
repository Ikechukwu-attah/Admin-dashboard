import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../chart/Chart'
import { Productdata } from '../../../dummyData'
import './product.css'
import { Publish } from '@mui/icons-material'

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data = {Productdata} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://www.notebookcheck.net/uploads/tx_nbc2/4_to_3_Teaser_Apple_iPhone_13_Pro.jpg"
                         alt="apple phone"  className="productInfoImg"/>
                        <span className="productName">Apple Phone</span>
                    </div>
                    <div className="productInforBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">

                <form action="" className="productForm">
                    <div className="productFormLeft">
                       <label htmlFor="">Product Name</label>
                       <input type ="text" placeholder="Apple Phone" />
                       <label>In Stock</label>
                       <select name="inStock" id="idStock">
                           <option value="yes">Yes</option>
                           <option value="No">No</option>
                       </select>

                       <label>Active</label>
                       <select name="active" id="iactive">
                           <option value="yes">Yes</option>
                           <option value="No">No</option>
                       </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://www.notebookcheck.net/uploads/tx_nbc2/4_to_3_Teaser_Apple_iPhone_13_Pro.jpg" 
                            
                            alt="product-image" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                                <input type="file" id="file"  style={{display:"none"}}/>
                            </label>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
