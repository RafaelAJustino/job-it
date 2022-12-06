const vagasStorage = 'vagasStorage';

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

function anunciarVaga() {
    const tempArr = [];
    let getVagasStorage = JSON.parse(window.localStorage.getItem(vagasStorage)) || false;

    const empresa = document.getElementById('empresa').value;
    const cargo = document.getElementById('cargo').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const descricao = document.getElementById('descricao').value;
    const requisitos = document.getElementById('requisitos').value;
    const salario = document.getElementById('salario').value;
    const vaga = document.querySelector('input[name="tipo-cargo"]:checked').value;
    const beneficios = document.getElementById('beneficios').value;

    const novaVaga = {
        empresa: empresa,
        cargo: cargo,
        email: email,
        telefone: telefone,
        descricao: descricao,
        requisitos: requisitos,
        salario: salario,
        tipo: vaga,
        beneficios: beneficios,
        aitva: true,
        moderada: true,
        img: '../img/americanas.webp'
    }

    if (!getVagasStorage){
        window.localStorage.setItem(vagasStorage, JSON.stringify(vagas));
        getVagasStorage = JSON.parse(window.localStorage.getItem(vagasStorage));
    }

    const pushedVaga = tempArr.concat(getVagasStorage, novaVaga);

    if (empresa == '' || cargo == '' || !email.includes('@') || telefone.length < 14 || descricao == '' || requisitos == '' || salario == '' || vaga == '' || beneficios == '') {
        alert('ERRO! \nVerifique se os campos estão preenchidos corretamente.');
    } else {
        window.localStorage.setItem(vagasStorage, JSON.stringify(pushedVaga))
        document.location.reload(true)
    }
}

const tel = document.getElementById('telefone') // Seletor do campo de telefone

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}