programa {
  funcao inicio() {

    real  macaUn, laranjaUn, bergamotaUn, bananaUn, peraUn
    real maca, laranja, bergamota, banana, pera
    real precoM, precoL, precoB, precoBA, precoP
    real valorfinal

    maca = 1.50
    laranja = 2.00
    bergamota = 1.00
    banana = 1.20
    pera = 0.50

    escreva("Digite a quantidades colhidas de maça unidade: ")
    leia(macaUn)
    escreva("Digite a quantidades colhidas de laranja unidade: ")
    leia(laranjaUn)
    escreva("Digite a quantidades colhidas de bargamota unidade: ")
    leia(bergamotaUn)
    escreva("Digite a quantidades colhidas de banana unidade: ")
    leia(bananaUn)
    escreva("Digite a quantidades colhidas de pera unidade: ")
    leia(peraUn)
   

    precoM = (macaUn * maca)
    precoL= (laranjaUn * laranja)
    precoB = (bergamotaUn * bergamota)
    precoBA = (bananaUn * banana)
    precoP = (peraUn * pera)

    valorfinal = (precoM + precoL + precoB + precoBA + precoP)

    escreva("\nMAÇA = R$",precoM, "  Quantidade:" , macaUn)
    escreva("\nLARANJA = R$",precoL,"   Quantidade:", laranjaUn )
    escreva("\nBERGAMOTA = R$",precoB,"  Quantidade:", bergamotaUn)
    escreva("\nBANANA = R$",precoBA,"  Quantidade:", bananaUn)
    escreva("\nPERA = R$",precoP, "  Quantidade:", peraUn )
    escreva("\nVALOR FINAL : R$",valorfinal)

  }
}
