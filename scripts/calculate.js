function calculate(){
    console.log('calculate() was called!');
    var basicStatus=document.getElementById("basicStatus");
    var weapon=document.getElementById("weapon");
    var armor=document.getElementById("armor");

    calcMainParameter(basicStatus);
    calcAttackParameter(weapon);
    calcPoiseParameter(armor);
}

function calcMainParameter(basicStatus){
    var hp=document.getElementById("hp");
    var stamina=document.getElementById("stamina");
    var equipLoad=document.getElementById("equipLoad");
    var VIT=basicStatus.vit.value;
    var END=basicStatus.end.value;
    var HEALTH=[
        531, 552, 573, 594, 616, 638, 659, 682, 698, 719,
        742, 767, 793, 821, 849, 878, 908, 938, 970, 1001,
        1034, 1066, 1100, 1123, 1147, 1170, 1193, 1216, 1239, 1261,
        1283, 1304, 1325, 1346, 1366, 1386, 1405, 1424, 1442, 1458,
        1474, 1489, 1500, 1508, 1517, 1526, 1535, 1544, 1553, 1562,
        1571, 1580, 1588, 1597, 1606, 1615, 1623, 1632, 1641, 1649,
        1658, 1666, 1675, 1683, 1692, 1700, 1709, 1717, 1725, 1734,
        1742, 1750, 1758, 1767, 1775, 1783, 1791, 1799, 1807, 1814,
        1822, 1830, 1837, 1845, 1852, 1860, 1867, 1874, 1881, 1888,
        1894, 1900
    ];
    var STAMINA=[
        88, 90, 91, 93, 95, 97, 98, 100, 102, 104,
        106, 108, 110, 112, 115, 117, 119, 121, 124, 126,
        129, 131, 133, 136, 139, 141, 144, 146, 149, 152,
        154, 157, 160
    ];

    //HP
    if(VIT<8){
        hp.value=HEALTH[0];
    }else{
        hp.value=HEALTH[VIT-8];
    }
    //STAMINA, EQUIP LOAD
    if(END>40){
        stamina.value=STAMINA[STAMINA.length-1];
    }else if(END<8){
        stamina.value=STAMINA[0];
        equipLoad.value=48;
    }
    else{
        stamina.value=STAMINA[END-8];
        equipLoad.value=48+(END-8);
    }
}

function calcAttackParameter(weapon){
    var RHweaponName1=weapon.rightHand1.value;
    var RHweaponName2=weapon.rightHand2.value;
    var LHweaponName1=weapon.leftHand1.value;
    var LHweaponName2=weapon.leftHand2.value;
    var detailedStatus=document.getElementById("detailedStatus");

    detailedStatus.rightHandAttack1.value=weaponParameter[RHweaponName1].pysicalAttackPower;
    detailedStatus.rightHandAttack2.value=weaponParameter[RHweaponName2].pysicalAttackPower;
    detailedStatus.leftHandAttack1.value=weaponParameter[LHweaponName1].pysicalAttackPower;
    detailedStatus.leftHandAttack2.value=weaponParameter[LHweaponName2].pysicalAttackPower;
}

function calcPoiseParameter(armor){
    var poise=document.getElementById("poise");
    var headArmorName=armor.head.value;
    var chestArmorName=armor.chest.value;
    var handsArmorName=armor.hands.value;
    var legsArmorName=armor.legs.value;

    poise.value=armorParameter[headArmorName].poise
        +armorParameter[chestArmorName].poise
        +armorParameter[handsArmorName].poise
        +armorParameter[legsArmorName].poise;
}

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