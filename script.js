:root {
    --cor-terra: #7e57c2;
    --cor-grama: #4caf50;
    --cor-pista: #8d6e63;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #2e7d32;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
}

/* Container Principal */
.jogo-container {
    position: relative;
    width: 400px;
    height: 600px;
    background-color: var(--cor-grama);
    border: 4px solid #1b5e20;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

/* Painel de Placar */
.painel-superior {
    position: absolute;
    top: 0; left: 0; width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
}

.info-bloco { font-weight: bold; font-size: 16px; }

.info-bloco-vida {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
}

.barra-vida-fundo {
    width: 100px;
    height: 14px;
    background-color: #CDDC39;
    border-radius: 7px;
    overflow: hidden;
}

#barra-vida {
    height: 100%;
    background-color: #81c784;
    transition: width 0.2s ease;
}

/* Pista de Corrida */
.pista {
    position: relative;
    width: 280px;
    height: 100%;
    background-color: var(--cor-pista);
    margin: 0 auto;
    border-left: 6px dashed #fff;
    border-right: 6px dashed #fff;
    overflow: hidden;
}

/* Trator do Jogador */
.trator {
    position: absolute;
    bottom: 20px;
    left: 110px; /* Posição inicial centralizada */
    font-size: 45px;
    width: 50px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: left 0.1s ease-out;
    z-index: 5;
}

/* Obstáculos e Elementos Coletáveis */
.elemento-pista {
    position: absolute;
    font-size: 35px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Telas de Menu (Início/Fim) */
.tela-sobreposta {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(27, 94, 32, 0.95);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    text-align: center;
    z-index: 20;
}

.tela-sobreposta h2 { font-size: 32px; margin-bottom: 10px; color: #fff; }

.instrucoes {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 8px;
    margin: 20px 0;
    font-size: 14px;
    text-align: left;
}
.instrucoes p { margin-bottom: 8px; }
.bom { color: #a5d6a7; }
.ruim { color: #ef9a9a; }

.tela-sobreposta button {
    background-color: #f57c00;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: 0.2s;
}

.tela-sobreposta button:hover {
    background-color: #e65100;
    transform: scale(1.05);
}

.escondido { display: none !important; }