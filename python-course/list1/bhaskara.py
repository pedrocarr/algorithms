import math
a = float(input("Digite o valor de a: "))
b = float(input("Digite o valor de b: "))
c = float(input("Digite o valor de c: "))



delta = b ** 2 - 4 * a * c

if delta > 0:
    x1 = (-b + math.sqrt(delta)) / (2 * a)
    x2 = (-b - math.sqrt(delta)) / (2 * a)
    print('A primeira raiz é:', x1)
    print('A segunda raiz é:', x2)
elif delta == 0:
    x1 = -b / (2 * a)
    print('A raiz desta equação é:', x1)
else:
    print('Esta equação não possui raízes reais.')



