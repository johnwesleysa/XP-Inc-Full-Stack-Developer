using Microsoft.EntityFrameworkCore;
using minimal_api.Migrations;
using MinimalApi.Dominio.Entidades;
using MinimalApi.Dominio.Interfaces;
using MinimalApi.DTOs;
using MinimalApi.Infraestrutura.Db;

namespace minimal_api.Dominio.Servicos;

public class AdministradorServico : IAdministradorServico
{
    private readonly DbContexto _contexto;
    public AdministradorServico(DbContexto contexto)
    {
        _contexto = contexto;
    }
    public bool Login(LoginDTO loginDTO)
    {
        var qtd = _contexto.Administradores.Where(a => a.Email == loginDTO.Email && a.Senha == loginDTO.Senha).Count();
        
        return qtd > 0;
        
            
        
    }

    Admistrador IAdministradorServico.Login(LoginDTO loginDTO)
    {
        throw new NotImplementedException();
    }

    Administrador IAdministradorServico.Login(LoginDTO loginDTO)
    {
        throw new NotImplementedException();
    }
}