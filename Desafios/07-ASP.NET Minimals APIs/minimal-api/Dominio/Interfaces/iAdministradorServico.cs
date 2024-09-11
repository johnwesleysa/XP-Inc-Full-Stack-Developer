using minimal_api.Migrations;
using MinimalApi.DTOs;

namespace MinimalApi.Dominio.Interfaces;

public interface  IAdministradorServico
{
    Administrador Login(LoginDTO loginDTO);
}