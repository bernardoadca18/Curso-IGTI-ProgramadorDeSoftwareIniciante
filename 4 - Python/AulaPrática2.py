# Equações segundo grau

# Lambda

x = lambda valor_1, valor_2 : valor_1 * valor_2

print(x(45, 12));


x = lambda y : y + 30

print(x(10))


x = lambda x, y, z : x + y + z

print(x(1,2,3))


def nome_funcao(n):
    return lambda a : a * n

multiplicador = nome_funcao(6)

print(multiplicador(10))