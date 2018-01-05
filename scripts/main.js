window.onload=function(){
    var identity=document.getElementById("identity");
    var basicStatus=document.getElementById("basicStatus");

    setParameter();
    calculate();
    rainbowMsg();
    aho();
    identity.addEventListener("change", setParameter);
    identity.addEventListener("change", calculate);
    basicStatus.addEventListener("change", calculate);
}

function setParameter(){
    console.log('setParameter() was called!')
    const param_ids=["slv", "vit", "att", "end", "str", "dex", "res", "int", "fai"];
    const paramWarrior  =[4,11,8,12,13,13,11,9,9];
    const paramKnight   =[5,14,8,12,13,13,11,9,9];
    const paramWanderer =[3,10,11,10,10,14,12,11,8];
    const paramThief    =[5,9,11,9,9,15,10,12,11];
    const paramBandit   =[4,12,8,14,14,9,11,8,10];
    const paramHunter   =[4,11,9,11,12,14,11,9,9];
    const paramSorcerer =[3,8,15,8,9,11,8,15,8];
    const paramPyromancer=[1,10,12,11,12,9,12,10,8];
    const paramCleric   =[2,11,11,9,12,8,11,8,14];
    const paramDeprived =[6,11,11,11,11,11,11,11,11];
    var identity=document.getElementById("identity");

    switch(identity.value){
        case "warrior"  :updateParameter(param_ids, paramWarrior); break;
        case "knight"   :updateParameter(param_ids, paramKnight); break;
        case "wanderer" :updateParameter(param_ids, paramWarrior); break;
        case "thief"    :updateParameter(param_ids, paramThief); break;
        case "bandit"   :updateParameter(param_ids, paramBandit); break;
        case "hunter"   :updateParameter(param_ids, paramHunter); break;
        case "sorcerer" :updateParameter(param_ids, paramSorcerer); break;
        case "pyromancer":updateParameter(param_ids, paramPyromancer); break;
        case "cleric"   :updateParameter(param_ids, paramCleric); break;
        case "deprived" :updateParameter(param_ids, paramDeprived); break;
    }
}

function updateParameter(param_ids, paramTable){
    param_ids.forEach((val, index) => {
        var target=document.getElementById(val);
        target.value=paramTable[index];
    });
}

function aho(){
    var obj=document.getElementById("baka");

    function uma(){
        obj.innerHTML="馬";
    }
    function sika(){
        obj.innerHTML="鹿";
    }
    obj.onmouseover=sika;
    obj.onmouseout=uma;
}