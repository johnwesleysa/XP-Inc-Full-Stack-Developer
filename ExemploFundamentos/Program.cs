using ExemploFundamentos.Models;

string apresentacao = "Olá";
int qtd = 1;
double altura = 1.80;
decimal preco = 1.80M;
bool condicao = true;

//Convertendo valores
int a = Convert.ToInt32(null);
Console.WriteLine("Convertendo valores: " + a);

//Convertendo para string
string b = "5".ToString();
Console.WriteLine(b);

//TryParse
string c = "15";

int d = 0;

int.TryParse(c, out d);
Console.WriteLine(d);
Console.WriteLine("Conversão realizada com sucesso");



//Usando Date Time
Console.WriteLine("\n\n\n");
DateTime dataAtual = DateTime.Now.AddMonths(5);
Console.WriteLine("Data Atual: " + dataAtual.ToString("dd/MM/yyyy HH:mm"));

//Varaiveis em C#
Console.WriteLine("\n\n\n");
Console.WriteLine("Apresentação: " + apresentacao);
Console.WriteLine("Quantidade: " + qtd);
Console.WriteLine("Altura: " + altura.ToString("0.00"));
Console.WriteLine("Preço: " + preco);
Console.WriteLine("Condição: " + condicao);


Console.WriteLine("\n\n\n");
Pessoa pessoa1 = new Pessoa();

pessoa1.Nome = "John Alencar";
pessoa1.Idade = 24;
pessoa1.NomeRepresentanteLegal = "Paulo Alencar";
pessoa1.Apresentar();

Console.WriteLine("\n\n\n");
Console.WriteLine("\n\n\n");
Console.WriteLine("\n\n\n");

int quantidadeEmEstoque = 10;
int quantidadeCompra = 4;

if (quantidadeEmEstoque >= quantidadeCompra){
    quantidadeEmEstoque -= quantidadeCompra;
    Console.WriteLine("Venda Realizada.");
    Console.WriteLine("Estoque atual: " + quantidadeEmEstoque);
} 
else {
    Console.WriteLine("Desculpe não temos a qtd solicita em estoque.");
    Console.WriteLine("Estoque atual: " + quantidadeEmEstoque);

}

Console.WriteLine("\n\n\n");
Console.WriteLine("\n\n\n");
Console.WriteLine("\n\n\n");

Console.WriteLine("Digite uma letra: ");
string letra = Console.ReadLine();

if (letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u")
    {
        Console.WriteLine("Vogal");
    }
    else
    {
        Console.WriteLine("Não é uma Vogal");
    }

switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        Console.WriteLine("Vogal");
        break;
    
    default:
        Console.WriteLine("Não é uma vogal");
        break;
}
