numero = input("Digite um numero e eu te darei a soma de todos os digitos: ")



soma = 0

indice = 0


while indice < len(numero):
    if numero[indice].isdigit():
        soma += int(numero[indice])

        indice += 1

print(soma)







