using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExemploPOO.Models;

namespace ExemploPOO.Modeulo
{
    //Selando a classe professor para que outra não herde apartir dela
    public class Professor : Pessoa
    {
        public Professor ()
        {

        }
        public Professor (string nome) : base(nome)
        {
            
        }
        public decimal Salario { get; set; }

        public override void Apresentar()
        {
            Console.WriteLine($"Olá, tudo bem?\nSou o professor {Nome}, tenho {Idade} anos.\nMeu salário atual é {Salario}");
        }
    }
}