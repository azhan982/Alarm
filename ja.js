function mus() {
    var audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3');
    audio.play()}




bt.addEventListener('click',()=>{
    let mi = tim.value
    pas.innerHTML = mi
    let i = mi
    while(i>0) {
    pas.innerHTML = parseInt(pas.innerHTML)-1
    i-=1}
    fo.innerHTML =`Timer is set for next ${mi} minutes (Refresh for Stoping Timer)`
    tim.value = ''
    setTimeout(()=>{
        mus()
    },1000 * mi)
}
)