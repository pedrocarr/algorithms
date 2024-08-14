import math

def delta(a,b,c):
    return b ** 2 - 4 * a * c

def main():
    a = float(input("Digite o valor de a: "))
    b = float(input("Digite o valor de b: "))
    c = float(input("Digite o valor de c: "))
    imprime_raizes(a,b,c)


def imprime_raizes(a,b,c):
    d = delta(a,b,c)
    if d > 0:
      x1 = (-b + math.sqrt(d)) / (2 * a)
      x2 = (-b - math.sqrt(d)) / (2 * a)
      print('A primeira raiz é:', x1)
      print('A segunda raiz é:', x2)
    elif d == 0:
      x1 = -b / (2 * a)
      print('A raiz desta equação é:', x1)
    else:
      print('Esta equação não possui raízes reais.')



main()





