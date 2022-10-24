let inputBtn=document.getElementById('btn');
inputBtn.addEventListener('click',()=>{
    const apiurl='https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json'
async function catApi(){
    
let res= await fetch(apiurl)
    let data=await res.json()
console.log(data);
console.log(Object.keys(data)[1]);
console.log(Object.values(data)[1].length)
console.log(Object.values(data)[2].count);
 let val=Object.values(data)
 console.log(val[0])
 console.log(val[1][0].name)
 console.log(val[3])
 let parent=document.createElement('P')
    parent.innerHTML=`<div class="wrapper">
        <div class="data-wrapper">
            <h4> Total Verses:</h4>
            <span>${Object.values(data)[0].count}</span>
        </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
        <h4> Total Chapters:</h4>
        <span>${Object.values(data)[1].length}</span>
    </div>
</div>

<div class="wrapper">
    <div class="data-wrapper">
        <h4>First chapter name:</h4>
        <span>${val[1][0].name}</span>
    </div>
</div>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Number of sajdas:</h4>
        <span>${Object.values(data)[2].count}</span>
    </div>
</div>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Number of rukus:</h4>
        <span>${Object.values(data)[3].count}</span>
    </div>
</div>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Number of pages:</h4>
        <span>${Object.values(data)[4].count}</span>
    </div>
</div>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Number of manzils:</h4>
        <span>${Object.values(data)[5].count}</span>
    </div>
</div>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Number of maqras:</h4>
        <span>${Object.values(data)[6].count}</span>
    </div>
</div>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Number of juzs:</h4>
        <span>${Object.values(data)[7].count}</span>
    </div>
</div>`

    document.body.append(parent)
}
    catApi()
})
