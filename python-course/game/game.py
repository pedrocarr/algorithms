def campeonato():
    print("Bem-vindo ao jogo do NIM! Escolha:\n")
    print("1 - para jogar uma partida isolada")
    print("2 - para jogar um campeonato")
    entrada_do_usuario = int(input())
    if entrada_do_usuario == 2:
        print("Voce escolheu um campeonato!\n")
    elif entrada_do_usuario == 1:
        print("Voce escolheu uma partida individual!\n")
    else:
        return

    partida()



def partida():
    i = 1
    print("**** Rodada", i ,"****\n")
    pecas_iniciais = int(input("Quantas peças?"))
    limite_pecas_por_rodada = int(input("Limite de peças por jogada?"))
    if pecas_iniciais % (limite_pecas_por_rodada + 1) == 0:
        usuario_escolhe_jogada(pecas_iniciais, limite_pecas_por_rodada)
    else:
        computador_escolhe_jogada(pecas_iniciais, limite_pecas_por_rodada)

def usuario_escolhe_jogada(pecas_iniciais, limite_pecas_por_rodada):
    print("\n")
    print("Voce começa!\n")
    jogada_do_usuario = int(input("Quantas peças você vai tirar?"))
    print("Voce tirou", jogada_do_usuario, "peças.")
    pecas_restantes = pecas_iniciais - jogada_do_usuario
    print("Agora resta apenas uma peça no tabuleiro.\n")
    print("O computador tirou uma peça.")
    print("Fim do jogo! O computador ganhou!")
    return





def computador_escolhe_jogada(pecas_iniciais, limite_pecas_por_rodada):
    print("\n")
    print("Computador começa!\n")
    pecas_restantes = pecas_iniciais - 1
    print("O computador tirou uma peça.")
    print("Agora restam", pecas_restantes, "peças no tabuleiro.\n")
    jogada_do_usuario = int(input("Quantas peças você vai tirar?"))
    computador_joga = pecas_iniciais % (limite_pecas_por_rodada + 1) == 0
    while jogada_do_usuario > limite_pecas_por_rodada and not computador_joga:
        print("Oops! Jogada inválida! Tente de novo.")
        jogada_do_usuario = int(input("Quantas peças você vai tirar?"))
        if jogada_do_usuario == limite_pecas_por_rodada:
            pecas_restantes = pecas_restantes - jogada_do_usuario
            print ("Você tirou uma peça.")
            print("Agora resta apenas uma peça no tabuleiro.")
            computador_joga = False
    print("O computador tirou uma peça.")
    print("Fim do jogo! O computador ganhou!")
    if pecas_restantes == 0:
        return partida()
    else:
        return pecas_restantes



campeonato()

