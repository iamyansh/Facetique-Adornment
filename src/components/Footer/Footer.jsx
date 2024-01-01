import "./Footer.scss";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="tite">About</div>
                <div className="text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nam dignissimos ipsam ex libero debitis culpa iure, quia explicabo sed est porro numquam eius voluptatibus beatae dolor ducimus sunt dolorem!
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Kayaloram Rd, Punnamada, Kottankulangara, Alapuzha, Kerala, 688006
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: 4353 4523 4543</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: hello@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Term & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    STORE 2023 created by our Team.
                </div>
                <img src={Payment} />
            </div>
        </div>
    </footer>;
};

export default Footer;
