window.onload=function(){
    var form=document.forms.class;
    setStatus();
    rainbowMsg();
    form._class.onchange=setStatus;
}

function setStatus(){
    console.log('setStatus() was called!')
    var playerClass=document.forms.class;
    var playerStatus=document.forms.status;
    var status={};
    var soulLevel=0;

    if(playerClass._class.value == 'warrior'){
        status.vit= 11;
        status.att= 8;
        status.end= 12;
        status.str= 13;
        status.dex= 13;
        status.res= 11;
        status.int= 9;
        status.fai= 9;
    }else if(playerClass._class.value == 'knight'){
        status.vit= 14;
        status.att= 8;
        status.end= 12;
        status.str= 13;
        status.dex= 13;
        status.res= 11;
        status.int= 9;
        status.fai= 9;
    }else if(playerClass._class.value == 'wanderer'){
        status.vit= 10 ;
        status.att= 11;
        status.end= 10;
        status.str= 10;
        status.dex= 14;
        status.res= 12;
        status.int= 11;
        status.fai= 8;
    }else if(playerClass._class.value == 'thief'){
        status.vit= 09;
        status.att= 11;
        status.end= 09;
        status.str= 09;
        status.dex= 15;
        status.res= 10;
        status.int= 12;
        status.fai= 11;
    }else if(playerClass._class.value == 'bandit'){
        status.vit= 12;
        status.att= 8;
        status.end= 14;
        status.str= 14;
        status.dex= 9;
        status.res= 11;
        status.int= 8;
        status.fai= 10;
    }else if(playerClass._class.value == 'hunter'){
        status.vit= 11;
        status.att= 9;
        status.end= 11;
        status.str= 12;
        status.dex= 14;
        status.res= 11;
        status.int= 9;
        status.fai= 9;
    }else if(playerClass._class.value == 'sorcerer'){
        status.vit = 8;
        status.att = 15;
        status.end = 8;
        status.str = 9;
        status.dex = 11;
        status.res = 8;
        status.int = 15;
        status.fai = 8;
    }else if(playerClass._class.value == 'pyromancer'){
        status.vit = 10;
        status.att = 12;
        status.end = 11;
        status.str = 12;
        status.dex = 9;
        status.res = 12;
        status.int = 10;
        status.fai = 8;
    }else if(playerClass._class.value == 'cleric'){
        status.vit = 11;
        status.att = 11;
        status.end = 9;
        status.str = 12;
        status.dex = 8;
        status.res = 11;
        status.int = 8;
        status.fai = 14;
    }else if(playerClass._class.value == 'deprived'){
        status.vit = 11;
        status.att = 11;
        status.end = 11;
        status.str = 11;
        status.dex = 11;
        status.res = 11;
        status.int = 11;
        status.fai = 11;
    }
    playerStatus.vit.value=status.vit;
    playerStatus.att.value=status.att;
    playerStatus.end.value=status.end;
    playerStatus.str.value=status.str;
    playerStatus.dex.value=status.dex;
    playerStatus.res.value=status.res;
    playerStatus.int.value=status.int;
    playerStatus.fai.value=status.fai;
    soulLevel=parseInt(status.vit)
                +parseInt(status.att)
                +parseInt(status.end)
                +parseInt(status.str)
                +parseInt(status.dex)
                +parseInt(status.res)
                +parseInt(status.int)
                +parseInt(status.fai)
                -78;
    playerStatus.slv.value=soulLevel;
}