linhas = "============================================";

class funcionario:
    def __init__(self, name, salary):
        self.name = name;
        self.salary = salary;

    def calcularInss(self):
        discount = 0;
        if(self.salary <= 1100):
            discount = self.salary * 0.075;
        elif(self.salary > 1100 and self.salary <= 2203.48):
            discount = (1100 * 0.075) + ((self.salary -1100.01) * 0.09);
        elif(self.salary > 2203.48 and self.salary <= 3305.22):
            discount = (1100 * 0.075) + ((2203.48 - 1100.01) * 0.09) + ((self.salary - 2203.49) * 0.12);
        elif(self.salary > 3305.22 and self.salary <= 6433.57):
            discount = (1100 * 0.075) + ((2203.48 - 1100.01) * 0.09) + ((3305.22 - 2203.49) * 0.12) + ((self.salary - 3305.23) * 0.14);
        else:
            discount = 751.99;
        return round(discount, 2);

    def calcularIrrf(self):
        salaryD = self.salary - self.calcularInss();
        discount = 0;
        if(salaryD <= 1903.98):
            discount = 0;
        elif(salaryD > 1903.98 and salaryD <= 2826.65):
            discount = (salaryD * 0.075) - 142.80;
        elif(salaryD > 2826.65 and salaryD <= 3751.05):
            discount = (salaryD * 0.15) - 354.80;
        elif(salaryD > 3751.05 and salaryD <= 4664.68):
            discount = (salaryD * 0.225) - 636.13;
        else:
            discount = (salaryD * 0.275) - 869.36;
        return round(discount, 2);

    def calcularLiquido(self):
        return self.salary - self.calcularInss() - self.calcularIrrf();

    def informacoes(self):
        funcionario = "\nFuncionário: " + self.name + '\n';
        salario = "Salário Bruto: " + str(self.salary) + '\n';
        descontoInss = "Desconto INSS: " + str(self.calcularInss()) + '\n';
        descontoIrrf = "Desconto IRRF: " + str(self.calcularIrrf()) + '\n';
        salarioLiquido = "Salário Líquido: " + str(self.calcularLiquido()) + '\n';
        return linhas + funcionario + salario + descontoInss + descontoIrrf + salarioLiquido + linhas;

entrada = 1;
employees = [];


while (int(entrada) != 0):
    print(linhas + linhas);
    print("1 - Cadastrar funcionário.");
    print("2 - Exibir funcionário pelo índice.");
    print("3 - Exibir todos os funcionários cadastrados e seus respectivos índices.");
    print("0 - Sair.");
    print(linhas + linhas);
    entrada = input("O que deseja fazer ?\n");
    if(int(entrada) == 1):
        nome = input("Insira o nome do funcionário: ");
        salario = input("Insira o salário bruto do funcionário: ");
        fun = funcionario(nome, int(salario));
        employees.append(fun);
        print("Funcionário cadastrado com sucesso!")
    elif(int(entrada) == 2):
        indice = input("Insira o índice do funcionário: ");
        print(employees[int(indice)].informacoes());
    elif(int(entrada) == 3):
        for i in range(len(employees)):
            print(linhas);
            print("Índice: " + str(i));
            print("Funcionário: " + employees[i].name);
            print(linhas);

f = open("Employees.txt", "w");
for i in range(len(employees)):
    f.write(str(employees[i].informacoes()));

f.close();