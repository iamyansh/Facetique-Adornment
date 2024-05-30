import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClothSection } from "../../components/home/ClothSection.jsx";
import { ShoeSection } from "../../components/home/ShoeSection.jsx";
// import { EaringSection } from "../../components/home/EaringSection.jsx";

import { Error } from "../../components/loading/Error.jsx";
import { Loading } from "../../components/loading/Loading.jsx";
import { getClothData, getEaringData } from "../../redux/features/home/actions.js";
import { setNavbarPath } from "../../redux/features/path/actions.js";
import { setItemSession } from "../../utils/sessionStorage.js";


export const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, clothData, shoeData} = useSelector((state) => state.homeReducer);


    const handleSection = (gender,category) => {
        dispatch(setNavbarPath(gender));
        // let tempGender;
        // switch(category){
        //     case "bracelet":
        //         tempGender = "men";
        //     case "earing":
        //         tempGender = "women";
        //     case "chain":
        //         tempGender = "kids";
        //     default:
        //         tempGender = "allProducts";
        // }
        setItemSession("path", gender);
        navigate(`/${category}`)
    };


    useEffect(() => {
        dispatch(getClothData());
        // dispatch(getShoeData());
        dispatch(getEaringData());
    }, []);


    return loading ? (
        <Loading />
    ) : error ? (
        <Error />
    ) : (
        <>
            {shoeData.map((data, index) => (
                <ShoeSection handleSection={handleSection} key={index} {...data} />
            ))}

            {clothData.map((data, index) => (
                <ClothSection handleSection={handleSection} key={index} {...data} />
            ))}

            {/* {earingData.map((data, index) => (
                <EaringSection handleSection={handleSection} key={index} {...data} />
            ))} */}
        </>
    );
};

