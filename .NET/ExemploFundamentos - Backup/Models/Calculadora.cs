using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploFundamentos.Models
{
    public class Calculadora
    {
        public void Somar(int x, int y)
        {
            Console.WriteLine($"{x} + {y} = {x + y}");
        }

        public void Subtrair(int x, int y)
        {
            Console.WriteLine($"{x} - {y} = {x - y}");
        }

        public void Multiplicar(int x, int y)
        {
            Console.WriteLine($"{x} x {y} = {x * y}");
        }

        public void Divisao(int x, int y)
        {
            Console.WriteLine($"{x} / {y} = {x / y}");
        }

        public void Potenciacao(double x, double y)
        {
               
            Console.WriteLine($"{x} ^ {y} = {Math.Pow(x,y)}");
        }

        public void Seno(double angulo)
        {
            double radiano = angulo * Math.PI / 180;
            double seno = Math.Sin(radiano);
            Console.WriteLine($"Seno de {angulo}° é = {Math.Round(seno), 5}");
        }

        public void Coseno(double angulo)
        {
            double radiano = angulo * Math.PI / 180;
            double conseno = Math.Cos(radiano);
            Console.WriteLine($"Conseno de {angulo}° é = {Math.Round(conseno, 4)}");
        }

        public void Tangente(double angulo)
        {
            double radiano = angulo * Math.PI / 180;
            double tangente = Math.Tan(radiano);
            Console.WriteLine($"Tangente de {angulo}° é = {Math.Round(tangente, 4)}");
        }
        
        public void RaizQuadrada(double x)
        {
            double raizQuadrada = Math.Sqrt(x);
            Console.WriteLine($"Raiz Quadrada de {x} é = {Math.Round(raizQuadrada, 4)}");
        }
    }
}