//1. Transformação e ordenação
//Disciplinas com menos de 7 caracteres, convertidas para minúsculas e ordenadas de Z a A.

const palavras = ['Artes', 'TI', 'Desenvolvimento', 'Lógica', 'Matemática'];

const resultado = palavras
.filter(p => p.length < 7)
.map(p => p.toLowerCase())// minúscula
.sort((a, b) => b.localeCompare(a)); // ordem decrescente (Z → A)

console.log(resultado); // [ 'ti', 'artes' ]

//2. Média de avaliações
//Para cada aluno, calcular a maior nota e retornar um novo array com nome e essa nota.
const alunos = [
    { nome: "Ana", notas: [8, 9, 10] },
    { nome: "Carlos", notas: [6, 7, 5] }
    ];
    
    const maioresNotas = alunos.map(aluno => {
    return {
    nome: aluno.nome,
    maiorNota: Math.max(...aluno.notas) };
    });
    
    console.log(maioresNotas);
    

//3. Cálculo de estoque
//“compra” soma, “venda” subtrai.

const movimentacoes = [
    { operacao: 'compra', quantidade: 200 },
    { operacao: 'venda', quantidade: 50 },
    { operacao: 'compra', quantidade: 120 },
    { operacao: 'venda', quantidade: 30 }
    ];
    
    const estoqueFinal = movimentacoes.reduce((total, item) => {
    return item.operacao === 'compra'
    ? total + item.quantidade
    : total - item.quantidade;
    }, 0);
    
    console.log(estoqueFinal); // 240

//4. Atualizar valores com condição
//Adicionar 20% de bônus na carga horária somente para cursos com mais de 40h.

const cursos = [
    { nome: "Front-end", cargaHoraria: 50 },
    { nome: "Excel", cargaHoraria: 20 }
    ];
    
    const cursosAtualizados = cursos.map(curso => {
    if (curso.cargaHoraria > 40) {
    return {
    ...curso,
    cargaHoraria: curso.cargaHoraria * 1.2
    };
    }
    return curso;
    });
    
    console.log(cursosAtualizados);
    
//5. Verificação de permissões Verificar:
//• i. Se ao menos um usuário é admin
//• ii. Se todos os usuários estão ativos

const usuarios = [
    { nome: "Ana", ativo: true, admin: false },
    { nome: "Paulo", ativo: true, admin: true },
    { nome: "Joana", ativo: true, admin: false }
    ];
    
    // Verifica se ao menos um é admin
    const temAdmin = usuarios.some(usuario => usuario.admin);
    
    // Verifica se todos estão ativos
    const todosAtivos = usuarios.every(usuario => usuario.ativo);
    
    console.log("Tem administrador?", temAdmin); // true
    console.log("Todos estão ativos?", todosAtivos); // true

//6. Função buscar curso
//Buscar curso pelo nome, ou retornar “Curso não encontrado”.

const cursoD = [
    { nome: "Lógica de Programação", nivel: "Básico" },
    { nome: "React", nivel: "Intermediário" }
    ];
    
    function buscarCurso(nomeCurso) {
    const curso = cursoD.find(c => c.nome.toLowerCase() === nomeCurso.toLowerCase());
    return curso || "Curso não encontrado";
    }
    
    // Testes
    console.log(buscarCurso("React"));
    // { nome: 'React', nivel: 'Intermediário' }
    
    console.log(buscarCurso("Python"));
    // "Curso não encontrado"


    // 7 

    const tarefas = [
        { nome: 'Fazer compras', concluido: false },
        { nome: 'Lavar a roupa', concluido: true },
        { nome: 'Estudar para a prova', concluido: false },
        { nome: 'Preparar apresentação', concluido: true }
        ];
        
        const pendentes = tarefas
        .filter(tarefa => !tarefa.concluido)
        .map(tarefa => `Ação necessária: ${tarefa.nome}`);
        
        console.log(pendentes);
        /*
        [
        'Ação necessária: Fazer compras',
        'Ação necessária: Estudar para a prova'
        ]
        */