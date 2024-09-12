using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.VisualBasic;

namespace ExemploExplorando.Models
{
    public class Curso
    {   
        public string Nome { get; set; }

        //Aqui estou criando uma propiedade da classe curso que recebe uma lista de pessoas da classe Pessoa
        public List<Pessoa> Alunos { get; set; }

        //O método abaixo não está retornando nada, pois é do tipo void.
        public void AdicionarAluno(Pessoa aluno)
        {
            Alunos.Add(aluno);
        }

        public int ObterQuantidadeDeAlunosMatriculados()
        {
            int quantidade = Alunos.Count;
            return quantidade;

        }

        public bool RemoverAluno(Pessoa aluno)
        {
            return Alunos.Remove(aluno);
            
        }

        public void ListarAlunos()
        {
            //Aqui temos uma interpolação de string, o primeiro sinal é ter o $ antes da string e temos a junção da string com uma propiedade
            Console.WriteLine($"Alunos do curso de: {Nome}");
            for (int count = 0; count < Alunos.Count; count++)
            {
                string texto = $"N° - {count + 1} {Alunos[count].NomeCompleto}";
                Console.WriteLine($"{texto}");
            }
        }
    }
}