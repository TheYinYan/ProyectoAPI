"use strict";

let espadas = [];
let barcos = [];
let diales = [];
let modo = 'espadas';
let pagina = 1;
const porPagina = 4;

document.addEventListener('DOMContentLoaded', () => {
    cargarEspadas();
    cargarBarcos();
    cargarDiales();
    
    document.getElementById('btnSiguiente').onclick = siguiente;
    document.getElementById('btnAnterior').onclick = anterior;
    document.getElementById('btnEspadas').onclick = () => cambiarModo('espadas');
    document.getElementById('btnBarcos').onclick = () => cambiarModo('barcos');
    document.getElementById('btnDiales').onclick = () => cambiarModo('diales');
});

function cargarEspadas() {
    fetch('https://api.api-onepiece.com/v2/swords/en')
        .then(res => res.json())
        .then(data => {
            espadas = data;
            if (modo === 'espadas') mostrarEspadas();
        })
        .catch(err => {
            console.log('Error Espadas:', err);
        });
}

function cargarBarcos() {
    fetch('https://api.api-onepiece.com/v2/boats/en')
        .then(res => res.json())
        .then(data => {
            barcos = data;
            if (modo === 'barcos') mostrarBarcos();
        })
        .catch(err => {
            console.log('Error Barcos:', err);
        });
}

function cargarDiales() {
    fetch('https://api.api-onepiece.com/v2/dials/en')
        .then(res => res.json())
        .then(data => {
            diales = data;
            if (modo === 'diales') mostrarDiales();
        })
        .catch(err => {
            console.log('Error Dials:', err);
        });
}

function mostrarEspadas() {
    if (espadas.length === 0) {
        document.getElementById('artefactos-container').innerHTML = '<div class="loader">No hay espadas para mostrar</div>';
        return;
    }
    
    const inicio = (pagina - 1) * porPagina;
    const items = espadas.slice(inicio, inicio + porPagina);
    const container = document.getElementById('artefactos-container');
    container.innerHTML = '';
    
    items.forEach(item => {
        container.innerHTML += `
            <div class="wanted-poster artefacto-card">
                <div class="wanted-header">
                    <span class="wanted-stamp">ESPADA</span>
                </div>
                <div class="wanted-name">${item.name || '???'}</div>
                <div class="wanted-bounty">
                    <span class="bounty-label">TIPO</span>
                    <span class="bounty-amount">${item.type || 'Meito'}</span>
                </div>
                <div class="wanted-details">
                    <div class="detail-row">
                        <span class="detail-label">Categoría:</span>
                        <span class="detail-value">${item.category || 'Desconocida'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Destruida:</span>
                        <span class="detail-value">${item.isDestroy ? '💀 Sí' : '✅ No'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Descripción:</span>
                        <span class="detail-value">${(item.description || 'Sin descripción').substring(0, 80)}${item.description?.length > 80 ? '...' : ''}</span>
                    </div>
                </div>
                <div class="wanted-footer">
                    <span class="marine-seal">MARINE</span>
                    <span class="world-government">WORLD GOVERNMENT</span>
                </div>
            </div>
        `;
    });
    
    actualizarPaginacion(espadas.length);
}

function mostrarBarcos() {
    if (barcos.length === 0) {
        document.getElementById('artefactos-container').innerHTML = '<div class="loader">No hay barcos para mostrar</div>';
        return;
    }
    
    const inicio = (pagina - 1) * porPagina;
    const items = barcos.slice(inicio, inicio + porPagina);
    const container = document.getElementById('artefactos-container');
    container.innerHTML = '';
    
    items.forEach(item => {
        container.innerHTML += `
            <div class="wanted-poster artefacto-card">
                <div class="wanted-header">
                    <span class="wanted-stamp">BARCO</span>
                </div>
                <div class="wanted-name">${item.name || '???'}</div>
                <div class="wanted-bounty">
                    <span class="bounty-label">TRIPULACIÓN</span>
                    <span class="bounty-amount">${item.crew?.name || 'Desconocida'}</span>
                </div>
                <div class="wanted-details">
                    <div class="detail-row">
                        <span class="detail-label">Función:</span>
                        <span class="detail-value">${item.job || 'Barco pirata'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Tipo:</span>
                        <span class="detail-value">${item.type || 'Desconocido'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Capitán:</span>
                        <span class="detail-value">${item.character_captain?.name || 'Desconocido'}</span>
                    </div>
                </div>
                <div class="wanted-footer">
                    <span class="marine-seal">MARINE</span>
                    <span class="world-government">WORLD GOVERNMENT</span>
                </div>
            </div>
        `;
    });
    
    actualizarPaginacion(barcos.length);
}

