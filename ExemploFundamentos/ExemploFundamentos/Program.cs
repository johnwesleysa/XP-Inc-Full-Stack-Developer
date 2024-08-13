using ExemploFundamentos.Common.Models;


List<string> listaString = new List<string>();

listaString.Add("John");
listaString.Add("eoqqqqq");
listaString.Add("fala tu");
listaString.Add("sadfasdf");

for (int cont = 0; cont < listaString.Count; cont++){
    Console.WriteLine($"{listaString[cont]}");
}

int contList = 0;
foreach(string item in listaString)
{
    Console.WriteLine($"Contador {contList} e o {item}");
    contList++;
}






























// int[] arrayInteiros = new int[3];

// arrayInteiros[0] = 72;
// arrayInteiros[1] = 41;
// arrayInteiros[2] = 42;


// int[] arrayInteirosDobrados = new int [arrayInteiros.Length*2];
// Array.Copy(arrayInteiros, arrayInteirosDobrados, arrayInteiros.Length);

// Array.Resize(ref arrayInteiros, arrayInteiros.Length * 2);


// //Percorrendo array com o for
// for(int cont = 0; cont < arrayInteiros.Length; cont++)
// {
//     Console.WriteLine($"{arrayInteiros[cont]}");
// }

// //Percorrendo com foreach
// int contadorForeach = 0;
// foreach(int valor in arrayInteiros)
// {
//     Console.WriteLine($"Posição {contadorForeach} = {valor}");
//     contadorForeach++;
// }


// Console.WriteLine($"{ar}");
















































// Pessoa pessoa1 = new Pessoa();
// pessoa1.Idade = 13;
// pessoa1.Nome = "JOhn";
// pessoa1.NomeRepresentanteLegal = "Paulo";
// pessoa1.Apresentar();


































// int opcao;
// bool exibirMenu = true;

// while(exibirMenu)
// {
//     Console.WriteLine("Digite a sua opção: ");
//     Console.WriteLine("1 - Cadastrar cliente: ");
//     Console.WriteLine("2 - Buscar cliente: ");
//     Console.WriteLine("3 - Apagar cliente: ");
//     Console.WriteLine("4 - Encerrar Programa: ");

//     opcao = Convert.ToInt32(Console.ReadLine());

//     switch(opcao)
//     {
//         case 1:
//             Console.WriteLine("Cadastro de cliente: ");
//             break;

//         case 2:
//             Console.WriteLine("Busca de cliente: ");
//             break;

//         case 3:
//             Console.WriteLine("Apagar cliente: ");
//             break;

//         case 4:
//             Console.WriteLine("Encerrar Programa");
//             exibirMenu = false;
//             //Environment.Exit(0);
//             break;
        
//         default:
//             Console.WriteLine($"Digite um valor de 1 a 4");
//             break;
//     }
// }













































// int soma= 0, numero = 0;



// do
// {
//     Console.WriteLine("Digite um número: ");
//     numero = Convert.ToInt32(Console.ReadLine());
//     soma += numero;

// } while(numero != 0);

// Console.WriteLine($"Soma: {soma}");



























// int numero = 5;
// int contador = 1;
// // for (int cont = 1; cont <= 10; cont++){
// //     Console.WriteLine($"{numero} * {cont} = {numero * cont}");
// // }

// while(contador <= 10){
//     Console.WriteLine($"{numero} * {contador} = {numero * contador}");
//     contador ++;
//     if (contador == 6){
//         break;
//     }
// }













































// Calculadora calc = new Calculadora();

// calc.Somar(10,30);
// calc.Subtrair(10,30);
// calc.Divisao(10,30);
// calc.Multiplicar(10,30);
// calc.Potenciacao(3,3);
// calc.Seno(30);
// calc.Coseno(30);
// calc.Tangente(30);
// calc.RaizQuadrada(9);

// int numero = 10;

// Console.WriteLine(numero);

// Console.WriteLine("Incrementando o 10");
// numero++;
// Console.WriteLine(numero);

// Console.WriteLine("Decrementando o 10");
// numero--;
// Console.WriteLine(numero);








































// string apresentacao = "Olá";
// int qtd = 1;
// double altura = 1.80;
// decimal preco = 1.80M;
// bool condicao = true;

// //Convertendo valores
// int a = Convert.ToInt32(null);
// Console.WriteLine("Convertendo valores: " + a);

// //Convertendo para string
// string b = "5".ToString();
// Console.WriteLine(b);

// //TryParse
// string c = "15";

// int d = 0;

// int.TryParse(c, out d);
// Console.WriteLine(d);
// Console.WriteLine("Conversão realizada com sucesso");



// //Usando Date Time
// Console.WriteLine("\n\n\n");
// DateTime dataAtual = DateTime.Now.AddMonths(5);
// Console.WriteLine("Data Atual: " + dataAtual.ToString("dd/MM/yyyy HH:mm"));

// //Varaiveis em C#
// Console.WriteLine("\n\n\n");
// Console.WriteLine("Apresentação: " + apresentacao);
// Console.WriteLine("Quantidade: " + qtd);
// Console.WriteLine("Altura: " + altura.ToString("0.00"));
// Console.WriteLine("Preço: " + preco);
// Console.WriteLine("Condição: " + condicao);


// Console.WriteLine("\n\n\n");
// Pessoa pessoa1 = new Pessoa();

// pessoa1.Nome = "John Alencar";
// pessoa1.Idade = 24;
// pessoa1.NomeRepresentanteLegal = "Paulo Alencar";
// pessoa1.Apresentar();

// Console.WriteLine("\n\n\n");
// Console.WriteLine("\n\n\n");
// Console.WriteLine("\n\n\n");

// int quantidadeEmEstoque = 10;
// int quantidadeCompra = 4;

// if (quantidadeEmEstoque >= quantidadeCompra){
//     quantidadeEmEstoque -= quantidadeCompra;
//     Console.WriteLine("Venda Realizada.");
//     Console.WriteLine("Estoque atual: " + quantidadeEmEstoque);
// } 
// else {
//     Console.WriteLine("Desculpe não temos a qtd solicita em estoque.");
//     Console.WriteLine("Estoque atual: " + quantidadeEmEstoque);

// }

// Console.WriteLine("\n\n\n");
// Console.WriteLine("\n\n\n");
// Console.WriteLine("\n\n\n");

// Console.WriteLine("Digite uma letra: ");
// string letra = Console.ReadLine();

// if (letra == "a" ||
//     letra == "e" ||
//     letra == "i" ||
//     letra == "o" ||
//     letra == "u")
//     {
//         Console.WriteLine("Vogal");
//     }
//     else
//     {
//         Console.WriteLine("Não é uma Vogal");
//     }

// switch (letra) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         Console.WriteLine("Vogal");
//         break;
    
//     default:
//         Console.WriteLine("Não é uma vogal");
//         break;
// }
