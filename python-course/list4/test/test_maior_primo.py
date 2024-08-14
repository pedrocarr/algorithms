def eh_primo(k):
    if k < 2:
        return False
    if k == 2:
        return True
    if k % 2 == 0:
        return False
    i = 3
    while i * i <= k:
        if k % i == 0:
            return False
        i += 2
    return True

def maior_primo(n):
    if n < 2:
        raise ValueError("O número deve ser maior ou igual a 2")
    while n >= 2:
        if eh_primo(n):
            return n
        n -= 1






# maior_primo(7)
# maior_primo(29)
# maior_primo(100)
# maior_primo(18)


# eh_primo(13)

# def test_eh_primo():
#     assert eh_primo(97) == 97


# def test_eh_primo():
#     assert eh_primo(7) == 7


# def test_eh_primo():
#     assert eh_primo(13) == "Tente outro numero"
