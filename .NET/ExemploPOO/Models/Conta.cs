using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploPOO.Models
{

    //Classe abstrata
    public abstract class Conta
    {

        //Protected significa que algo externo altere o saldo, mas a classe filha pode alterar
        protected decimal saldo;

        //Método absstrato não tem corpo
        public abstract void Creditar(decimal valor);

        public void ExibirSaldo()
        {
            Console.WriteLine($"Seu saldo é {saldo}");
        }
    }
}