using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploFundamentos.Models
{
    public class Pessoa
    {
        public string Nome { get; set; } = string.Empty;
        public int Idade { get; set; }
        public string NomeRepresentanteLegal { get; set; } = string.Empty;

        public void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {Nome}\ne tenho {Idade} anos e o meu representante legal é: \n {NomeRepresentanteLegal}");
        }
    }
}