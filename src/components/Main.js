import styled from 'styled-components';

const MainContainer = styled.main`
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px;
  /* grid-template-rows: 20vh 70vh 10vh; */
  grid-template-areas: "um dois tres" "quatro cinco seis" "g g g";

  #um{
  background: yellow;
  height: 382px;
  margin-bottom: 0;
  grid-area: um;
  text-align: right;
  }
  #dois{
    margin-top: 0px;
    background: blue;
    height: 382px;
    grid-area: dois;
  }
  #dois img{width: 100%; height: 100%;}

  #tres{
    background: green;
    height: 382px;
    grid-area: tres;
  }

  #quatro{
    background: red;
    height: 149px;
    grid-area: quatro;
  }

  #cinco{
    background: green;
    height: 149px;
    grid-area: cinco;
  }
  #seis{
    background: red;
    height: 149px;
    grid-area: seis;
  }

  #grande{
  background: yellow;
  height: 200px;
  grid-area: g;
  text-align: start;
  }
`;

function Main() {
    return (
        <MainContainer>
            <div id="um"> <p>ELABORAÇÃO DE IMAGENS ILUSTRATIVAS PARA SEU EMPREENDEMENTO: BUSCAMOS EVIDENCIAR A SENSAÇÃO QUE DESEJA PASSAR ATRAVÉS DAS IMAGENS!</p> </div>
            <div id="dois"> <img src="/imag1.png" /> </div>
            <div id="tres">
                <ul>
                    <p>TRABALHAMOS COM:</p>
                    <li>IMAGENS INTERNAS</li>
                    <li>IMAGENS EXTERNAS</li>
                    <li>PLANTAS HUMANIZADAS</li>
                    <li>ANIMAÇÕES</li>
                    <li>IMAGENS 180º/360º</li>
                </ul>
            </div>
            <div id="quatro"> <p> REUNIÕES VIA SKYPE COM O CLIENTE! </p> </div>
            <div id="cinco"> <img src="/imag3.png" /> </div>
            <div id="seis"> <p> ATENDEMOS EM TODO O BRASIL VIA ONLINE </p> </div>

            <div id="grande">
                <p>
                    OBSERVAÇÕES:<br />
            - O PAGAMENTO DEVE SER 50% ANTES, PARA DAR INÍCIO E 50% APÓS ENTREGUES AS IMAGENS POR E-MAIL.<br />
            -SERÁ EMITIDO UM PEQUENO CONTRATO ONLINE PARA A SEGURANÇA DE AMBAS AS PARTES.<br />
            -AINDA SOBRE O PAGAMENTO, ELE PODE SER FEITO POR DEPÓSITO EM CAIXA E BANCO DO BRAIL.<br />
            - ANTES DE ENVIAR AS IMAGENS FINAIS, É ENVIADO UM PRÉVIO ESBOÇO PARA O CHECKLIST DO CLIENTE.<br />
                </p>

                <p>
                    É UM PRAZER TELO COMO CLIENTE!
          </p>

            </div>
        </MainContainer>
    )
}

export default Main;