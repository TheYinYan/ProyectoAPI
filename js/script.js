"use strict";

const botonPersonajes = document.getElementById('btnPersonajes');
const botonFrutas = document.getElementById('btnFrutas');
const container = document.getElementById('resultados');

document.addEventListener("DOMContentLoaded", () => {
    console.log("One Piece API lista");

    if (botonPersonajes) {
        botonPersonajes.addEventListener('click', mostrarPersonajes);
    }

    if (botonFrutas) {
        botonFrutas.addEventListener('click', mostrarFrutas);
    }
});

function mostrarPersonajes() {
    container.innerHTML = '<div class="loader">Cargando personajes...</div>';

    fetch('https://api.api-onepiece.com/v2/characters/en')
        .then(response => response.json())
        .then(data => {
            crearCartelPersonajes(data);
        })
        .catch(error => {
            container.innerHTML = '<div class="error-message">Error al cargar personajes</div>';
        });
}

function mostrarFrutas() {
    container.innerHTML = '<div class="loader">Cargando frutas...</div>';

    fetch('https://api.api-onepiece.com/v2/fruits/en')
        .then(response => response.json())
        .then(data => {
            crearCartelFrutas(data);
        })
        .catch(error => {
            container.innerHTML = '<div class="error-message">Error al cargar frutas</div>';
        });
}

function formatearBounty(bounty) {
    if (!bounty || bounty === '0') return '???';
    const num = parseInt(bounty);
    if (!isNaN(num)) {
        if (num >= 1000) return (num / 1000).toFixed(1) + 'B';
        return num + 'M';
    }
    return bounty;
}

function crearCartelPersonajes(personajes) {
    container.innerHTML = '';
    
    personajes.forEach(p => {
        const cartel = document.createElement('div');
        cartel.className = 'wanted-poster';
        
        cartel.innerHTML = `
            <div class="wanted-header">
                <span class="wanted-stamp">WANTED</span>
                <div class="wanted-dead-or-alive">DEAD OR ALIVE!</div>
            </div>
            
            <div class="wanted-image placeholder">
                <div class="avatar-placeholder">
                    <span class="avatar-emoji">${p.name?.charAt(0).toUpperCase() || '?'}</span>
                </div>
            </div>
            
            <div class="wanted-name">${(p.name || '???').toUpperCase()}</div>
            
            <div class="wanted-bounty">
                <span class="bounty-label">REWARD</span>
                <span class="bounty-amount">${formatearBounty(p.bounty)}฿</span>
            </div>
            
            <div class="wanted-details">
                <div class="detail-row">
                    <span class="detail-label">Ocupación:</span>
                    <span class="detail-value">${p.job || 'Pirata'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Afiliación:</span>
                    <span class="detail-value">${p.crew?.name || 'Sin afiliación'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Altura:</span>
                    <span class="detail-value">${p.size || '?'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Edad:</span>
                    <span class="detail-value">${p.age || '?'}</span>
                </div>
            </div>
            
            <div class="wanted-footer">
                <span class="marine-seal">MARINE</span>
                <span class="world-government">WORLD GOVERNMENT</span>
            </div>
        `;
        container.appendChild(cartel);
    });
}

function crearCartelFrutas(frutas) {
    container.innerHTML = '';
    
    frutas.forEach(f => {
        const cartel = document.createElement('div');
        cartel.className = 'wanted-poster fruit-poster';
        
        const descripcion = f.description ? 
            (f.description.length > 100 ? f.description.substring(0, 100) + '...' : f.description) 
            : 'Sin descripción';
        
        cartel.innerHTML = `
            <div class="wanted-header">
                <span class="wanted-stamp fruit-stamp">DEVIL FRUIT</span>
                <div class="wanted-dead-or-alive">⚡ POWER</div>
            </div>
            
            <div class="wanted-image placeholder fruit-placeholder">
                <div class="fruit-avatar">
                    <span class="fruit-emoji">🍎</span>
                </div>
            </div>
            
            <div class="wanted-name">${(f.name || '???').toUpperCase()}</div>
            
            <div class="wanted-bounty fruit-bounty">
                <span class="bounty-label">TYPE</span>
                <span class="bounty-amount">${f.type || 'Desconocido'}</span>
            </div>
            
            <div class="wanted-details">
                <div class="detail-row description">
                    
                    <span class="detail-value">${descripcion}</span>
                </div>
            </div>
            
            <div class="wanted-footer">
                <span class="marine-seal">GRAND LINE</span>
                <span class="world-government">ONE PIECE</span>
            </div>
        `;
        container.appendChild(cartel);
    });
}