idade = int(input("Digite a sua idade: "));

if(idade >= 18):
    print("Você já pode dirigir");
elif(idade < 18):
    print("Você ainda não pode dirigir");


exercicio = int(input("Quantos minutos você se exercita por dia: "));

if(exercicio < 30):
    print("Você deveria se exercitar mais");
elif(exercicio >= 30 and exercicio <= 60):
    print("Você está no caminho certo");
elif(exercicio > 60 and exercicio <= 120):
    print("Você se exercita demais");
else:
    print("Você se exercita muito");