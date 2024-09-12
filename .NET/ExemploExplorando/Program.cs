using ExemploExplorando.Models;
using System.Data;
using System.Globalization;
using Newtonsoft.Json;



//desserialização
// ler o arquivo json e passa para string
string conteudoArquivo = File.ReadAllText("Arquivos/vendas.json");


// cria e usando a lib newtonsoft, desserializa os dados em json para objeto
List<Venda> listaVenda = JsonConvert.DeserializeObject<List<Venda>>(conteudoArquivo);

foreach(Venda venda in listaVenda)
{
    Console.WriteLine($"ID: {venda.Id}, Nome: {venda.Produto} ,Preço: {venda.Preco}, Data de Venda: {venda.DataVenda}");
}





















//estudar serialização.

// DateTime dataAtual = DateTime.Now;

// List<Venda> listaVendas = new List<Venda>();

// Venda v1 = new Venda(id: 123456, produto: "Sapato", preco: 10M, dataVenda: dataAtual);
// Venda v2 = new Venda(id: 159487, produto: "Sutiã", preco: 54.4M, dataVenda: dataAtual);

// listaVendas.Add(v1);
// listaVendas.Add(v2);
 
// string serializado = JsonConvert.SerializeObject(listaVendas, Formatting.Indented);

// //criando e escrevendo dentro do arquivo
// File.WriteAllText("Arquivos/vendas.json", serializado);


// Console.WriteLine(serializado);





































// //if Ternário
// int a = 21;
// bool ehPar = false;


// //if ternário é muito loko boy
// ehPar = a % 2 == 0;
// Console.WriteLine($"O número {a} é " + (ehPar ? "par" : "ímpar"));






// if (a%2 == 0)
// {
//     Console.WriteLine($"O número {a} é par");
// }
// else
// {
//     Console.WriteLine($"O número {a} é ímpar");

// }

























// //Deconstruct
// Pessoa p1 = new Pessoa("John", "Alencar");

// (string nome, string sobrenome) = p1;

// Console.WriteLine($"{nome} {sobrenome}".ToUpper());










//retornando tuplas de metodos
// LeituraArquivo arquivo = new LeituraArquivo();

// //Aplicando descarte em quantidadeLinhas para descartar esse valor
// var (sucesso, linhas, _) = arquivo.LerArquivo("Arquivos/arquivoLeitura.txt");

// if (sucesso)
// {
//     Console.WriteLine("\n");
//     foreach(string linha  in linhas)
//     {
//         Console.WriteLine(linha);
//     }
// }
// else
// {
//     Console.WriteLine("Não foi possível encontrar o arquivo");
// }



















// Tupla
// (int, string, string, decimal) tupla = (24, "John", "Alencar", 10.5M);
// var outroExemploTupla = Tuple.Create(1, "Leonardo", "Buta", 1.80M);

// Console.WriteLine(outroExemploTupla);





















// //Dicionarios em C#
// Dictionary<string, string> estados = new Dictionary<string, string>();


// estados.Add("SP", "São Paulo");
// estados.Add("PE", "Pernambuco");
// estados.Add("MG", "Minas Gerais");

// foreach(var i in estados)
// {
//     Console.WriteLine($"Chave: {i.Key} e o valor: {i.Value}");
// }

// estados.Remove("MG");
// estados["SP"] = "SPPPPPPPPPPP";

// foreach(var i in estados)
// {
//     Console.WriteLine($"Chave: {i.Key} e o valor: {i.Value}");
// }

// string chave = "bnm";
// Console.WriteLine($"Verificando o elemento {chave}");

// if (estados.ContainsKey(chave))
// {
//     Console.WriteLine("Valor existente");
// }
// else
// {
//     Console.Write($"Não existe, é seguro adicionar a chave: {chave}");
// }











// //a pilha diferente da pilha segue o LIFO e naço o FIFO
// Stack<int> pilha = new Stack<int>();

// pilha.Push(1);
// pilha.Push(2);
// pilha.Push(13);
// pilha.Push(4);
// pilha.Push(5);
// pilha.Push(6);
// pilha.Push(7);

// pilha.Pop();

// foreach(int i in pilha)
// {
//     Console.WriteLine(i);
// }

























// //Criando uma fila
// Queue<int> fila = new Queue<int>();

// //Adicionando elementos na minha fila
// fila.Enqueue(2);
// fila.Enqueue(34);
// fila.Enqueue(42);
// fila.Enqueue(51);

// foreach(int i in fila)
// {
//     Console.WriteLine(i);
// }

// Console.WriteLine("\n");
// fila.Enqueue(10);


// //Sempre remove o primeiro da fila.
// fila.Dequeue();
// foreach(int i in fila)
// {
//     Console.WriteLine(i);
// }


























// new ExemploExcecao().Metodo1();



















// //Estudar exceção
// //Try tenta executar um bloco de codigo, caso de algum erro ele passa para o catch
// try{

//     //Lendo Arquivos
//     string[] linhas = File.ReadAllLines("Arquivos/arquivo_Leitura.txt");

//     foreach (string linha in linhas )
//     {
//         Console.WriteLine(linha);
//     }

// } 

// //posso usar varios catch para cada tipo de exceção
// catch(FileNotFoundException ex)
// {
//     Console.WriteLine($"Arquivo não encontrado. {ex.Message}");
// }

// catch(Exception ex)
// {
//     Console.WriteLine($"Ocorreu uma exceção generica {ex.Message}");
// } 
// finally
// {
//     Console.WriteLine("Chegou aqui");
// }










































// //passando uma string para o tipo datetime
// string dataString = "2022-04-17 18:00";

// bool verificarData = DateTime.TryParseExact(
//                         dataString, "yyyy-MM-dd HH:mm", 
//                         CultureInfo.InvariantCulture, 
//                         DateTimeStyles.None, 
//                         out DateTime data
//                       );

// if (verificarData)
// {
//     Console.WriteLine(data);
// }
// else{
//     Console.WriteLine("Vata Inválida!");
// }




























//Usando o padrão dos estados unidos.
// CultureInfo.DefaultThreadCurrentCulture = new CultureInfo("pt-BR");

// decimal moeda = 1582.40M;

// //estudar interpolaçã
// Console.WriteLine(moeda.ToString("C", CultureInfo.CreateSpecificCulture("en-US")));
// Console.WriteLine(moeda.ToString("C3"));

// double porcentagem = .10;
// long n1 = 81994132082;
// Console.WriteLine(porcentagem.ToString("p"));
// Console.WriteLine(n1.ToString("##-#-####-####"));

// DateTime data = DateTime.Now;

// //Letras maiusculas ou minusculas são valores diferente.
// Console.WriteLine($"{data.ToString("dd/MM/yyyy HH:mm")}");









// //Se concatenar int com string, a int vira string
// string numero1 = "10";
// int numero2 = 20;
// string resultado = numero2 + numero1;

// Console.WriteLine($"{resultado}");


























// Pessoa p1 = new Pessoa(nome: "John",sobrenome: "Wesley");
// Pessoa p2 = new Pessoa(nome: "Maria",sobrenome: "Alencar");


// Curso cursoDeIngles = new Curso();
// cursoDeIngles.Nome = "Inglês";
// cursoDeIngles.Alunos = new List<Pessoa>();

// cursoDeIngles.AdicionarAluno(p1);
// cursoDeIngles.AdicionarAluno(p2);
// cursoDeIngles.ListarAlunos();





































// Pessoa p1 = new Pessoa();

// p1.Nome = "John";
// p1.Sobrenome = "Alencar";
// p1.Idade = 20;
// p1.Apresentar();
