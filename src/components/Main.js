import styled from 'styled-components';

const MainContainer = styled.main`
  color: white;
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px;
  /* grid-template-rows: 20vh 70vh 10vh; */
  grid-template-areas: "um dois tres" "quatro cinco seis" "g g g";
  box-shadow: 0px 0px 9px 9px rgba(255, 255, 255, 0.5);

  #um{
  //background: yellow;
  height: 382px;
  margin-bottom: 0;
  grid-area: um;
  text-align: right;
  padding-right: 0.313rem;
  width: 100%;
  }
  #um p{
    margin-top: 3.125rem;
  }


  #dois{
    margin-top: 0px;
    //background: blue;
    height: 382px;
    grid-area: dois;
    width: 100%;
  }
  #dois img{width: 100%; height: 100%;}

  #tres{
    //background: green;
    height: 382px;
    grid-area: tres;
    width: 100%;
  }
  
  #tres p{
    margin-left: 5px;
    margin-top: 9.063rem;
  }
  #tres ul{
    margin-top: -10px;
  }

  #quatro{
    height: 149px;
    grid-area: quatro;
    font-size: 1.125rem;
    word-wrap: break-word;
    width: 100%;
  }
  #quatro div{
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-image: url("/skype.png");
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: -1;
  }
  #quatro #p{
    margin-top: -100px;
    position: absolute;
    color: white;
    margin-left: 2.5rem;
    z-index: 5;
    
  }

  #cinco{
    //background: green;
    height: 149px;
    grid-area: cinco;
    width: 100%;
  }
  #seis{
    background-image: url("/bandeira-brasil.jpg");
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 149px;
    grid-area: seis;
    text-align: center;
    font-size: 22px;
    width: 100%;
  }
  #seis p{

  }

  #grande{
 // background: yellow;
  height: 100%;
  grid-area: g;
  text-align: start;
  width: 100%;
  }
  #grande p{
    margin-left: 5px;

  }

  @media screen and (max-width: 320px){
    #um{
  //background: yellow;
  height: 382px;
  margin-bottom: 0;
  grid-area: um;
  text-align: right;
  padding-right: 0.313rem;
  width: 100%;
  }
  #um p{
    margin-top: 3.125rem;
  }


  #dois{
    margin-top: 0px;
    //background: blue;
    width: 25px;
    height: 50px;
    grid-area: dois;
    //width: 100%;
  }
  #dois img{width: 100%; height: 100%;}

  }

`;

function Main() {
  return (
    <MainContainer>
      <div id="um"> <p>ELABORAÇÃO DE IMAGENS ILUSTRATIVAS PARA SEU EMPREENDEMENTO:<br /> BUSCAMOS EVIDENCIAR A SENSAÇÃO QUE DESEJA <br />PASSAR ATRAVÉS DAS IMAGENS!</p> </div>
      <div id="dois"> <img src="/imag1.png" /> </div>
      <div id="tres">
        <p>TRABALHAMOS COM:</p>
        <ul>
          <li>IMAGENS INTERNAS</li>
          <li>IMAGENS EXTERNAS</li>
          <li>PLANTAS HUMANIZADAS</li>
          <li>ANIMAÇÕES</li>
          <li>IMAGENS 180º/360º</li>
        </ul>
      </div>
      <div id="quatro"><div></div><p id="p" > REUNIÕES VIA SKYPE<br /> COM O CLIENTE! </p> </div>
      <div id="cinco"> <img src="/imag3.png" /> </div>
      <div id="seis"> <p> ATENDEMOS EM<br /> TODO O BRASIL<br /> VIA ONLINE </p> </div>

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