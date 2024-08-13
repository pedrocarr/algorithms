def eh_primo(k):
    if k % 2 != 0 and k % 3 != 0:
        return True
    else:
        return False


def maior_primo(n):
    if n < 2:
      raise ValueError("numero menor que 2")
    else:
      i = 0
      x = 0
      while i <= n:
          x = i
          return i





maior_primo(-1)


eh_primo(13)

def test_eh_primo():
    assert eh_primo(97) == 97


def test_eh_primo():
    assert eh_primo(7) == 7


def test_eh_primo():
    assert eh_primo(13) == "Tente outro numero"
