# List = []
# Permite duplicados

frutas = ["Banana", "Laranja", "Abacate", "Melancia", "Caju", "Abacaxi"];
saldos = [500.00, 1200.00, 1000.00, 60.00, 50000.00];
nums = [25, 36, 50, 45, 22, 33, 89];

print(frutas);
print(saldos);
print(nums);

frutas_dup = ["Banana", "Laranja", "Abacate", "Melancia", "Caju", "Abacaxi", "Banana", "Laranja", "Abacate"];

print(frutas_dup);

print(len(saldos));
print(len(nums));

variados = [10, 2.5, "Python"];
print(variados);

print(frutas[2]);
print(frutas[3]);

frutas.append("Maçã Verde");

saldos.extend(nums); 

print(frutas);
print(saldos);