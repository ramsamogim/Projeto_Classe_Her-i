//Escrevendo as classes de um Jogo
//**O Que deve ser utilizado**
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções
//- Classes e Objetos

//## Objetivo:
//Crie uma classe generica que represente 
//um herói de uma aventura e que possua 
//as seguintes propriedades:
//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )

//além disso, deve ter um método chamado 
//atacar que deve atender os seguientes 
//requisitos:

//- exibir a mensagem: "o {tipo} atacou 
//usando {ataque}")
//- aonde o {tipo} deve ser concatenando o
// tipo que está na propriedade da classe
//- e no {ataque} deve seguir uma descrição
// diferente conforme o tipo, seguindo a 
//tabela abaixo:

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

//## Saída

//Ao final deve se exibir uma mensagem:
//- "o {tipo} atacou usando {ataque}"
//  ex: mago atacou usando magia
//  guerreiro atacou usando espada
//

//classe herói e seus atributos genéricos
class criarHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // função atacar
    atacar(){
        let ataque;
      
        // Determinando o tipo de ataque conforme o tipo do herói
        switch(this.tipo){
            case 'mago':
            ataque = 'magia';
            break;
            
            case 'guerreiro':
                ataque = 'espada';
            break;
            case 'monge':
                ataque = 'artes marciais';
            break;

            case 'ninja':
                ataque = 'shuriken';
            break;
            default 
                ataque = 'ataque desconhecido';    
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }

}

// criar herói conforme o usuário deseja
const heroi1 = new criarHeroi('Aragorn', 35, 'guerreiro');
const heroi2 = new criarHeroi('Gandalf', 200, 'mago');

//chamada do método atacar para cada herói

heroi1.atacar();
heroi2.atacar();

