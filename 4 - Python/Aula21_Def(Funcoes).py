def soma(x, y):
    print(x + y);


def calcularIMC(peso, altura):
    imc = peso/(altura**2);
    phrase = "IMC: " + str(imc) + '\n';
    
    if(imc < 18.5):
        phrase += "Magreza";
    elif(imc >= 18.5 and imc <= 24.9):
        phrase += "Normal";
    elif(imc > 24.9 and imc <= 29.9):
        phrase += "Sobrepeso";
    elif(imc > 29.9 and imc <= 39.9):
        phrase += "Obesidade";
    else:
        phrase += "Obesidade Grave";
    
    return phrase;

print(calcularIMC(63, 1.81));