const vagasStorage = 'vagasStorage'
let getVagasStorage = JSON.parse(window.localStorage.getItem(vagasStorage)) || false;
const vagas = [
    {
        empresa: 'empresa 1',
        cargo: 'cargo 1',
        email: 'email1@email.com',
        telefone: '(11)11111-1111',
        descricao: 'descricao 1 descricao descricao descricao descricao descricao descricao descricao ',
        requisitos: 'requisitos 1 requisitos requisitos requisitos requisitos requisitos ',
        salario: 1200,
        tipo: 'PRESENCIAL',
        beneficios: 'beneficios 1 beneficios beneficios beneficios beneficios beneficios',
        aitva: true,
        moderada: true,
        img: '../img/americanas.webp'
    },
    {
        empresa: 'empresa 2',
        cargo: 'cargo 2',
        email: 'email2@email.com',
        telefone: '(22)22222-2222',
        descricao: 'descricao 2 descricao descricao descricao descricao descricao descricao descricao ',
        requisitos: 'requisitos 2 requisitos requisitos requisitos requisitos requisitos ',
        salario: 2200,
        tipo: 'PRESENCIAL',
        beneficios: 'beneficios 2 beneficios beneficios beneficios beneficios beneficios',
        aitva: true,
        moderada: true,
        img: '../img/havam.webp'
    },
    {
        empresa: 'empresa 3',
        cargo: 'cargo 3',
        email: 'email3@email.com',
        telefone: '(33)33333-3333',
        descricao: 'descricao 3 descricao descricao descricao descricao descricao descricao descricao ',
        requisitos: 'requisitos 3 requisitos requisitos requisitos requisitos requisitos ',
        salario: 3200,
        tipo: 'PRESENCIAL',
        beneficios: 'beneficios 3 beneficios beneficios beneficios beneficios beneficios',
        aitva: true,
        moderada: true,
        img: '../img/honda.jpg'
    },
    {
        empresa: 'empresa 4',
        cargo: 'cargo 4',
        email: 'email4@email.com',
        telefone: '(44)44444-4444',
        descricao: 'descricao 4 descricao descricao descricao descricao descricao descricao descricao ',
        requisitos: 'requisitos 4 requisitos requisitos requisitos requisitos requisitos ',
        salario: 4200,
        tipo: 'PRESENCIAL',
        beneficios: 'beneficios 4 beneficios beneficios beneficios beneficios beneficios',
        aitva: true,
        moderada: true,
        img: '../img/jhon-deere.webp'
    },
    {
        empresa: 'empresa 5',
        cargo: 'cargo 5',
        email: 'email5@email.com',
        telefone: '(55)55555-5555',
        descricao: 'descricao 5 descricao descricao descricao descricao descricao descricao descricao ',
        requisitos: 'requisitos 5 requisitos requisitos requisitos requisitos requisitos ',
        salario: 5200,
        tipo: 'PRESENCIAL',
        beneficios: 'beneficios 5 beneficios beneficios beneficios beneficios beneficios',
        aitva: true,
        moderada: true,
        img: '../img/pernabucanas.webp'
    },
    {
        empresa: 'empresa 6',
        cargo: 'cargo 6',
        email: 'email6@email.com',
        telefone: '(66)66666-6666',
        descricao: 'descricao 6 descricao descricao descricao descricao descricao descricao descricao ',
        requisitos: 'requisitos 6 requisitos requisitos requisitos requisitos requisitos ',
        salario: 6200,
        tipo: 'PRESENCIAL',
        beneficios: 'beneficios 6 beneficios beneficios beneficios beneficios beneficios',
        aitva: true,
        moderada: true,
        img: '../img/wolksvagen.jpeg'
    },
]

function showJobs() {
    if (!getVagasStorage){
        window.localStorage.setItem(vagasStorage, JSON.stringify(vagas));
        getVagasStorage = JSON.parse(window.localStorage.getItem(vagasStorage));
    }

    const vagasSec = document.getElementById('vagas-ctn');

    for (const x of getVagasStorage) {
        const card = document.createElement('div');
        card.classList.add('card');
        // card.style.backgroundImage = `url(${x.img})`;
        // card.style.backgroundRepeat = 'no-repeat';
        // card.style.backgroundSize = 'cover';

        const front = document.createElement('div');
        front.classList.add('front');

        const contentFront = document.createElement('div');
        contentFront.classList.add('content-front');

        const back = document.createElement('div');
        back.classList.add('back');

        // const img = document.createElement('img');
        // img.classList.add('img')

        const empresa = document.createElement('h2');
        empresa.classList.add('empresa');
        empresa.innerHTML = x.empresa;

        const cargo = document.createElement('p');
        cargo.classList.add('cargo');
        cargo.innerHTML = x.cargo;

        const email = document.createElement('p');
        email.classList.add('email');
        email.innerHTML = 'E-mail: ' + x.email

        const telefone = document.createElement('p');
        telefone.classList.add('telefone');
        telefone.innerHTML = 'Telefone: ' + x.telefone;

        const descricao = document.createElement('p');
        descricao.classList.add('descricao');
        descricao.innerHTML = 'Descrição: ' + x.descricao;

        const requisitos = document.createElement('p');
        requisitos.classList.add('requisitos');
        requisitos.innerHTML = 'Requisitos: ' + x.requisitos;

        const salario = document.createElement('p');
        salario.classList.add('salario');
        salario.innerHTML = 'Salário: ' +  (x.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

        const tipo = document.createElement('p');
        tipo.classList.add('tipo');
        tipo.innerHTML = x.tipo;

        const beneficios = document.createElement('p');
        beneficios.classList.add('beneficio');
        beneficios.innerHTML = 'Benefícios: ' + x.beneficios;

        vagasSec.append(card);

        card.append(front);
        card.append(back);

        // front.append(img);
        front.append(contentFront)

        contentFront.append(empresa);
        contentFront.append(cargo);
        contentFront.append(tipo);

        // back.append(empresa);
        // back.append(tipo);
        // back.append(cargo);
        back.append(email);
        back.append(telefone);
        back.append(descricao);
        back.append(requisitos);
        back.append(salario);
        back.append(beneficios);
    }

    const cardHover = document.getElementsByClassName('card');

    for (const x of cardHover) {
        x.addEventListener('mouseenter', (e) => {
            e.target.children[1].className = ('back active')
            // console.log(e.target.children[1].className);
        });
        // x.addEventListener('mouseleave', (e) => {
        //     e.target.children[1].className = ('back')
        //     console.log(e.target.children[1].className);
        // });
    }
}