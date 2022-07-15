var pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
};
var paula = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
var maria = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
var jessica = {
    nome: "Jessica",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
    materias: ["Matemática discreta", "programação"]
};
