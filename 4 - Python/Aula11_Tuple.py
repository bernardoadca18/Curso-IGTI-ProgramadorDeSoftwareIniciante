# Tuple = ()
# Permite Duplicados

bandas = ("Yes", "King Crimson", "Genesis", "Pink Floyd", "Fleetwood Mac", "Cream");
saldos = (500.00, 1200.00, 1000.00, 60.00, 50000.00);
nums = (25, 36, 50, 45, 22, 33, 89);

print(bandas[1]);
print(bandas[-50:50]);

bandas_dup = ("Yes", "King Crimson", "Genesis", "Pink Floyd", "Fleetwood Mac", "Cream", "Yes", "King Crimson", "Genesis", "Pink Floyd", "Fleetwood Mac", "Cream");
print(bandas_dup);

# Juntar Tuples
tupla_junto = bandas + nums;
print(tupla_junto);
print(type(tupla_junto));

nums_dup = (25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89, 25, 36, 50, 45, 22, 33, 89);
print(nums_dup.count(45));
print(nums_dup.count(50));