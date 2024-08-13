import maximo

def test_maximo():
  assert maximo.maximo(3, 4) == 4

def test_maximo():
  assert maximo.maximo(-1, 5) == 5

def test_maximo():
  assert maximo.maximo(-1234, -123) == -123

def test_maximo():
  assert maximo.maximo(14568, 0) == 14568
