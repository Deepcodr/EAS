setInterval(()=>{
    var title=document.getElementById('home_title').innerText;
    if(title==="DeFi")
    {
        document.getElementById('home_title').classList.remove('green');
        document.getElementById('home_title').classList.add('yellow');
        document.getElementById('home_title').innerText="Payments";
    }
    if(title==="Payments")
    {
        document.getElementById('home_title').classList.remove('yellow');
        document.getElementById('home_title').classList.add('red');
        document.getElementById('home_title').innerText="Web3";
    }
    if(title==="Web3")
    {
        document.getElementById('home_title').classList.remove('red');
        document.getElementById('home_title').classList.add('green');
        document.getElementById('home_title').innerText="DeFi";
    }
},3000); 

document.getElementById('home_yellow_circle').style.opacity=0.5329
setInterval(()=>{
    var co=parseFloat(document.getElementById('home_yellow_circle').style.opacity);
    if(co<0)
    {
        document.getElementById('home_yellow_circle').style.opacity=0.5329;
    }
    else
    {
        document.getElementById('home_yellow_circle').style.opacity=co-0.1;
    }
},100)

document.getElementById('home_green_circle').style.opacity=0;
setInterval(()=>{
    var co=parseFloat(document.getElementById('home_green_circle').style.opacity);
    if(co<0)
    {
        document.getElementById('home_green_circle').style.opacity=0.8123;
    }
    else
    {
        document.getElementById('home_green_circle').style.opacity=co-0.1;
    }
},100)

document.getElementById('home_purple_circle').style.opacity=0.7623;
setInterval(()=>{
    var co=parseFloat(document.getElementById('home_purple_circle').style.opacity);
    if(co<0)
    {
        document.getElementById('home_purple_circle').style.opacity=0.8123;
    }
    else
    {
        document.getElementById('home_purple_circle').style.opacity=co-0.1;
    }
},100)

document.getElementById('home_red_circle').style.opacity=1;
setInterval(()=>{
    var co=parseFloat(document.getElementById('home_red_circle').style.opacity);
    if(co<0)
    {
        document.getElementById('home_red_circle').style.opacity=1;
    }
    else
    {
        document.getElementById('home_red_circle').style.opacity=co-0.1;
    }
},100)
