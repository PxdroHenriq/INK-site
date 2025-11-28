function fazerLogin() {
    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("senha").value.trim();
    const erro = document.getElementById("erro");

    if (user === "Pedro" && pass === "Pedro") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainPage").style.display = "block";
    } else {
        erro.textContent = "Usuário ou senha incorretos. Tente novamente.";
    }
}
const projetos = [
    {titulo: "App Mobile UI/UX Design", autor: "Ana Silva", img: "/img/UIUX Design.PNG", categoria: "UI/UX", desc: "Design de interface mobile com foco em experiência do usuário."},
    {titulo: "Digital Art Illustration", autor: "Pedro Santos", img: "/img/Digital Art.jpg", categoria: "Ilustração", desc: "Ilustração digital vibrante e detalhada."},
    {titulo: "Corporate Brand Identity", autor: "Beatriz Rodrigues", img: "/img/Corparate Art.jpg", categoria: "Branding", desc: "Identidade visual corporativa com materiais de papelaria."},
    {titulo: "Modern Furniture Design", autor: "Fernando Alves", img: "/img/Modern furniture.jpg", categoria: "3D", desc: "Design moderno de móveis e interiores."},
    {titulo: "Website Portfolio", autor: "Julia Lima", img: "/img/Portfolio.jpg", categoria: "Web Design", desc: "Portfolio web minimalista e elegante."},
    {titulo: "Logo Concept", autor: "Rafael Souza", img: "/img/Logo.jpg", categoria: "Branding", desc: "Criação de logotipo com tipografia personalizada."},
    {titulo: "App Dashboard UI", autor: "Lucas Pereira", img: "/img/App.PNG", categoria: "UI/UX", desc: "Interface intuitiva para dashboards e analytics."},
    {titulo: "3D Product Render", autor: "Mariana Costa", img: "/img/3D.jpg", categoria: "3D", desc: "Render 3D realista de produto comercial."},
    {titulo: "Poster Art", autor: "João Mendes", img: "/img/Poster.jpg", categoria: "Ilustração", desc: "Poster artístico inspirado em arte urbana."},
    {titulo: "Photography Series", autor: "Carla Ribeiro", img: "/img/Foto.jpg", categoria: "Fotografia", desc: "Série de fotografias conceituais e criativas."},
    {titulo: "Illustration Concept", autor: "Marcos Dias", img: "/img/Illu.jpg", categoria: "Ilustração", desc: "Ilustração conceitual para publicidade."},
    {titulo: "Brand Redesign", autor: "Sofia Almeida", img: "/img/RE.jpg", categoria: "Branding", desc: "Redesign de identidade visual de marca."}
];

const grid = document.getElementById("grid");
const projectPage = document.getElementById("projectPage");
const projectTitle = document.getElementById("projectTitle");
const projectDesc = document.getElementById("projectDesc");
const projectImg = document.getElementById("projectImg");
const botoes = document.querySelectorAll("#categorias button");

function mostrarProjetos(filtro = "Todos") {
    grid.innerHTML = "";
    const filtrados = filtro === "Todos" ? projetos : projetos.filter(p => p.categoria === filtro);
    filtrados.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${p.img}">
        <div class="card-info">
        <h3>${p.titulo}</h3>
        <p class="autor">${p.autor}</p>
        </div>`;
    card.addEventListener("click", () => abrirProjeto(p));
    grid.appendChild(card);
    });
}

botoes.forEach(btn => {
    btn.addEventListener("click", () => {
    botoes.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    mostrarProjetos(btn.dataset.cat);
    });
});

function abrirProjeto(p) {
    document.querySelector("main").style.display = "none";
    projectPage.style.display = "block";
    projectTitle.innerText = p.titulo;
    projectDesc.innerText = p.desc;
    projectImg.src = p.img;
}

function voltar() {
    document.querySelector("main").style.display = "grid";
    projectPage.style.display = "none";
}

mostrarProjetos();