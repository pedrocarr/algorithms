
def eh_primo(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False

    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i += 2

    return True



def test_eh_primo():
    assert eh_primo(100) == False
def test_eh_primo():
    assert eh_primo(13) == True
def test_eh_primo():
    assert eh_primo(25) == False
def test_eh_primo():
    assert eh_primo(113) == True



a = {
    'a': 0, 'b':0
}

a['a'] = 3

print(a)

