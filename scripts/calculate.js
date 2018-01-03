function calcHp(vit){
    var HEALTH=[
        531, 552, 573, 594, 616, 638, 659, 682, 698, 719, 742, 767, 793, 821,
        849, 878, 908, 938, 970, 1001, 1034, 1066, 1100, 1123, 1147, 1170, 1193,
        1216, 1239, 1261, 1283, 1304, 1325, 1346, 1366, 1386, 1405, 1424, 1442,
        1458, 1474, 1489, 1500, 1508, 1517, 1526, 1535, 1544, 1553, 1562, 1571,
        1580, 1588, 1597, 1606, 1615, 1623, 1632, 1641, 1649, 1658, 1666, 1675,
        1683, 1692, 1700, 1709, 1717, 1725, 1734
    ];
    var hp;

    hp = HEALTH[vit-8];
    document.result.hp.value = parseInt(hp);
}

function calcStamina(end){
    var STAMINA=[
        88, 90, 91, 93, 95, 97, 98, 100, 102, 104, 106, 108, 110, 112, 115, 117, 119,
        121, 124, 126, 129, 131, 133, 136, 139, 141, 144, 146, 149, 152, 154, 157, 160
    ];
    var stamina;
    
    if(end>40){
        stamina=160;
    }else{
        stamina=STAMINA[end - 8];
    }
    document.result.stamina.value = parseInt(stamina);
}

function calcEquipload(end){
    var equipLoad;

    equipLoad=48+(end-8);
    document.result.equipLoad.value=parseInt(equipLoad);
}

/*
function calcAttack(str, dex){
	var rightHandAttack1, rightHandAttack2, leftHandAttack1, leftHandAttack2;
    
	rightHandAttack1 = 20;
    if(document.getElementById('rightHandWeapon1').value=='fist'){
        rightHandAttack1=20+(str*0.2);
    }
    if(document.getElementById('rightHandWeapon1').value=='murakumo'){
        rightHandAttack1 = 282 + (str * 1) + (dex * 6);
	}
    if(document.getElementById('rightHandWeapon1').value=='greatClub'){
		rightHandAttack1 = 337 + (str * 8) + (dex * 0);
	}
    if(document.getElementById('rightHandWeapon1').value=='zweihender'){
		rightHandAttack1 = 325 + (str * 4) + (dex * 3);
	}
	document.result.rightHandAttack1.value = parseInt(rightHandAttack1);

    rightHandAttack2=20;
    if(document.getElementById('rightHandWeapon2').value=='fist'){
        rightHandAttack2=20+(str*0.2);
    }
    if(document.getElementById('rightHandWeapon2').value=='murakumo'){
        rightHandAttack2 = 282 + (str * 1) + (dex * 6);
	}
    if(document.getElementById('rightHandWeapon2').value=='greatClub'){
		rightHandAttack2 = 337 + (str * 8) + (dex * 0);
	}
    if(document.getElementById('rightHandWeapon2').value=='zweihender'){
		rightHandAttack2 = 325 + (str * 4) + (dex * 3);
	}
	document.result.rightHandAttack2.value = parseInt(rightHandAttack2);

    leftHandAttack1=20;
    if(document.getElementById('leftHandWeapon1').value=='fist'){
        leftHandAttack1=20+(str*0.2);
    }
    if(document.getElementById('leftHandWeapon1').value=='murakumo'){
        leftHandAttack1 = 282 + (str * 1) + (dex * 6);
	}
    if(document.getElementById('leftHandWeapon1').value=='greatClub'){
		leftHandAttack1 = 337 + (str * 8) + (dex * 0);
	}
    if(document.getElementById('leftHandWeapon1').value=='zweihender'){
		leftHandAttack1 = 325 + (str * 4) + (dex * 3);
	}
	document.result.leftHandAttack1.value = parseInt(leftHandAttack1);

    leftHandAttack2=20;
    if(document.getElementById('leftHandWeapon2').value=='fist'){
        leftHandAttack2=20+(str*0.2);
    }
    if(document.getElementById('leftHandWeapon2').value=='murakumo'){
        leftHandAttack2 = 282 + (str * 1) + (dex * 6);
	}
    if(document.getElementById('leftHandWeapon2').value=='greatClub'){
		leftHandAttack2 = 337 + (str * 8) + (dex * 0);
	}
    if(document.getElementById('leftHandWeapon2').value=='zweihender'){
		leftHandAttack2 = 325 + (str * 4) + (dex * 3);
	}
	document.result.leftHandAttack2.value = parseInt(leftHandAttack2);

}
*/

/*
function calcPoise(){
    var poise=0;

    if(document.getElementById('armor').value   =='havelsArmor'){
        poise+=47;
    }
    if(document.getElementById('gauntlet').value=='ironBracelet'){
        poise+=7;
    }
    if(document.getElementById('regins').value  =='hollowSoldierWaistcloth'){
        poise+=7;
    }
    document.result.poise.value=parseInt(poise);
}
*/

/*
function calcDefence(){
    var defence=0;
    
    if(document.getElementById('head').value    =='maskOfMother'){
        defence+=6;
    }
    if(document.getElementById('armor').value   =='havelsArmor'){
        defence+=92;
    }
    if(document.getElementById('gauntlet').value=='ironBracelet'){
        defence+=17;
    }
    if(document.getElementById('regins').value  =='hollowSoldierWaistcloth'){
        defence+=13;
    }
    document.result.physicalDefence.value=parseInt(defence);
}
*/
/*
function calcUseEquipLoad(equipLoad){
    var useEquipLoad=0;

    if(document.getElementById('head').value    =='maskOfMother'){
        useEquipLoad+=1.2;
    }
    if(document.getElementById('armor').value   =='havelsArmor'){
        useEquipLoad+=19.5;
    }
    if(document.getElementById('gauntlet').value=='ironBracelet'){
        useEquipLoad+=4.3;
    }
    if(document.getElementById('regins').value  =='hollowSoldierWaistcloth'){
        useEquipLoad+=1.5;
    }
    document.result.useEquipLoad.value=parseInt((useEquipLoad/equipLoad)*100);
}
*/

function calculate(){
    console.log('calculate() was called!');
    var status={};

    status.vit=document.getElementById('vit').value;
    status.att=document.getElementById('att').value;
    status.end=document.getElementById('end').value;
    status.str=document.getElementById('str').value;
    status.dex=document.getElementById('dex').value;
    status.res=document.getElementById('res').value;
    status.int=document.getElementById('int').value;
    status.fai=document.getElementById('fai').value;

    calcHp(status.vit);
    calcStamina(status.end);
    calcEquipload(status.end);
}
