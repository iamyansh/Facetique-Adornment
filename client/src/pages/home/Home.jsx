import { useDispatch, useSelector } from "react-redux"
import { Loading } from "../../components/loading/Loading"
import { Error } from "../../components/loading/Error"
import { UpperSection } from "../../components/home/UpperSection";
import { LowerSection } from "../../components/home/LowerSection";
import { useEffect } from "react";
import { getLowerData, getUpperData } from "../../redux/features/home/actions";
import { setItemSession } from "../../utils/sessionStorage";
import { setNavbarPath } from "../../redux/features/path/actions";
import { useNavigate } from "react-router-dom";


export const Home = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {loading, upperData, lowerData, error} = useSelector(state => state.homeReducer);
    
    const handleChange = (category) => {
        const temp = category.toLowerCase();
        setItemSession('path',temp);
        dispatch(setNavbarPath(temp));
        navigate(`/${temp}`);
    }
    
    useEffect(() => {
        dispatch(getUpperData());
        dispatch(getLowerData());
    },[]);
    
    return loading ? <Loading /> : error ? <Error /> : (
        <>
            {upperData.map((data,index) => 
                <UpperSection handleChange={handleChange} key={index} {...data}/>
            )}

            {lowerData.map((data,index) => 
                <LowerSection handleChange={handleChange} key={index} {...data}/>
            )}
        </>
    );
}