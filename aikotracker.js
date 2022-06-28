let map = L.map('map').setView([-19.130248, -45.97332], 10.5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
let marker1 = L.marker([-19.151801,-46.007759], {title: 'Maquina:CA-001'}).addTo(map);
marker1.bindPopup('<p onclick="select(0)">Status: Operando</p>').openPopup();
marker2 = L.marker([-19.195811,-45.825157], {title: 'Maquina:CA-002'}).addTo(map);
marker2.bindPopup('<p onclick="select(1)">Status: Operando</p>').openPopup();
marker3 = L.marker([-19.134644,-46.087206], {title: 'Maquina:CA-003'}).addTo(map);
marker3.bindPopup('<p onclick="select(2)">Status: Operando</p>').openPopup();
marker4 = L.marker([-18.978732,-45.918204], {title: 'Maquina:CA-004'}).addTo(map);
marker4.bindPopup('<p onclick="select(3)">Status: Operando</p>').openPopup();
marker5 = L.marker([-19.027071,-46.004085], {title: 'Maquina:HV-1001'}).addTo(map);
marker5.bindPopup('<p onclick="select(4)">Status: Manutenção</p>').openPopup();
marker6 = L.marker([-19.287676,-46.082552], {title: 'Maquina:HV-1002'}).addTo(map);
marker6.bindPopup('<p onclick="select(5)">Status: Operando</p>').openPopup();
marker7 = L.marker([-19.091692,-46.14889], {title: 'Maquina:GT-2001'}).addTo(map);
marker7.bindPopup('<p onclick="select(6)">Status: Operando</p>').openPopup();
marker8 = L.marker([-19.172475,-46.080028], {title: 'Maquina:GT-2002'}).addTo(map);
marker8.bindPopup('<p onclick="select(7)">Status: Operando</p>').openPopup();
marker9 = L.marker([-19.163073,-46.06338], {title: 'Maquina:GT-2003'}).addTo(map);
marker9.bindPopup('<p onclick="select(8)">Status: Operando</p>').openPopup();

let jsonEquipStatusHistoric = require('./equipmentStateHistory.json');


function select(n){
    let res = document.getElementById('res');
    
    if(n == 0){
        res.innerHTML = `Você selecionou o caminhão de carga identificado como CA-001, segue abaixo seu histórico de utilizações:</br>
        
        `;
    }
        
    }
    

const jsonEquip = require('./equipment.json'); 
const jsonEquipStatus = require('./equipmentState.json');
const jsonEquipModel = require('./equipmentModel.json');
const jsonEquipPosHistorc = require('./equipmentPositionHistory.json');

