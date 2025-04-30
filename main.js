function iniciar_jogo() {
    let iniciar = document.getElementById("jogar");
    window.location.href = 'jogo.html';
}

let personagem = {

    nome : '',
    rank : '', 

    vida : 0, 
    vigor : 0, 
    tenacidade : 0, 
    agilidade : 0, 
    destreza : 0, 
    forca : 0, 
    mana : 0, 

    katana : 0, 
    rapieira : 0, 
    espada_curta : 0, 
    sabre : 0, 
    adaga : 0, 
    espada_grande : 0, 
    espada_longa : 0, 
    manoplas : 0, 
    fios : 0, 
    lanca : 0, 
    machado: 0, 
    marreta : 0, 
    foice : 0, 

    pistola : 0, 
    arco : 0, 
    revolver : 0, 
    metralhadora : 0, 
    rifle : 0, 
    escopeta : 0, 
    espingarda : 0, 
    sniper : 0, 
    fuzil : 0, 
    besta : 0,

    flechas : 0, 
    dardos : 0, 
    balas : 0, 

    armadura : 0, 
    escudo : 0, 
    montaria : 0, 
    
    cajado : 0,
    orbe : 0, 
    runas : 0, 

    boxe : 0, 
    jiuJitsu : 0, 
    capoeira : 0, 
    judo : 0, 
    muayThai : 0,
    karate : 0, 
    sumo : 0, 
    aikido : 0, 
    kungFu : 0, 
    luchaLibre : 0, 
    taekwondo : 0, 
    kravMaga : 0, 

    fogo : 0, 
    raio : 0, 
    vento : 0, 
    terra : 0, 
    agua : 0, 
    metal : 0, 
    gelo : 0, 
    cura : 0, 

    aura : 0, 
    sorte : 0, 
    vontade : 0, 

    audicao : 0, 
    visao : 0, 
    tato : 0, 
    paladar : 0, 
    olfato : 0, 
    intuicao : 0, 

    Imunidade_Veneno : 0, 
    Imunidade_Chamas : 0, 
    Imunidade_Frio : 0, 
    Imunidade_Doenças : 0, 
    Imunidade_Choque : 0, 
    Imunidade_Corte : 0, 
    Imunidade_Perfuracao : 0,
    Imunidade_Pancada : 0,

    classe : '',
    tecnicas : []

}

let equipe = [];
let nomes = ["João", "Maria", "José", "Ana", "Paulo", "Isabela", "Carlos", "Sofia", "Ricardo", "Beatriz", "Tiago", "Carolina", "André", "Larissa", "Filipe", "Camila", "Miguel", "Fernanda", "Diogo", "Laura", "Pedro", "Manuela", "António", "Cláudia", "Rui", "Rita", "Rafael", "Susana", "Hugo", "Débora", "Lucas", "Viviana", "Bruno", "Francisca", "Gonçalo", "Isabel", "Daniel", "Raquel", "Nuno", "Joana", "Fernando", "Sara", "Jorge", "Joana", "Manuel", "Teresa", "Luís", "Patricia", "Rafaela"];
let sobrenomes = ["Silva", "Santos", "Oliveira", "Souza", "Pereira", "Ferreira", "Rodrigues", "Alves", "Gomes", "Martins", "Carvalho", "Araújo", "Barbosa", "Barbosa", "Rodrigues", "Sousa", "Pinto", "Martins", "Gonçalves", "Lopes", "Ribeiro", "Gomes", "Cardoso", "Dias", "Machado", "Farias", "Torres", "Costa", "Nunes", "Moura", "Lima", "Moreira", "Leite", "Augusto", "Campos", "Teixeira", "Fernandes", "Silva", "Guedes", "Bezerra", "Castro", "Vieira", "Freitas", "Andrade", "Domingues", "Francisco", "Mendes", "Braga", "Coelho", "Correia", "Campos", "Souza"];

