
# x = int(input("Digite o valor de n: "))

def fatorial(n):
  if n < 0:
    return 0
  i = 1
  fat = 1
  while i <= n:
    fat = fat * i
    i += 1
  return fat



def test_fatorial0():
  assert fatorial(0) == 1

def test_fatorial_negativo():
  assert fatorial(-10) == 0

def test_fatorial2():
  assert fatorial(2) == 2

def test_fatorial0():
  assert fatorial(1) == 1

def test_fatorial5():
  assert fatorial(5) == 120

def test_fatorial5():
  assert fatorial(20) == 2432902008176640000
