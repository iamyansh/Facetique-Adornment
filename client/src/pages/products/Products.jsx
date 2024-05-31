import { Box, Button, Center, Flex, Grid, Spacer, Text, color, useColorMode, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../redux/features/products/actions";
import { setToast } from "../../utils/extraFunctions";
import { LeftSideFilter } from "../../components/products/LeftSideFilter";
import { SortFilters } from "../../components/products/SortFilters";
import { useNavigate } from "react-router-dom";
import { getItemSession, setItemSession } from "../../utils/sessionStorage";
import { ProductDisplayBox } from "../../components/products/ProductDisplayBox";
import { Loading } from "../../components/loading/Loading";
import { Error } from "../../components/loading/Error";



export const Products = () => {

    const { colorMode } = useColorMode();
    const [isFilter, setIsFilter] = useState(true);
    const { products, isLoading, isError } = useSelector((state) => state.prodReducer);
    const path = getItemSession("path");
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    
    const resetFilter = () => {
        setIsFilter(!isFilter);
        dispatch(getRequest(path));
        setToast(toast, "Filter Reset Successfully", "success");
    };

    const handleSingleProduct = (data) => {
        setItemSession("singleProduct", data);
        navigate("/description");
    };

    useEffect(() => {
        dispatch(getRequest(path));
    }, [path]);






    
    
    
    let stream = null;
    
    // Add an event listener to the start button
    const startCamera =  async () => {
        const video = document.getElementById('video');
        const containerCamera = document.getElementById('containerCamera');
        try {
            // Request access to the user's camera
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            // Set the video element's source to the stream
            video.srcObject = mediaStream;
            stream = mediaStream;
            containerCamera.style.display = 'block';
        } catch (error) {
            console.error('Error accessing the camera', error);
        }
    };
    
    
    const stopCamera = () => {
    
        const video = document.getElementById('video');
        const containerCamera = document.getElementById('containerCamera');
        
        if (stream) {
        
            stream.getTracks().forEach(track => track.stop()); // Stop all tracks of the stream
            video.srcObject = null; // Remove the video source
            stream = null;
            containerCamera.style.display = 'none';
        }
    };
    
    
    const captureImage = () => {
        const video = document.getElementById('video');
        const containerCamera = document.getElementById('containerCamera');
        
        if (stream) {
            const containerImage = document.getElementById('containerImage');
            const canvas = document.getElementById('canvas');
            const photo = document.getElementById('photo');
        
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
        
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            // Get the data URL of the image
            const dataUrl = canvas.toDataURL('image/png');
            // Set the photo src to the data URL
            photo.src = dataUrl;
            stream.getTracks().forEach(track => track.stop()); // Stop all tracks of the stream
            video.srcObject = null; // Remove the video source
            stream = null;
            containerCamera.style.display = 'none';
            containerImage.style.display = 'block';
        }
    }
    
    const HideImage = () => {
        const containerImage = document.getElementById('containerImage');
        containerImage.style.display = 'none';
    }
    
    const recommend = () => {
        
        const totalItem = Object.keys(products).length;
        const randomIndex = Math.floor(Math.random() * totalItem);
        handleSingleProduct(products[randomIndex])
    }


    return (
        <>
            <Flex
                direction={["column", "column", "row", "row", "row"]}
                h={['100px', '100px', '60px', '60px', '60px']}
                position={'sticky'}
                top={'0px'}
                bg={colorMode === 'light' ? 'white' : '#1a202c'}
                zIndex={1}
            >
                <Center textAlign={'start'}>
                    <Text w={'100%'} ml={['20px', '20px', '30px', '40px', '50px']} fontSize={['20px', '25px']} fontWeight={500}>
                        {path === "men" ? "Men's Products"
                            : path === "women" ? "Women's Products"
                                : path === "kids" ? "Kids's Products" : "All Products"} [{products.length}]
                    </Text>
                </Center>
                <Spacer />
                <Center>
                    <Flex
                        gap={['4px']}
                        w={'100%'}
                        my={['10px', '10px', '0px', '0px', '0px']}
                        px={['8px', '8px', '20px', '20px', '20px']}
                    >
                        <div id="containerCamera" width="640" height="600" style={{display:'none', marginTop: "400px"}}>
                            <Button bgColor={'#555555'} marginTop={0} marginLeft={600} onClick={stopCamera} fontSize={['13px', '16px']}><svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg></Button>
                            <video id="video" width="640" height="480" autoPlay></video>
                            <Button className="greenButton" textColor={'white'} marginTop={-50} marginLeft={260} bgColor={'green'} onClick={captureImage} >Capture Photo</Button>
                        </div>
                        <div id="containerImage" width="640" height="600" style={{display:'none', marginTop: "400px"}}>
                            <Button bgColor={'#555555'} marginTop={0} marginLeft={600} onClick={HideImage} fontSize={['13px', '16px']}><svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg></Button>
                            <canvas id="canvas" width="640" height="480"  style={{display:'none'}}></canvas>
                            <img id="photo" alt="Captured Image" />
                            <Button className="greenButton" textColor={'white'} marginTop={-50} marginLeft={260} bgColor={'green'} onClick={()=>{recommend();HideImage()}}>Try now</Button>
                        </div>

                        <Button textColor={'white'} onClick={startCamera} bgColor={'red'} className="redButton">Try 3d </Button>

                        <Button onClick={() => { setIsFilter(!isFilter) }} fontSize={['13px', '16px']} rightIcon={<IoOptionsOutline />} >
                            {isFilter ? 'Hide Filter' : 'Show Filter'}
                        </Button>
                        <Spacer />
                        <Button onClick={resetFilter} fontSize={['13px', '16px']}>Reset Filter</Button>
                        <Spacer />
                        <SortFilters />
                    </Flex>
                </Center>
            </Flex>

            <Grid
                gap={['20px', '20px', '2%', '2%', '2%']}
                templateColumns={['100%', '100%', isFilter ? '32% 66%' : '100%', isFilter ? '28% 70%' : '100%', isFilter ? '20% 78%' : '100%']}
                justifyContent={'center'}
            >
                {isFilter && <Box
                    minH={['120px', '120px', '600px', '600px', '600px']}
                    maxH={['900px', '600px']}
                    position={['none', 'none', 'sticky', 'sticky', 'sticky']}
                    top={['0px', '70px']}
                    overflowY={'scroll'}
                    className='scroll'
                    zIndex={0}
                    mt={['10px', '10px', '20px', '20px', '20px']}
                >
                    <LeftSideFilter />
                </Box>}

                <Box minH={'400px'}>

                    {isLoading ? (
                        <Loading />
                    ) : isError ? (
                        <Error />
                    ) : (
                        <Grid
                            gap={[2, 4]}
                            p={['10px', '10px', '20px', '20px', '20px']}
                            templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
                        >
                            {products.map((product, index) => (
                                <ProductDisplayBox
                                    {...product}
                                    key={index}
                                    onClick={() => { handleSingleProduct(product) }}
                                />
                            ))}
                        </Grid>
                    )}

                </Box>

            </Grid>
        </>
    );
};