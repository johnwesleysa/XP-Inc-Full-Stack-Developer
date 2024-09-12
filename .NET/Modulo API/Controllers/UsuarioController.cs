using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

//Comandos para usar o EntityFramework
//O primeiro só instala uma vez por máquina, os outros tem que instalar em todo projeto.
//1° dotnet tool install --global dotnet-ef
//2° dotnet add package Microsoft.EntityFrameworkCore.Design
//3° dotnet add package Microsoft.EntityFrameworkCore.SqlServer

//Comando para dar o migrations
//dotnet-ef migrations add CriacaoTabelaContato
//Aplicando no banco de dados
//dotnet-ef database update

namespace Modulo_API.Controllers
{
    //Criando uma Controller para minha API
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        [HttpGet("ObterDataHoraAtual")]
        public IActionResult ObterDataHora()
        {
            var obj = new {
                Data = DateTime.Now.ToLongDateString(),
                Hora = DateTime.Now.ToShortTimeString()
            };

            return Ok(obj);
        }

        //EndPoint como parâmetro
        [HttpGet("Apresentar/{nome}")]
        public IActionResult Apresentar(string nome)
        {
            var mensagem = $"Olá {nome}, seja bem vindo!";
            return Ok(new { mensagem });
        }
    }
}

