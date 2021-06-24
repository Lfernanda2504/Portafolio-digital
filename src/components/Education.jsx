import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";



const Education = () => {
  return (
    <div className="Education">
      <H2Styled name="Estudios" />
      <div className="Education-container">
        <div className="Education-item">
          <H3Styled>
            SENA - <span>2015</span>
          </H3Styled>
          <PStyled name="Tecnico en desarrollo de software" />
        </div>
        <div className="Education-item">
          <H3Styled>
            SENA - <span>2018</span>
          </H3Styled>
          <PStyled name="Tecnologia en analisis y desarrollo de sistemas de información" />
        </div>
      </div>
    </div>
  );
};

export default Education;