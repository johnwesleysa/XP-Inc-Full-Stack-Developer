using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploPOO.Models
{
    public class Pessoa
    {
        public Pessoa()
        {
            
        }
        public Pessoa (string nome)
        {
            Nome = nome;
        }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public string Email { get; set; }
        
        //Adicionando polimorfismo
        //preciso adicionar o virtual antes do método
        public virtual void Apresentar()
    {
        Console.WriteLine($"Meu nome é {Nome} e tenho {Idade} anos");
    }

    }

    
}