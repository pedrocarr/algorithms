def partida():
    print("Bem-vindo ao jogo do NIM! Escolha:\n")
    print("1 - para jogar uma partida isolada")
    print("2 - para jogar um campeonato")
    entrada_do_usuario = int(input())
    if entrada_do_usuario == 2:
        print("Voce escolheu um campeonato!\n")
    else:
        print("Voce escolheu uma partida individual!\n")
    print("**** Rodada 1 ****\n")
    pecas_iniciais = int(input("Quantas peças?"))
    limite_pecas_por_rodada = int(input("Limite de peças por jogada\n"))

    if pecas_iniciais % (limite_pecas_por_rodada + 1) == 0:
        print("hehehe")

    else:
        print("kaka")


def usuario_escolhe_jogada():
    pass

def computador_escolhe_jogada(pecas_iniciais, limite_pecas_por_rodada):
    pass

partida()