function contratar() {
    let nomeAleatorio = Object.create(personagem); 

    nomeAleatorio.nome = nomes[(Math.floor(Math.random() * nomes.length))] + " " +  sobrenomes[(Math.floor(Math.random() * sobrenomes.length))];

    nomeAleatorio.vida = Math.floor(100000/((Math.random() * 100000) + 1)); 
    nomeAleatorio.vigor = Math.floor(100000/((Math.random() * 100000) + 1)); 
    nomeAleatorio.tenacidade = Math.floor(100000/((Math.random() * 100000) + 1)); 
    nomeAleatorio.agilidade = Math.floor(100000/((Math.random() * 100000) + 1)); 
    nomeAleatorio.destreza = Math.floor(100000/((Math.random() * 100000) + 1)); 
    nomeAleatorio.forca = Math.floor(100000/((Math.random() * 100000) + 1)); 
    nomeAleatorio.mana = Math.floor(100000/((Math.random() * 100000) + 1)) - 1; 

    nomeAleatorio.katana = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.rapieira = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.espada_curta = Math.floor(((Math.random() * 5) + 1 )/5); 
    nomeAleatorio.sabre = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.adaga = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.espada_grande = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.espada_longa = Math.floor(((Math.random() * 5) + 1 )/5); 
    nomeAleatorio.manoplas = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.fios = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.lanca = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.machado= Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.marreta = Math.floor(((Math.random() * 20) + 1 )/20); 
    nomeAleatorio.foice = Math.floor(((Math.random() * 20) + 1 )/20); 

    nomeAleatorio.pistola = Math.floor(((Math.random() * 20) + 1 )/20); 
    nomeAleatorio.arco = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.revolver = Math.floor(((Math.random() * 20) + 1 )/20); 
    nomeAleatorio.metralhadora = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.rifle = Math.floor(((Math.random() * 20) + 1 )/20); 
    nomeAleatorio.escopeta = Math.floor(((Math.random() * 20) + 1 )/20); 
    nomeAleatorio.espingarda = Math.floor(((Math.random() * 20) + 1 )/20); 
    nomeAleatorio.sniper = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.fuzil = Math.floor(((Math.random() * 20) + 1 )/20); 
    nomeAleatorio.besta = Math.floor(((Math.random() * 10) + 1 )/10);

    nomeAleatorio.flechas = Math.floor(100000/((Math.random() * 100000) + 1)); 
    nomeAleatorio.dardos = Math.floor(100000/((Math.random() * 100000) + 1)); 
    nomeAleatorio.balas = Math.floor(100000/((Math.random() * 100000) + 1)); 

    nomeAleatorio.armadura = Math.floor(((Math.random() * 20) + 1 )/20); 
    nomeAleatorio.escudo = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.montaria = Math.floor(((Math.random() * 25) + 1 )/25); 

    nomeAleatorio.cajado = Math.floor(((Math.random() * 10) + 1 )/10);
    nomeAleatorio.orbe = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.runas = Math.floor(((Math.random() * 20) + 1 )/20); 

    nomeAleatorio.boxe = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.jiuJitsu = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.capoeira = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.judo = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.muayThai = Math.floor(((Math.random() * 10) + 1 )/10);
    nomeAleatorio.karate = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.sumo = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.aikido = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.kungFu = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.luchaLibre = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.taekwondo = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.kravMaga = Math.floor(((Math.random() * 10) + 1 )/10); 

    nomeAleatorio.fogo = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.raio = Math.floor(((Math.random() * 20) + 1 )/20); 
    nomeAleatorio.vento = Math.floor(((Math.random() * 5) + 1 )/5); 
    nomeAleatorio.terra = Math.floor(((Math.random() * 5) + 1 )/5); 
    nomeAleatorio.agua = Math.floor(((Math.random() * 5) + 1 )/5); 
    nomeAleatorio.metal = Math.floor(((Math.random() * 20) + 1 )/20); 
    nomeAleatorio.gelo = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.cura = Math.floor(((Math.random() * 20) + 1 )/20); 

    nomeAleatorio.aura = Math.floor(100000/((Math.random() * 100000) + 1)) - 1; 
    nomeAleatorio.sorte = Math.floor(100000/((Math.random() * 100000) + 1)); 
    nomeAleatorio.vontade = Math.floor(100000/((Math.random() * 100000) + 1)); 

    nomeAleatorio.audicao = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.visao = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.tato = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.paladar = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.olfato = Math.floor(((Math.random() * 10) + 1 )/10); 
    nomeAleatorio.intuicao = Math.floor(((Math.random() * 25) + 1 )/25); 

    nomeAleatorio.Imunidade_Veneno = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.Imunidade_Chamas = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.Imunidade_Frio = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.Imunidade_Doenças = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.Imunidade_Choque = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.Imunidade_Corte = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.Imunidade_Perfuracao = Math.floor(((Math.random() * 25) + 1 )/25); 
    nomeAleatorio.Imunidade_Pancada = Math.floor(((Math.random() * 25) + 1 )/25); 

    if (nomeAleatorio.mana == 0){
        nomeAleatorio.cajado = 0;
        nomeAleatorio.runas = 0;
        nomeAleatorio.orbe = 0;
        nomeAleatorio.fogo = 0;
        nomeAleatorio.raio = 0;
        nomeAleatorio.vento = 0;
        nomeAleatorio.terra = 0;
        nomeAleatorio.agua = 0;
        nomeAleatorio.metal = 0;
        nomeAleatorio.gelo = 0;
        nomeAleatorio.cura = 0;
        nomeAleatorio.aura = 0;
    }
    if (nomeAleatorio.arco == 0){
        nomeAleatorio.flechas = 0;
    }
    if (nomeAleatorio.besta == 0){
        nomeAleatorio.dardos = 0;
    }
    if (nomeAleatorio.pistola == 0 && nomeAleatorio.revolver == 0 && nomeAleatorio.metralhadora == 0 && nomeAleatorio.rifle == 0 && nomeAleatorio.escopeta == 0 && nomeAleatorio.espingarda == 0 && nomeAleatorio.sniper == 0 && nomeAleatorio.fuzil == 0){
        nomeAleatorio.balas = 0;
    }
    
    let soma = nomeAleatorio.vida + nomeAleatorio.vigor + nomeAleatorio.tenacidade + nomeAleatorio.agilidade + nomeAleatorio.destreza + nomeAleatorio.forca + nomeAleatorio.mana * 2 + nomeAleatorio.flechas * 2 + nomeAleatorio.dardos * 2 + nomeAleatorio.balas * 2 + nomeAleatorio.sorte + nomeAleatorio.vontade;

    equipe.push(nomeAleatorio); 
    document.getElementById("message").innerHTML = "Herói Contratado!";
}

