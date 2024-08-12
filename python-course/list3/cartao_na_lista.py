meuCartao = int(input("Digite o numero do seu cartao: "))

cartaoLido = 1

encontreiMeuCartaoNaLista = False

while cartaoLido != 0 and not encontreiMeuCartaoNaLista:
    cartaoLido = int(input("Digite o numero de outro cartao: "))
    if cartaoLido == meuCartao:
        encontreiMeuCartaoNaLista = True

if (encontreiMeuCartaoNaLista):
    print("Beleza, encontrei meu cartao")
else:
    print("Puts, quero logo!!")
