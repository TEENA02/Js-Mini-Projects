const URL="https://animechan.xyz/api/random";
const bg=document.querySelector("#bg");
const msg=document.querySelector("#msg");
const btn=document.querySelector("#btn");
const animeName=document.querySelector("#anime");
  btn.addEventListener("click",()=>{
    getFacts();
    updateBg();
})
  const getFacts=async()=>{
    let response= await fetch(URL);   
 let data=await response.json();
 msg.innerText=data.quote;
 animeName.innerText=`Anime Name: ${data.anime}`;

}
const updateBg=async()=>{
    let response=await fetch('https://nekos.best/api/v2/neko');
    let data=await response.json();
    console.log(data);
    let newSrc=data.results[0].url;
    let img = document.querySelector("#bg");
  img.src = newSrc;
}