function mostrarDiales() {
    if (diales.length === 0) {
        document.getElementById('artefactos-container').innerHTML = '<div class="loader">No hay diales para mostrar</div>';
        return;
    }
    
    const inicio = (pagina - 1) * porPagina;
    const items = diales.slice(inicio, inicio + porPagina);
    const container = document.getElementById('artefactos-container');
    container.innerHTML = '';
    
    items.forEach(item => {
        container.innerHTML += `
            <div class="wanted-poster artefacto-card">
                <div class="wanted-header">
                    <span class="wanted-stamp">DIAL</span>
                </div>
                <div class="wanted-name">${item.name || '???'}</div>
                <div class="wanted-bounty">
                    <span class="bounty-label">TIPO</span>
                    <span class="bounty-amount">${item.type || 'Desconocido'}</span>
                </div>
                <div class="wanted-details">
                    <div class="detail-row">
                        <span class="detail-label">Traducción:</span>
                        <span class="detail-value">${item.translation || '-'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Descripción:</span>
                        <span class="detail-value">${(item.description || 'Sin descripción').substring(0, 80)}${item.description?.length > 80 ? '...' : ''}</span>
                    </div>
                </div>
                <div class="wanted-footer">
                    <span class="marine-seal">SKYPIEA</span>
                    <span class="world-government">GRAND LINE</span>
                </div>
            </div>
        `;
    });
    
    actualizarPaginacion(diales.length);
}

function actualizarPaginacion(totalItems) {
    const totalPaginas = Math.ceil(totalItems / porPagina);
    document.getElementById('pagina-info').textContent = `Página ${pagina} de ${totalPaginas || 1}`;
    document.getElementById('btnAnterior').disabled = pagina === 1;
    document.getElementById('btnSiguiente').disabled = pagina === totalPaginas || totalPaginas === 0;
}

function siguiente() {
    let total = 0;
    if (modo === 'espadas') total = espadas.length;
    else if (modo === 'barcos') total = barcos.length;
    else total = diales.length;
    
    if (pagina < Math.ceil(total / porPagina)) {
        pagina++;
        if (modo === 'espadas') mostrarEspadas();
        else if (modo === 'barcos') mostrarBarcos();
        else mostrarDiales();
    }
}

function anterior() {
    if (pagina > 1) {
        pagina--;
        if (modo === 'espadas') mostrarEspadas();
        else if (modo === 'barcos') mostrarBarcos();
        else mostrarDiales();
    }
}

function cambiarModo(nuevoModo) {
    modo = nuevoModo;
    pagina = 1;
    
    // Cambiar estilos de los botones
    document.getElementById('btnEspadas').classList.remove('activo');
    document.getElementById('btnBarcos').classList.remove('activo');
    document.getElementById('btnDiales').classList.remove('activo');
    
    if (modo === 'espadas') document.getElementById('btnEspadas').classList.add('activo');
    else if (modo === 'barcos') document.getElementById('btnBarcos').classList.add('activo');
    else document.getElementById('btnDiales').classList.add('activo');
    
    // Mostrar contenido
    if (modo === 'espadas') {
        if (espadas.length > 0) mostrarEspadas();
        else document.getElementById('artefactos-container').innerHTML = '<div class="loader">Cargando espadas...</div>';
    } else if (modo === 'barcos') {
        if (barcos.length > 0) mostrarBarcos();
        else document.getElementById('artefactos-container').innerHTML = '<div class="loader">Cargando barcos...</div>';
    } else {
        if (diales.length > 0) mostrarDiales();
        else document.getElementById('artefactos-container').innerHTML = '<div class="loader">Cargando diales...</div>';
    }
}