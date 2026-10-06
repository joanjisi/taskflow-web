// TaskFlow Web - app.js
'use strict';

const APP_NAME = 'TaskFlow';
let tasks = [];

function addTask(title) { tasks.push({ title, done: false }); }

// === ZONA COMPARTIDA (lineas 10-15) ===

// --- AUTH ---
function login(user, pass) {
  return user === 'admin' && pass === '1234';
}
function logout() { console.log('logout'); }
// --- FIN AUTH ---

// --- DASHBOARD ---
function renderDashboard() {
  document.body.innerHTML = '<h1>Panel principal</h1>';
}
function showStats() { console.log(tasks.length); }
// --- FIN DASHBOARD ---

// === FIN ZONA COMPARTIDA ===

function listTasks() { return tasks; }
console.log(APP_NAME + ' iniciado');
