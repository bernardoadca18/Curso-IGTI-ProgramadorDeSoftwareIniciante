i = 0;
while i < 10:
    print("DIA " + str(i + 1))
    trabalho = input("Você deve trabalhar hoje ?");
    dia = input("O dia está bonito ?");
    preguica = input("Você está com preguiça ?");

    if(trabalho.upper() == "SIM"):
        print("É uma pena");
    elif(trabalho.upper() == "NÃO" or trabalho.upper() == "NAO"):
        print("Aproveite o dia");

    if(dia.upper() == "SIM" and (trabalho.upper() == "NAO" or trabalho.upper() == "NÃO")):
        print("Aproveite para caminhar");
    elif((dia.upper() == "NÃO" or dia.upper() == "NAO") and (trabalho.upper() == "NÃO" or trabalho.upper() == "NAO")):
        print("Aproveite e assista um filme do tarantino");

    if(preguica.upper() == "SIM" and (trabalho.upper() == "NÃO" or trabalho.upper() == "NAO")):
        print("Aproveite para dormir");
    elif((preguica.upper() == "NAO" or preguica.upper() == "NÃO") and (trabalho.upper() == "NÃO" or trabalho.upper() == "NAO")):
        print("Que tal estudar Python e fazer Barra Fixa na praça de madrugada escutando audiolivro do Jordan Peterson na voz do cara dos Fatos Desconhecidos");
    i += 1;
