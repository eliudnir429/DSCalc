function calculate(){
    console.log('calculate() was called!');
    var basicStatus=document.getElementById("basicStatus");
    var weapon=document.getElementById("weapon");
    var armor=document.getElementById("armor");

    calcMainParameter(basicStatus, armor);
    calcSubParameter(armor);
    calcAttackParameter(weapon);
    calcDefenceParameter(armor);
}

function calcMainParameter(basicStatus, armor){
    var detailedStatus=document.getElementById("detailedStatus");
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
        detailedStatus.hp.value=HEALTH[0];
    }else{
        detailedStatus.hp.value=HEALTH[VIT-8];
    }
    //STAMINA, EQUIP LOAD
    if(END>40){
        detailedStatus.stamina.value=STAMINA[STAMINA.length-1];
        detailedStatus.equipLoad.value=48+(END-8);
    }else if(END<8){
        detailedStatus.stamina.value=STAMINA[0];
        detailedStatus.equipLoad.value=48;
    }
    else{
        detailedStatus.stamina.value=STAMINA[END-8];
        detailedStatus.equipLoad.value=48+(END-8);
    }
}

function calcSubParameter(armor){
    var detailedStatus=document.getElementById("detailedStatus");
    var headArmorName=armor.head.value;
    var chestArmorName=armor.chest.value;
    var handsArmorName=armor.hands.value;
    var legsArmorName=armor.legs.value;
    var RHweaponName1=weapon.rightHand1.value;
    var RHweaponName2=weapon.rightHand2.value;
    var LHweaponName1=weapon.leftHand1.value;
    var LHweaponName2=weapon.leftHand2.value;
    var equipRatio;

    //use equip load
    detailedStatus.usingEquipLoad.value=armorParameter[headArmorName].weight
    +armorParameter[chestArmorName].weight
    +armorParameter[handsArmorName].weight
    +armorParameter[legsArmorName].weight
    +weaponParameter[RHweaponName1].weight
    +weaponParameter[RHweaponName2].weight
    +weaponParameter[LHweaponName1].weight
    +weaponParameter[LHweaponName2].weight;
    //equipload ratio
    equipRatio=Math.floor((detailedStatus.usingEquipLoad.value
        /detailedStatus.equipLoad.value*100)*10)/10;
    detailedStatus.equipLoadRatio.value=equipRatio;
    //poise
    detailedStatus.poise.value=armorParameter[headArmorName].poise
    +armorParameter[chestArmorName].poise
    +armorParameter[handsArmorName].poise
    +armorParameter[legsArmorName].poise;
}

function calcAttackParameter(weapon){
    var detailedStatus=document.getElementById("detailedStatus");
    var RHweaponName1=weapon.rightHand1.value;
    var RHweaponName2=weapon.rightHand2.value;
    var LHweaponName1=weapon.leftHand1.value;
    var LHweaponName2=weapon.leftHand2.value;

    detailedStatus.rightHandAttack1.value=weaponParameter[RHweaponName1].physicalAttackPower;
    detailedStatus.rightHandAttack2.value=weaponParameter[RHweaponName2].physicalAttackPower;
    detailedStatus.leftHandAttack1.value=weaponParameter[LHweaponName1].physicalAttackPower;
    detailedStatus.leftHandAttack2.value=weaponParameter[LHweaponName2].physicalAttackPower;
}

function calcDefenceParameter(armor){
    var detailedStatus=document.getElementById("detailedStatus");
    var headArmorName=armor.head.value;
    var chestArmorName=armor.chest.value;
    var handsArmorName=armor.hands.value;
    var legsArmorName=armor.legs.value;

    //def
    detailedStatus.physicalDefence.value=armorParameter[headArmorName].physicalDefence
    +armorParameter[chestArmorName].physicalDefence
    +armorParameter[headArmorName].physicalDefence
    +armorParameter[legsArmorName].physicalDefence;
    detailedStatus.vsStrike.value=armorParameter[headArmorName].vsStrike
    +armorParameter[chestArmorName].vsStrike
    +armorParameter[headArmorName].vsStrike
    +armorParameter[legsArmorName].vsStrike;
    detailedStatus.vsSlash.value=armorParameter[headArmorName].vsSlash
    +armorParameter[chestArmorName].vsSlash
    +armorParameter[headArmorName].vsSlash
    +armorParameter[legsArmorName].vsSlash;
    detailedStatus.vsThrust.value=armorParameter[headArmorName].vsThrust
    +armorParameter[chestArmorName].vsThrust
    +armorParameter[headArmorName].vsThrust
    +armorParameter[legsArmorName].vsThrust;

    detailedStatus.magicalDefence.value=armorParameter[headArmorName].magicalDefence
    +armorParameter[chestArmorName].magicalDefence
    +armorParameter[headArmorName].magicalDefence
    +armorParameter[legsArmorName].magicalDefence;
    detailedStatus.flameDefence.value=armorParameter[headArmorName].flameDefence
    +armorParameter[chestArmorName].flameDefence
    +armorParameter[headArmorName].flameDefence
    +armorParameter[legsArmorName].flameDefence;
    detailedStatus.thunderDefence.value=armorParameter[headArmorName].thunderDefence
    +armorParameter[chestArmorName].thunderDefence
    +armorParameter[headArmorName].thunderDefence
    +armorParameter[legsArmorName].thunderDefence;
}