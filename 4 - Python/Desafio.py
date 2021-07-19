# Funções
def saudacao(nome):
    print("Olá" + nome + "tudo bem?");

def imc(peso, altura):
    print(peso/altura ** 2);

soma = lambda x, y: x + y;

def soma(x, y):
    print(x + y);


#Laços de Repetição
num = 0;

while(num < 20):
    print(num);
    num += 1;


for i in range(0, 10, 2):
    print(i);


numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for x in numeros:
    print(x);
    if(x == 3):
        break;


num = 0;

while(num < 10):
    num += 1;
    if(num == 6):
        continue;
    print(num);


# Chamando as Funções
# saudacao('Roberto');
# imc(80, 1.65);
