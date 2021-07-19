from random import randint

t = ["Pedra", "Papel", "Tesoura"]

jogador = False

while(jogador == False):
    computador = t[randint(0,2)]
    jogador = input("Pedra, Papel, Tesoura ?\n")

    print("Jogador: " + jogador)
    print("Computador: " + computador)

    if(jogador.upper() == computador.upper()):
        print("Empate")
    elif(jogador.upper() == "PEDRA"):
        if(computador.upper() == "PAPEL"):
            print("Você perdeu")
        else:
            print("Você venceu")
    elif(jogador.upper() == "PAPEL"):
        if(computador.upper() == "PEDRA"):
            print("Você venceu")
        else:
            print("Você perdeu")
    elif(jogador.upper() == "TESOURA"):
        if(computador.upper() == "PEDRA"):
            print("Você perdeu")
        else:
            print("Você venceu")
    else:
        print("Entrada inválida")

    jogador = False