function estrela(x){
    if (101 > x && x > 10){
        return 0;
    }
    else if (1001 > x && x > 100){
        return 11;
    }
    else if (10001 > x && x > 1000){
        return -1;
    }
    else if (100000 > x && x > 10000){
        return 12;
    }
    else if (x == 100000){
        return 20;
    }
    else {
        return x;
    }
}

function rank(x){
    if (x == -1){
        return "Rank G";
    }
    else if (x == 0){
        return "Rank F";
    }
    else if (x == 1){
        return "Rank E-";
    }
    else if (x == 2){
        return "Rank E+";
    }
    else if (x == 3){
        return "Rank D-";
    }
    else if (x == 4){
        return "Rank D+";
    }
    else if (x == 5){
        return "Rank C-";
    }
    else if (x == 6){
        return "Rank C+";
    }
    else if (x == 7){
        return "Rank B-";
    }
    else if (x == 8){
        return "Rank B+";
    }
    else if (x == 9){
        return "Rank A-";
    }
    else if (x == 10){
        return "Rank A+";
    }
    else if (x == 11){
        return "Rank S";
    }
    else if (x == 12){
        return "Rank Z";
    }
    else if (x == 20){
        return "Rank ???";
    }
    else {
        return x;
    }
}

function mostrar() {
    let txt = "";
    for (let i = 0; i < equipe.length; i++) {
        txt += "Nome: " + equipe[i].nome + "<br><br>";
        txt += "Atributos<br>";
        txt += "Vida: " + rank(estrela(equipe[i].vida)) + "<br>";
        txt += "Vigor: " + rank(estrela(equipe[i].vigor)) + "<br>";
        txt += "Força: " + rank(estrela(equipe[i].forca)) + "<br>";
        txt += "Tenacidade: " + rank(estrela(equipe[i].tenacidade)) + "<br>";
        txt += "Agilidade: " + rank(estrela(equipe[i].agilidade)) + "<br>";
        txt += "Destreza: " + rank(estrela(equipe[i].destreza)) + "<br>";
        if (equipe[i].mana != 0){
            txt += "Mana: " + rank(estrela(equipe[i].mana)) + "<br>";
        }
        if (equipe[i].aura != 0){
            txt += "Aura: " + rank(estrela(equipe[i].aura)) + "<br>";
        }
        txt += "Sorte: " + rank(estrela(equipe[i].sorte)) + "<br>";
        txt += "Vontade: " + rank(estrela(equipe[i].vontade)) + "<br>";
        txt += "<br> ----- Inventário ----- <br>";
        if (equipe[i].espada_curta != 0){
            txt += "Espada Curta" + "<br>";
        }
        if (equipe[i].espada_longa != 0){
            txt += "Espada Longa" + "<br>";
        }
        if (equipe[i].katana != 0){
            txt += "Katana" + "<br>";
        }
        if (equipe[i].rapieira != 0){
            txt += "Rapieira" + "<br>";
        }
        if (equipe[i].sabre != 0){
            txt += "Sabre" + "<br>";
        }
        if (equipe[i].adaga != 0){
            txt += "Adagas" + "<br>";
        }
        if (equipe[i].espada_grande != 0){
            txt += "Espada Grande" + "<br>";
        }
        if (equipe[i].manoplas != 0){
            txt += "Manoplas" + "<br>";
        }
        if (equipe[i].lanca != 0){
            txt += "Lança" + "<br>";
        }
        if (equipe[i].machado != 0){
            txt += "Machado" + "<br>";
        }
        if (equipe[i].foice != 0){
            txt += "Foice" + "<br>";
        }
        if (equipe[i].marreta != 0){
            txt += "Marreta" + "<br>";
        }
        if (equipe[i].fios != 0){
            txt += "Carretel de Fios de Ferro" + "<br>";
        }
        if (equipe[i].escudo != 0){
            txt += "Escudo" + "<br>";
        }
        if (equipe[i].armadura != 0){
            txt += "Armadura" + "<br>";
        }
        if (equipe[i].montaria != 0){
            txt += "Cavalo" + "<br>";
        }
        if (equipe[i].arco != 0){
            txt += "Arco" + "<br>";
        }
        if (equipe[i].besta != 0){
            txt += "Besta" + "<br>";
        }
        if (equipe[i].pistola != 0){
            txt += "Pistola" + "<br>";
        }
        if (equipe[i].revolver != 0){
            txt += "Revolver" + "<br>";
        }
        if (equipe[i].escopeta != 0){
            txt += "Escopeta" + "<br>";
        }
        if (equipe[i].fuzil != 0){
            txt += "Fuzil" + "<br>";
        }
        if (equipe[i].espingarda != 0){
            txt += "Espingarda" + "<br>";
        }
        if (equipe[i].rifle != 0){
            txt += "Rifle" + "<br>";
        }
        if (equipe[i].sniper != 0){
            txt += "Sniper" + "<br>";
        }
        if (equipe[i].metralhadora != 0){
            txt += "Metralhadora" + "<br>";
        }
        if (equipe[i].arco != 0){
            txt += estrela(equipe[i].flechas) + " Flechas" + "<br>";
        }
        if (equipe[i].besta != 0){
            txt += estrela(equipe[i].dardos) + " Dardos" + "<br>";
        }
        if (equipe[i].balas != 0){
            txt += estrela(equipe[i].balas) + " Munição" + "<br>";
        }
        if (equipe[i].mana != 0){
            if (equipe[i].cajado != 0){
                txt += "Cajado" + "<br>";
            }
        }
        if (equipe[i].mana != 0){
            if (equipe[i].runas != 0){
                txt += "Runas" + "<br>";
            }
        }
        if (equipe[i].mana != 0){
            if (equipe[i].orbe != 0){
                txt += "Orbe" + "<br>";
            }
        }
        txt += "<br> ----- Skills----- <br>";
        if (equipe[i].boxe != 0){
            txt += "Boxe" + "<br>";
        }
        if (equipe[i].jiuJitsu != 0){
            txt += "JiuJitsu" + "<br>";
        }
        if (equipe[i].karate != 0){
            txt += "Karate" + "<br>";
        }
        if (equipe[i].judo != 0){
            txt += "Judo" + "<br>";
        }
        if (equipe[i].kungFu != 0){
            txt += "Kung Fu" + "<br>";
        }
        if (equipe[i].taekwondo != 0){
            txt += "Taekwondo" + "<br>";
        }
        if (equipe[i].kravMaga != 0){
            txt += "Krav Maga" + "<br>";
        }
        if (equipe[i].muayThai != 0){
            txt += "Muay Thai" + "<br>";
        }
        if (equipe[i].aikido != 0){
            txt += "Aikido" + "<br>";
        }
        if (equipe[i].capoeira != 0){
            txt += "Capoeira" + "<br>";
        }
        if (equipe[i].sumo != 0){
            txt += "Sumo" + "<br>";
        }
        if (equipe[i].luchaLibre != 0){
            txt += "Lucha Libre" + "<br>";
        }
        if (equipe[i].audicao != 0){
            txt += "Audição Aguçada" + "<br>";
        }
        if (equipe[i].visao != 0){
            txt += "Visão Aguçada" + "<br>";
        }
        if (equipe[i].olfato != 0){
            txt += "Olfato Aguçado" + "<br>";
        }
        if (equipe[i].tato != 0){
            txt += "Tato Aguçado" + "<br>";
        }
        if (equipe[i].paladar != 0){
            txt += "Paladar Aguçado" + "<br>";
        }
        if (equipe[i].Imunidade_Chamas != 0){
            txt += "Resistência a Chamas" + "<br>";
        }
        if (equipe[i].Imunidade_Choque != 0){
            txt += "Resistência a Choque" + "<br>";
        }
        if (equipe[i].Imunidade_Corte != 0){
            txt += "Resistência a Corte" + "<br>";
        }
        if (equipe[i].Imunidade_Doenças != 0){
            txt += "Resistência a Doenças" + "<br>";
        }
        if (equipe[i].Imunidade_Frio != 0){
            txt += "Resistência a Frio" + "<br>";
        }
        if (equipe[i].Imunidade_Pancada != 0){
            txt += "Resistência a Pancada" + "<br>";
        }
        if (equipe[i].Imunidade_Perfuracao != 0){
            txt += "Resistência a Perfuração" + "<br>";
        }
        if (equipe[i].Imunidade_Veneno != 0){
            txt += "Resistência a Veneno" + "<br>";
        }
        txt += "<br> ----- Skills Mágicas ----- <br>";
        if (equipe[i].fogo != 0){
            txt += "Afinidade com Fogo" + "<br>";
        }
        if (equipe[i].raio != 0){
            txt += "Afinidade com Raio" + "<br>";
        }
        if (equipe[i].vento != 0){
            txt += "Afinidade com Vento" + "<br>";
        }
        if (equipe[i].terra != 0){
            txt += "Afinidade com Terra" + "<br>";
        }
        if (equipe[i].agua != 0){
            txt += "Afinidade com Água" + "<br>";
        }
        if (equipe[i].metal != 0){
            txt += "Afinidade com Metal" + "<br>";
        }
        if (equipe[i].gelo != 0){
            txt += "Afinidade com Gelo" + "<br>";
        }
        if (equipe[i].cura != 0){
            txt += "Afinidade com Cura" + "<br>";
        }
        txt += "<br> --------------------<br>--------------------<br>--------------------<br>-------------------- <br><br>";
    }
    document.getElementById("message").innerHTML = txt;
}