const pessoa = {
  nome: "Mariana",
  idade: 28,
  profissao: "desenvolvedora",
};

const paula: { nome: string; idade: number; profissao: string } = {
  nome: "Paula",
  idade: 25,
  profissao: "Desenvolvedora",
};

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
}

interface Estudante extends Pessoa {
  materias: string[];
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 23,
  profissao: Profissao.Desenvolvedora, // Assim não corre o risco de ficar diferente, ex começar com letra maiúscula ou não
};

const maria: Pessoa = {
  nome: "Maria",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

const jessica: Estudante = {
  nome: "Jessica",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
  materias: ["Matemática discreta", "programação"],
};
