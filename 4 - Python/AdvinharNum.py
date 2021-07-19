import random as r

n = r.randint(1, 99);

advinhe = int(input("Tente advinhar um número entre 1 e 99: "))

while(n != advinhe):
    print()

    if(advinhe < n):
        print("O número é maior que esse")
        advinhe = int(input("Tente novamente: "))
    elif(advinhe > n):
        print("O número é menor que esse")
        advinhe = int(input("Tente novamente: "))
    else:
        print("Você acertou!")
        break
    print()