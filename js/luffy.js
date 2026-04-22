let gears = [];
let tecnicas = [];
let modo = 'tecnicas';
let pagina = 1;
const porPagina = 4;

document.addEventListener('DOMContentLoaded', () => {
    cargarLuffy();
    cargarGears();
    cargarTecnicas();

    document.getElementById('btnSiguiente').onclick = siguiente;
    document.getElementById('btnAnterior').onclick = anterior;
    document.getElementById('btnModoTecnicas').onclick = () => cambiarModo('tecnicas');
    document.getElementById('btnModoGears').onclick = () => cambiarModo('gears');
});

function cargarLuffy() {
    fetch('https://api.api-onepiece.com/v2/characters/en')
        .then(res => res.json())
        .then(data => {
            // Búsqueda flexible de Luffy
            const luffy = data.find(c =>
                c.name === 'Monkey D. Luffy' ||
                c.name === 'Luffy' ||
                c.name?.includes('Luffy') ||
                c.id === 1
            );

            if (luffy) {
                if (luffy.bounty) {
                    let bounty = luffy.bounty;
                    const num = parseInt(bounty);
                    if (!isNaN(num)) {
                        if (num >= 1000) bounty = (num / 1000).toFixed(1) + 'B';
                        else bounty = num + 'M';
                    }
                    document.getElementById('luffy-bounty').textContent = bounty + '฿';
                }
                if (luffy.job) document.getElementById('luffy-job').textContent = luffy.job;
                if (luffy.crew?.name) document.getElementById('luffy-crew').textContent = luffy.crew.name;
                if (luffy.fruit?.name) document.getElementById('luffy-fruit').textContent = luffy.fruit.name;
                if (luffy.age) document.getElementById('luffy-age').textContent = luffy.age;
                if (luffy.size) document.getElementById('luffy-size').textContent = luffy.size;
                if (luffy.name) document.getElementById('luffy-nombre').textContent = luffy.name.toUpperCase();
            }
        })
        .catch(err => console.log('Error al cargar Luffy:', err));
}

function cargarGears() {
    fetch('https://api.api-onepiece.com/v2/luffy-gears/en')
        .then(res => res.json())
        .then(data => {
            gears = data;
            mostrarGears();
        })
        .catch(err => {
            console.log('Error Gears:', err);
        });
}

function cargarTecnicas() {
    fetch('https://api.api-onepiece.com/v2/luffy-techniques/en')
        .then(res => res.json())
        .then(data => {
            tecnicas = data;
            mostrarTecnicas();
        })
        .catch(err => {
            console.log('Error Técnicas:', err);
        });
}

function mostrarGears() {
    const inicio = (pagina - 1) * porPagina;
    const items = gears.slice(inicio, inicio + porPagina);
    const container = document.getElementById('tecnicas-container');
    container.innerHTML = '';

    items.forEach(gears => {
        container.innerHTML += `
            <div class="tecnica-card">
                <h3>${gears.name}</h3>
                <span class="tecnica-tipo">${gears.count_technique || 0} técnicas</span>
                <p>${gears.description || 'Sin descripción'}</p>
            </div>
        `;
    });

    document.getElementById('pagina-info').textContent = `Página ${pagina} de ${Math.ceil(gears.length / porPagina)}`;
    document.getElementById('btnAnterior').disabled = pagina === 1;
    document.getElementById('btnSiguiente').disabled = pagina === Math.ceil(gears.length / porPagina);
}

function mostrarTecnicas() {
    const inicio = (pagina - 1) * porPagina;
    const items = tecnicas.slice(inicio, inicio + porPagina);
    const container = document.getElementById('tecnicas-container');
    container.innerHTML = '';

    items.forEach(tecnicas => {
        const gearName = tecnicas.luffy_gear?.name ? `${tecnicas.luffy_gear.name}` : 'Básica';
        container.innerHTML += `
            <div class="tecnica-card">
                <h3>${tecnicas.name}</h3>
                <span class="tecnica-tipo">${gearName}</span>
                <p>${tecnicas.description || 'Sin descripción'}</p>
            </div>
        `;
    });

    document.getElementById('pagina-info').textContent = `Página ${pagina} de ${Math.ceil(tecnicas.length / porPagina)}`;
    document.getElementById('btnAnterior').disabled = pagina === 1;
    document.getElementById('btnSiguiente').disabled = pagina === Math.ceil(tecnicas.length / porPagina);
}

function siguiente() {
    const total = modo === 'tecnicas' ? tecnicas.length : gears.length;
    if (pagina < Math.ceil(total / porPagina)) {
        pagina++;
        modo === 'tecnicas' ? mostrarTecnicas() : mostrarGears();
    }
}

function anterior() {
    if (pagina > 1) {
        pagina--;
        modo === 'tecnicas' ? mostrarTecnicas() : mostrarGears();
    }
}

function cambiarModo(nuevoModo) {
    modo = nuevoModo;
    pagina = 1;

    // Cambiar estilos de los botones
    if (modo === 'tecnicas') {
        document.getElementById('btnModoTecnicas').classList.add('activo');
        document.getElementById('btnModoGears').classList.remove('activo');
    } else {
        document.getElementById('btnModoTecnicas').classList.remove('activo');
        document.getElementById('btnModoGears').classList.add('activo');
    }

    // Mostrar contenido
    if (modo === 'tecnicas') {
        if (tecnicas.length > 0) mostrarTecnicas();
        else document.getElementById('tecnicas-container').innerHTML = '<div class="loader">Cargando técnicas...</div>';
    } else {
        if (gears.length > 0) mostrarGears();
        else document.getElementById('tecnicas-container').innerHTML = '<div class="loader">Cargando gears...</div>';
    }
}