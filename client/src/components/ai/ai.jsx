import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { setItemSession } from "../../utils/sessionStorage";
import { useNavigate } from "react-router-dom";


export const AIButton = () => {


    const navigate = useNavigate();

    const handleSingleProduct = (data) => {
        setItemSession("singleProduct", data);
        navigate("/description");
    };

    const { products } = useSelector((state) => state.prodReducer);

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
        console.log(totalItem);
        const randomIndex = Math.floor(Math.random() * totalItem);
        handleSingleProduct(products[randomIndex])
    }

    return <>
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
    </>
}