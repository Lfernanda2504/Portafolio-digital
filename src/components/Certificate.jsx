import React from 'react'
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificate = () =>(
    <div className ="Certificates">
        <H2Styled name = "Certificaciones"/>
        <div className="Certificaciones-container">
            <div className="Certificaciones-item">
                <H3Styled>Mantenimiento de computadores Nivel I </H3Styled>
                <PStyled>SENA</PStyled>
            </div>
            <div className="Certificaciones-item">
                <H3Styled>Planeación de negocios electronicos (E-Business) </H3Styled>
                <PStyled>SENA</PStyled>
            </div>
            <div className="Certificaciones-item">
                <H3Styled>IT ESSENTIALS SISTEMAS OPERATIVOS DE RED</H3Styled>
                <PStyled>CISCO</PStyled>
            </div>
            <div className="Certificaciones-item">
                <H3Styled>Operaciones del sistema operativo Linux <i class="fas fa-linux "></i>  </H3Styled>
                <PStyled>SENA</PStyled>
            </div>
        </div>
    </div>
);
export default Certificate;