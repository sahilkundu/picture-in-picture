const videoElement = document.getElementById('video');
const button = document.getElementById('button');
async function getVideo(){
    try{
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadeddata = ()=>{
        videoElement.play();
      }
    }catch(error){
       console.log(`An error occured due to : ${error}`);
    }
}
button.addEventListener('click', async () =>{
   button.disabled = true;
   await videoElement.requestPictureInPicture();
   button.disabled = false;
})
getVideo();