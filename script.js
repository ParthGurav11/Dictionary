let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let input = document.querySelector("input");
    let word = input.value;
    let resp = await getMeaning(word);
    let respArr = resp[0].meanings;
    let respObj = respArr[0];
    let resDef = respObj.definitions;
    console.log(resDef)

    showDef(resDef);


})
function showDef(respArr){
    let ul = document.querySelector("#word-means")
    ul.innerText = "";
    for(def of respArr){
        // li.innerText = "";
        let li = document.createElement("li");
        li.innerText = def.definition;
        ul.appendChild(li)
        // console.log(def.definition)
    }
}
async function getMeaning(word){
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    try{
        let header = { headers:{Accept:"application/json"}};
        let resp = await axios.get(url+word,header);
        return resp.data;
    }
    catch(e){
        console.log("Error: ",e);
        return e;
    }
}