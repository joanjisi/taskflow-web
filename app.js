// TaskFlow Web - app.js
'use strict';

const APP_NAME = 'TaskFlow';
let tasks = [];

function addTask(title) { tasks.push({ title, done: false }); }

// === ZONA COMPARTIDA (lineas 10-15) ===
// pendiente 1
// pendiente 2
// pendiente 3
// pendiente 4
// pendiente 5
// pendiente 6
// === FIN ZONA COMPARTIDA ===

function listTasks() { return tasks; }
console.log(APP_NAME + ' iniciado');
