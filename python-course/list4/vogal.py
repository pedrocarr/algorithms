def vogal(n):
    capitalize_n = n.upper()
    vogal = ['A', 'E', 'I', 'O', 'U']
    for x in vogal:
        if x == capitalize_n:
            return True
    return False

# def test_vogal():
#     assert vogal('e') == True
# def test_vogal():
#     assert vogal('A') == True
# def test_vogal():
#     assert vogal('w') == True
# def test_vogal():
#     assert vogal('B') == False
# def test_vogal():
#     assert vogal('c') == False
# def test_vogal():
#     assert vogal('l') == False
