import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = () => (
    <div className="Experience">
        <H2Styled name="Experiencia" />
        <div className="Experiencie-container">
            <div className="Experience-item">
                <H3Styled>Aprendiz Gestion Humana</H3Styled>
                <PStyled name="Practicas de Aprendizaje" />
            </div>
            <div className="Experience-item">
                <H3Styled>RAC telefonico</H3Styled>
                <PStyled name="Atencion al cliente" />
            </div>
        </div>
    </div>
);

export default Experience;