import styled from 'styled-components';

const MainContainer = styled.div`
margin-top: 12px;

.figure{
  width: 100%;
}

p{
  font-size: 0.8rem;
}
ul{
  font-size: 0.8rem;

}
`;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <MainContainer>
      <Container>

        <Row>

          <Col>
            <p>
              ELABORAÇÃO DE IMAGENS ILUSTRATIVAS PARA SEU EMPREENDEMENTO:<br /> BUSCAMOS EVIDENCIAR A SENSAÇÃO QUE DESEJA <br />PASSAR ATRAVÉS DAS IMAGENS!
            </p>
          </Col>

          <Col>
            <img src="/imag1.png" className="img-fluid" />
          </Col>

          <Col>
            <p>TRABALHAMOS COM:</p>
            <ul>
              <li>IMAGENS INTERNAS</li>
              <li>IMAGENS EXTERNAS</li>
              <li>PLANTAS HUMANIZADAS</li>
              <li>ANIMAÇÕES</li>
              <li>IMAGENS 180º/360º</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col /* xs="3" */>
            <p id="p" > REUNIÕES VIA SKYPE<br /> COM O CLIENTE! </p>
          </Col>
          <Col /* xs="auto" */>
            <img src="/imag3.png" className="img-fluid" />
          </Col>
          <Col /* xs="3" */>
            <p> ATENDEMOS EM<br /> TODO O BRASIL<br /> VIA ONLINE </p>
          </Col>
        </Row>

        <Row>

          <Col>
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
          </Col>

        </Row>
      </Container>
    </MainContainer>
  );
}

export default Example;