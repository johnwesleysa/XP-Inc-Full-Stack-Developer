using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploPOO.Models
{
    public class ContaCorrente
    {
        public ContaCorrente(int numeroConta, decimal saldoInicial)
        {
            NumeroConta = numeroConta;
            saldo = saldoInicial;
        }
        public int NumeroConta { get; set; }
        private decimal saldo { get; set; }

        public void Sacar(decimal valor)
        {
            if(valor <= saldo)
            {
                saldo -= valor;
                Console.WriteLine("Saque realizado com sucesso");

            }
            else 
            {
                Console.WriteLine("Saldo Indisponível");
            }
        }

        public void ExibirSaldo()
        {
            Console.WriteLine($"Seu saldo disponpivel é {saldo}");
        }
    }
}