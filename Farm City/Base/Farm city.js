console.log("Farm city upgrade=1.023");
let Materiais = {
//const Metais = [Ferro;  , Cobre;  , Estanho; , Ouro;  , Prata; ];
//const Sementes = [Morangos;  , Centeio;  , Trigo;  , Batata;  , Arroz;  , Melancia;  , Maçã;  , Laranja;  , Beterraba;  , Limão;  , Melão;  , Grão;  , Açúcar; ];
//const Plantas = [Morangueiro;  , Centeio;  , Trigo;  , Batateira;  , Arroz;  , Melancieira;  , Macieira;  , Laranjeira;  , Beterraba;  , Limoeiro;  , Melãozeiro;  , Grão;  , Cana de Açúcar; ];
//const CanteirosAquecidos = [1m2;  , 2m2;  , 3m2;  , 4m2;  , 5m2;  , 10m2; ];
//const CanteirosFrios = [1m2;  , 2m2;  , 3m2;  , 4m2;  , 5m2;  , 10m2; ];
//const Estufas = [1m2;  , 2m2;  , 3m2;  , 4m2;  , 5m2;  , 10m2; ];
//const Canteiros = [CanteirosAquecidos , Estufas , CanteirosFrios];
//const Quinta = [Sementes , Plantas , Canteiros];
//const SeresVivos = [Vaca;  , Ovelha;  , Cabra;  , Galinha; ];
//const MateriaisDeAnimais = [Leite de Vaca;  , Leite de Ovelha;  , Leite de Cabra;  , Lã;  , Ovos; ];
//const Animais = [SeresVivos , MateriaisDeAnimais];
//const Prossessados = [Chocolate;  , Queijo;  , Açúcar Refinado;  , Pão; ];
//const Moradias = [Pequena;  , Média;  , Grande;  , Mansão; ];
//const Prédios = [30 pessoas;  , 50 pessoas;  , 70 pessoas;  , 100 pessoas;  , 150 pessoas;  , 200 pessoas;  , 250 pessoas;  , 300 pessoas;  , 350 pessoas;  , 400 pessoas;  , 450 pessoas;  , 500 pessoas;  , 600 pessoas;  , 700 pessoas;  , 800 pessoas;  , 900 pessoas; ];
//const Edifícios = [Moradias , Prédios];
//const Materiais = [Metais , Quinta , Animais , Prossessados];
}
function Loja(){
    window.location.assign("../Loja/Loja.html");
}
function Sorte(){
    setInterval(
    function SorteRepetir(){
        let númeroDaSorte = Math.floor(Math.random()*9999999);
        console.log(númeroDaSorte);
        let número = prompt("Escreve um número com, no máximo 7 algarismos");
        if (número === númeroDaSorte){
        Dinheiro+=1000000000;
        console.log("a")
    }
},1800000);
}
Sorte()


