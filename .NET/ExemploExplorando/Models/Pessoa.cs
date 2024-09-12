using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploExplorando.Models
{
    //Construtores
    public class Pessoa
    {
        public Pessoa()
        {

        }

        public Pessoa(string nome, string sobrenome)
        {
            Nome = nome;
            Sobrenome = sobrenome;
        }

        //out siginifca um parametor de saida
        public void Deconstruct(out string nome, out string sobrenome)
        {

            nome = Nome;
            sobrenome = Sobrenome;
        }

        //Propiedades da classe Pessoa
        //set serve para inserir valores na propiedade da classe
        //get serve para utilizar os valores da propiedade
        //Estudar encapsulamento

        //A palavra private significa que ele só é acessado dentro da classe Pessoa e quem está fora não consegue acessar ele.
        //Ela está protejida pois ela só pode ser acessada e receber um valor após passar pela propiedade Pessoa e passar pelas validações
        //abaixo temos um campo e não uma propiedade pois ela não tem get nem set
        private string _nome;
        private int _idade;


        //A palavra public significa que qualquer um pode acessar essa propiedade
        public string Nome 
        { 
            //Posso utilizar o Body Expressions para diminuir o código digitado, o exemplo de baixo utilizando o return, ficaria assim: get => _nome.ToUpper();
            //Utilizando o sinal de => ele já entende que tem que retornar o valor a seguir.
            //Mais utilizado para validações simples.
            get
            {
                return _nome.ToUpper();
            }
            
            set
            {
                if(value == "")
                {
                    //Uma exceção é algo que não permite que o código continue até que alguém trate a exceção
                    //throw "joga pra fora" essa linha é tipo um continue do python
                    throw new ArgumentException("O nome não pode ser vazio!");
                }
                //Caso o valor não seja null ele armazena o nome em _nome
                _nome = value;
            }
            }

        public string Sobrenome { get; set; } 

        //Abaixo estou utilizando body expressions para atribuir uma string a minha propiedade através do get.Não é obrigatório utilizar o set ou get sempre, posso usar apenas um dos dois dependento da necessidade
        public string NomeCompleto => $"{Nome} {Sobrenome}".ToUpper();

        public int Idade { 

            get => _idade;

            set
            {
                if (value < 0)
                {
                    throw new ArgumentException ("A idade não pode ser menor que 0");
                }

                _idade = value;
            }

            }

        

        //Método
        public void Apresentar()
        {
            Console.Write($"Olá, meu nome é {NomeCompleto} e tenho {Idade} anos!");
        }
    }
}