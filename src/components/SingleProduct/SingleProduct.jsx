import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts"

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";

import prod from "../../assets/products/earbuds-prod-1.webp"

const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="" />
                </div>
                <div className="right">
                    <span className="name">Product name</span>
                    <span className="price">Price</span>
                    <span className="desc">Product description</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20}/>
                            ADD TO CART
                        </button>
                    </div>

                    <span className="divider"/>
                    <div className="info-item">
                        <span className="text-bold">Category:
                            <span>Headphones</span>
                        </span>
                        <span className="text-bold">
                            Share:
                            <span className="social-icon">
                                <FaFacebookF/>
                                <FaTwitter/>
                                <FaInstagram/>
                                <FaLinkedinIn/>
                                <FaPinterest/>
                            </span>

                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;
