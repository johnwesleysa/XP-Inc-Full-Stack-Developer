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
            Console.WriteLine($"Alunos do curso de: {Nome}");
            foreach(Pessoa aluno in Alunos)
            {
                Console.WriteLine($"{aluno.NomeCompleto}");
            }
        }
    }
}