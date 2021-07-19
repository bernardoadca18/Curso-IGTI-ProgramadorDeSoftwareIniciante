# Set = {}
# Set Não Permite Valores Duplicados

cidades = {"Belo Horizonte", "Manaus", "Fortaleza", "Natal"};

print(cidades);
print(type(cidades));

cidades_dup = {"Belo Horizonte", "Manaus", "Fortaleza", "Natal", "Belo Horizonte", "Manaus", "Fortaleza", "Natal", "Belo Horizonte", "Manaus", "Fortaleza", "Natal", "Belo Horizonte", "Manaus", "Fortaleza", "Natal"};
print(cidades_dup);
print(type(cidades_dup));

print("Manaus" in cidades);
print("Recife" in cidades);

cidades.add("Porto Alegre");
print(cidades);

cidades_2 = {"Recife", "Salvador", "Campo Grande"};
cidades.update(cidades_2);
print(cidades);