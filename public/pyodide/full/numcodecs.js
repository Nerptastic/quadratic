var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="numcodecs.data";var REMOTE_PACKAGE_BASE="numcodecs.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","numcodecs-0.9.1-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","numcodecs",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1389647,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,909,1742,2282,2749,3115,3675,4403,4838,5240,5647,6072,6495,6969,7372,7779,8218,8666,9098,9513,9971,10391,10807,11220,11677,12129,12545,12986,13393,14288,15302,16476,17760,19062,20481,21663,22697,23733,24830,26036,27246,28097,28942,30063,31212,32421,33647,34949,35899,37093,38530,40044,41411,42882,44276,45759,47330,48569,49751,51295,52720,54156,55744,57140,58575,60127,61628,62964,64429,65716,67422,68683,70237,71835,73505,75038,76548,78013,79395,80793,82274,83495,84963,86628,88182,89722,90994,92354,93634,95124,96561,97872,99359,100890,102122,103387,104794,106327,107637,108960,110502,112064,113248,114552,115899,117118,118123,119273,120412,121456,122342,122606,123689,124745,125993,127325,128724,129780,131244,132457,133582,134659,135750,137036,138199,139385,140391,141410,142642,144126,145829,147417,149068,150673,152301,153318,154074,155459,156852,158305,159568,161166,162727,164099,165727,167330,168970,170509,171992,173554,175125,176722,178363,179961,181525,183153,184821,186402,187961,189541,191169,192639,193820,195461,197089,198667,200241,201795,203481,204916,206471,208179,209696,211258,212807,214338,216049,217542,219042,220684,222259,223638,224976,226117,227493,228840,229753,230752,232140,233312,234633,235979,237464,239036,240378,241837,243142,244581,245708,247047,248222,249670,251102,252783,254343,255727,256891,258180,259445,260710,262034,263530,264784,266212,267480,268479,269833,271260,272811,274319,275572,276968,278483,280009,281493,282721,284081,285699,287195,288881,290425,292035,293721,295409,296981,298515,300113,301514,302984,304356,306105,307840,309309,310719,312181,313718,315364,316757,318119,319271,320639,321938,323066,324598,325871,327369,328841,330113,331589,332965,334352,335849,337125,338684,339845,341244,342631,343830,345340,346832,348280,349919,351098,352673,353852,355344,356406,357922,358975,360492,361834,363271,364740,365882,367065,368570,370025,371138,372332,373513,375138,375924,377e3,378566,379386,380932,382041,383490,385076,386085,387546,388697,390139,391232,392768,394353,395369,396753,397922,399407,400883,401874,403339,404863,406138,407376,408755,409996,411136,412643,413907,415085,416654,418123,419323,420561,422002,423243,424497,426007,427394,428664,429935,431532,432653,433900,435417,436321,437774,438603,440150,441618,442510,443945,444855,446069,447314,448764,450003,451402,453023,454549,456157,457273,458754,459955,460971,462551,463930,464928,466391,467796,468877,470356,471569,472566,474187,475596,476569,477883,479466,480313,481919,482901,484191,485860,487181,488173,489755,491151,492163,493531,494519,495805,497530,498725,499733,501348,502616,503634,505279,506882,508429,509992,511001,512602,514276,515759,517349,518921,520068,521638,522695,524209,525551,527067,528611,529932,531467,533218,534572,536107,537647,538916,540524,542030,543057,544507,545864,547317,548761,549776,551418,552911,554328,555806,557265,558840,560372,561372,562822,564174,565627,567073,568102,569764,571195,572694,574169,575636,577008,578613,580315,581909,583494,585204,586898,588256,589789,591114,592682,594153,595454,596591,598031,599562,601264,602846,604206,605405,607011,608604,610312,611666,613053,614341,615765,617366,618882,620348,621899,623486,625018,626658,628315,629533,630546,631691,633358,634488,635731,636882,638174,638986,640341,641894,643432,645143,646560,647808,649380,650914,652556,654046,655052,655982,657115,658144,659396,660704,661946,662709,664034,665084,665903,667250,668876,670161,671214,672546,673901,675073,676631,678220,679562,680467,681828,683329,684458,685907,687406,688700,690127,691622,692991,694163,695433,696750,698192,699679,701053,702433,703947,705459,706929,708263,710121,712169,714217,716265,718112,719655,721037,722478,724039,725143,726312,727285,728245,729568,730502,731948,733367,734747,736062,737490,738625,739691,740936,741738,742205,743575,744859,746031,747189,748307,749567,750766,751897,753201,754598,755943,757138,758210,759265,760507,761774,762887,764095,765668,766948,768473,769785,770942,772285,773697,775295,776887,778112,779497,780975,782500,783948,785226,786516,788120,789625,791323,792864,794450,796128,797798,799390,800957,802560,803945,805477,806722,808487,810158,811617,813011,814468,816043,817627,819042,820365,821490,822893,824200,825386,826926,828240,829711,831214,832495,833982,835362,836740,838273,839510,841076,842231,843612,845028,846191,847718,849177,850640,852261,853476,855049,856227,857753,858839,860344,861398,862922,864227,865700,867125,868342,869502,871019,872467,873648,874864,876093,877728,878554,879691,881230,882062,883619,884715,886143,887675,888665,890131,891271,892703,893812,895365,896952,897960,899356,900540,901939,903424,904424,905836,907354,908563,909776,911148,912334,913485,914950,916259,917425,918959,920443,921657,922888,924348,925581,926811,928340,929763,931032,932309,933907,935059,936234,937732,938654,940081,940933,942424,943913,944806,946224,947041,948349,949506,950980,952168,953560,955214,956719,958320,959517,960999,962192,963205,964830,966193,967198,968594,970001,971133,972588,973790,974795,976413,977859,978830,980119,981705,982587,984197,985251,986492,988139,989468,990461,991981,993434,994435,995833,996826,998106,999845,1001059,1002060,1003680,1004946,1005915,1007590,1009174,1010718,1012280,1013287,1014909,1016579,1018080,1019671,1021220,1022336,1023915,1024984,1026467,1027811,1029350,1030881,1032248,1033753,1035508,1036851,1038359,1039894,1041195,1042766,1044277,1045262,1046719,1048080,1049542,1050986,1051980,1053617,1055108,1056521,1057990,1059447,1061010,1062539,1063539,1064995,1066354,1067813,1069259,1070267,1071923,1073364,1074880,1076368,1077842,1079205,1080808,1082510,1084112,1085704,1087406,1089098,1090461,1091994,1093315,1094882,1096353,1097653,1098794,1100233,1101763,1103465,1105045,1106402,1107606,1109209,1110799,1112506,1113851,1115242,1116528,1117952,1119550,1121066,1122529,1124079,1125670,1127204,1128843,1130501,1131720,1132734,1133873,1135540,1136667,1137916,1139069,1140350,1141163,1142518,1144070,1145605,1147304,1148710,1149955,1151527,1153081,1154720,1156200,1157330,1158489,1159605,1160753,1162184,1163258,1164984,1166269,1167410,1168748,1170195,1171707,1172987,1174313,1175867,1177180,1178564,1179944,1181171,1182193,1183554,1184505,1185712,1186968,1188130,1189390,1190757,1192205,1193337,1194093,1195354,1196404,1197508,1198840,1200103,1201423,1202478,1203809,1205479,1207070,1208676,1210219,1211775,1213289,1214209,1215220,1216117,1217593,1219035,1220467,1221885,1223317,1224814,1226398,1227924,1229433,1230849,1232410,1233840,1235264,1236728,1238237,1239612,1241042,1242518,1244093,1245314,1246878,1248471,1250108,1251570,1252900,1254291,1255744,1257128,1258617,1259846,1260882,1261956,1262858,1263602,1264827,1265932,1267060,1268388,1269668,1271028,1272457,1273892,1275483,1276928,1278488,1280093,1281275,1282492,1283723,1284972,1286105,1287496,1288890,1290321,1291594,1293176,1294750,1296093,1297712,1299318,1300966,1302505,1303983,1305539,1307117,1308714,1310347,1311936,1313496,1315132,1316807,1318383,1319937,1321517,1323145,1324615,1325796,1327434,1329062,1330642,1332213,1333768,1335456,1336902,1338452,1340166,1341683,1343249,1344814,1346347,1348059,1349557,1351060,1352703,1354281,1355660,1357154,1358307,1359407,1360799,1361919,1363498,1364607,1365947,1367336,1368841,1370184,1371492,1372878,1374469,1375930,1377266,1378770,1380127,1381497,1382613,1383558,1384799,1386228,1387328,1388643],sizes:[909,833,540,467,366,560,728,435,402,407,425,423,474,403,407,439,448,432,415,458,420,416,413,457,452,416,441,407,895,1014,1174,1284,1302,1419,1182,1034,1036,1097,1206,1210,851,845,1121,1149,1209,1226,1302,950,1194,1437,1514,1367,1471,1394,1483,1571,1239,1182,1544,1425,1436,1588,1396,1435,1552,1501,1336,1465,1287,1706,1261,1554,1598,1670,1533,1510,1465,1382,1398,1481,1221,1468,1665,1554,1540,1272,1360,1280,1490,1437,1311,1487,1531,1232,1265,1407,1533,1310,1323,1542,1562,1184,1304,1347,1219,1005,1150,1139,1044,886,264,1083,1056,1248,1332,1399,1056,1464,1213,1125,1077,1091,1286,1163,1186,1006,1019,1232,1484,1703,1588,1651,1605,1628,1017,756,1385,1393,1453,1263,1598,1561,1372,1628,1603,1640,1539,1483,1562,1571,1597,1641,1598,1564,1628,1668,1581,1559,1580,1628,1470,1181,1641,1628,1578,1574,1554,1686,1435,1555,1708,1517,1562,1549,1531,1711,1493,1500,1642,1575,1379,1338,1141,1376,1347,913,999,1388,1172,1321,1346,1485,1572,1342,1459,1305,1439,1127,1339,1175,1448,1432,1681,1560,1384,1164,1289,1265,1265,1324,1496,1254,1428,1268,999,1354,1427,1551,1508,1253,1396,1515,1526,1484,1228,1360,1618,1496,1686,1544,1610,1686,1688,1572,1534,1598,1401,1470,1372,1749,1735,1469,1410,1462,1537,1646,1393,1362,1152,1368,1299,1128,1532,1273,1498,1472,1272,1476,1376,1387,1497,1276,1559,1161,1399,1387,1199,1510,1492,1448,1639,1179,1575,1179,1492,1062,1516,1053,1517,1342,1437,1469,1142,1183,1505,1455,1113,1194,1181,1625,786,1076,1566,820,1546,1109,1449,1586,1009,1461,1151,1442,1093,1536,1585,1016,1384,1169,1485,1476,991,1465,1524,1275,1238,1379,1241,1140,1507,1264,1178,1569,1469,1200,1238,1441,1241,1254,1510,1387,1270,1271,1597,1121,1247,1517,904,1453,829,1547,1468,892,1435,910,1214,1245,1450,1239,1399,1621,1526,1608,1116,1481,1201,1016,1580,1379,998,1463,1405,1081,1479,1213,997,1621,1409,973,1314,1583,847,1606,982,1290,1669,1321,992,1582,1396,1012,1368,988,1286,1725,1195,1008,1615,1268,1018,1645,1603,1547,1563,1009,1601,1674,1483,1590,1572,1147,1570,1057,1514,1342,1516,1544,1321,1535,1751,1354,1535,1540,1269,1608,1506,1027,1450,1357,1453,1444,1015,1642,1493,1417,1478,1459,1575,1532,1e3,1450,1352,1453,1446,1029,1662,1431,1499,1475,1467,1372,1605,1702,1594,1585,1710,1694,1358,1533,1325,1568,1471,1301,1137,1440,1531,1702,1582,1360,1199,1606,1593,1708,1354,1387,1288,1424,1601,1516,1466,1551,1587,1532,1640,1657,1218,1013,1145,1667,1130,1243,1151,1292,812,1355,1553,1538,1711,1417,1248,1572,1534,1642,1490,1006,930,1133,1029,1252,1308,1242,763,1325,1050,819,1347,1626,1285,1053,1332,1355,1172,1558,1589,1342,905,1361,1501,1129,1449,1499,1294,1427,1495,1369,1172,1270,1317,1442,1487,1374,1380,1514,1512,1470,1334,1858,2048,2048,2048,1847,1543,1382,1441,1561,1104,1169,973,960,1323,934,1446,1419,1380,1315,1428,1135,1066,1245,802,467,1370,1284,1172,1158,1118,1260,1199,1131,1304,1397,1345,1195,1072,1055,1242,1267,1113,1208,1573,1280,1525,1312,1157,1343,1412,1598,1592,1225,1385,1478,1525,1448,1278,1290,1604,1505,1698,1541,1586,1678,1670,1592,1567,1603,1385,1532,1245,1765,1671,1459,1394,1457,1575,1584,1415,1323,1125,1403,1307,1186,1540,1314,1471,1503,1281,1487,1380,1378,1533,1237,1566,1155,1381,1416,1163,1527,1459,1463,1621,1215,1573,1178,1526,1086,1505,1054,1524,1305,1473,1425,1217,1160,1517,1448,1181,1216,1229,1635,826,1137,1539,832,1557,1096,1428,1532,990,1466,1140,1432,1109,1553,1587,1008,1396,1184,1399,1485,1e3,1412,1518,1209,1213,1372,1186,1151,1465,1309,1166,1534,1484,1214,1231,1460,1233,1230,1529,1423,1269,1277,1598,1152,1175,1498,922,1427,852,1491,1489,893,1418,817,1308,1157,1474,1188,1392,1654,1505,1601,1197,1482,1193,1013,1625,1363,1005,1396,1407,1132,1455,1202,1005,1618,1446,971,1289,1586,882,1610,1054,1241,1647,1329,993,1520,1453,1001,1398,993,1280,1739,1214,1001,1620,1266,969,1675,1584,1544,1562,1007,1622,1670,1501,1591,1549,1116,1579,1069,1483,1344,1539,1531,1367,1505,1755,1343,1508,1535,1301,1571,1511,985,1457,1361,1462,1444,994,1637,1491,1413,1469,1457,1563,1529,1e3,1456,1359,1459,1446,1008,1656,1441,1516,1488,1474,1363,1603,1702,1602,1592,1702,1692,1363,1533,1321,1567,1471,1300,1141,1439,1530,1702,1580,1357,1204,1603,1590,1707,1345,1391,1286,1424,1598,1516,1463,1550,1591,1534,1639,1658,1219,1014,1139,1667,1127,1249,1153,1281,813,1355,1552,1535,1699,1406,1245,1572,1554,1639,1480,1130,1159,1116,1148,1431,1074,1726,1285,1141,1338,1447,1512,1280,1326,1554,1313,1384,1380,1227,1022,1361,951,1207,1256,1162,1260,1367,1448,1132,756,1261,1050,1104,1332,1263,1320,1055,1331,1670,1591,1606,1543,1556,1514,920,1011,897,1476,1442,1432,1418,1432,1497,1584,1526,1509,1416,1561,1430,1424,1464,1509,1375,1430,1476,1575,1221,1564,1593,1637,1462,1330,1391,1453,1384,1489,1229,1036,1074,902,744,1225,1105,1128,1328,1280,1360,1429,1435,1591,1445,1560,1605,1182,1217,1231,1249,1133,1391,1394,1431,1273,1582,1574,1343,1619,1606,1648,1539,1478,1556,1578,1597,1633,1589,1560,1636,1675,1576,1554,1580,1628,1470,1181,1638,1628,1580,1571,1555,1688,1446,1550,1714,1517,1566,1565,1533,1712,1498,1503,1643,1578,1379,1494,1153,1100,1392,1120,1579,1109,1340,1389,1505,1343,1308,1386,1591,1461,1336,1504,1357,1370,1116,945,1241,1429,1100,1315,1004],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_numcodecs.data")}Module["addRunDependency"]("datafile_numcodecs.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/numcodecs-0.9.1-py3.9.egg-info/top_level.txt",start:0,end:10,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs-0.9.1-py3.9.egg-info/requires.txt",start:10,end:40,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs-0.9.1-py3.9.egg-info/SOURCES.txt",start:40,end:59086,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs-0.9.1-py3.9.egg-info/dependency_links.txt",start:59086,end:59087,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs-0.9.1-py3.9.egg-info/PKG-INFO",start:59087,end:61287,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/json.py",start:61287,end:64433,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/vlen.so",start:64433,end:227669,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/__init__.py",start:227669,end:230636,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/blosc.so",start:230636,end:1146290,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/compat.py",start:1146290,end:1150846,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/fixedscaleoffset.py",start:1150846,end:1155044,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/base64.py",start:1155044,end:1155828,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/quantize.py",start:1155828,end:1158894,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/packbits.py",start:1158894,end:1160930,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/astype.py",start:1160930,end:1163185,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/version.py",start:1163185,end:1163327,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/zstd.so",start:1163327,end:1824843,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/registry.py",start:1824843,end:1826067,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/checksum32.py",start:1826067,end:1826987,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/zfpy.py",start:1826987,end:1829578,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/gzip.py",start:1829578,end:1831105,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/_shuffle.so",start:1831105,end:1928504,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/bz2.py",start:1928504,end:1929681,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/pickles.py",start:1929681,end:1930991,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/categorize.py",start:1930991,end:1934005,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/shuffle.py",start:1934005,end:1935625,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/msgpacks.py",start:1935625,end:1938196,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/compat_ext.so",start:1938196,end:1955575,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/lz4.so",start:1955575,end:2098731,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/delta.py",start:2098731,end:2101563,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/abc.py",start:2101563,end:2106104,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/zlib.py",start:2106104,end:2107156,audio:0},{filename:"/lib/python3.9/site-packages/numcodecs/lzma.py",start:2107156,end:2109290,audio:0}],remote_package_size:1393743,package_uuid:"d828ada8-46a8-4ced-9080-a962e7aa5ff1"})})();