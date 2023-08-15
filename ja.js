function mus() {
    var audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3');
    audio.play()}




bt.addEventListener('click',()=>{
    let mi = tim.value
    pas.innerHTML = mi
   setInterval(()=>{
        pas.innerHTML -= 1  
   },1000)
    fo.innerHTML =`Timer is set for next ${mi} minutes (Refresh for Stoping Timer)`
    tim.value = ''
    setTimeout(()=>{
        mus()
    },1000 * mi)
}
)