# # computer science exercises

# # this is test file this function below will return True if the score is between 3.0 and 5.0

# def score(score):
#     if 3.0 <= score <= 5.0:
#         return print(True)
#     else:
#         return print(False)


# score(5.0)

# score(1.0)

# print("Olá")
# print()
# print("bom dia!")


# ### -------------------------------------------- ###

# def total_Caracteres (x, y, z):
#     return len(x)+len(y)+len(z)


# print(total_Caracteres("ab", "caralho", "porra"))


# def leitura():
#     x = -1
#     while x <= 0:
#         x = int(input("Digite um valor: "))
#     return x


# print(leitura())


# def troca(x, y):
#     aux = x
#     x = y
#     y = aux


# x = 10
# y = 20
# troca (x,y)
# print("x =", x,"e y =",y)


# def leitura():
#     x = -1
#     while x > 0:
#         x = int(input("Digite um valor: "))
#     return x

# leitura()

# def leitura():
#     x = int(input("Digite um valor: "))
#     while x <= 0:
#         x = int(input("Digite um valor: "))
#     return x


# leitura()


def main():
    spacecraft = {"name": "Pedro"}
    print(create_report(spacecraft))


def create_report(spacecraft):
    return f"""
    ===========REPORT===========

    Name: {spacecraft["name"]}

    ============================
    """


main()
