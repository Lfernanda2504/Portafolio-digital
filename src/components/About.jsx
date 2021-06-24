import React from 'react';
import Social from './Social';
import {
    AboutStyle,
    AboutAvatar,
    AboutImg,
    AboutName,
    AboutH2,
    AboutProfession,
    AboutBio,
    AboutLocation } from '../styled/AboutStyles.jsx';

const About = () =>(
  <AboutStyle>
    <div className="About-container">
    <AboutAvatar>
      <figure>
        <AboutImg 
          src="https://lh3.googleusercontent.com/ki14UGnZUKbu4ZHd_nJMWId18eHjK0mTP6YIw4Jd00DIpuAdVBE10D28oKM_EWOzBplWwdkXyOSGGVGUnvRAzyPQaSns17u8HMmdfEokLVAEthO5CxY4QVgefyRjrI4MekGUikfQccerX-a43P0Yxtsdg8gKGI_d4RGGKzoK67p69WAsSDYoMjSBJhfvoRFnV4Jn3aePIDA1AAD3B4zs_-BchftcH2O8OcJpWbHVRGLNNDg5x-21Hv3LyEwoimrH4S82rSFcdc_9zFKSvQ3Eenj1yS8aJNjHxDMtMPvmggjHsWgE4P7TNFymuD5cfwbmK63zquoO6T_KewqtEmRDOijWbD6QBgWOTdmVDvr_JEdAksuq03xryF031QptBEx5qT32YbyjVp7tDeRCMbHaossF5e6s-YvJZHZTFXcpe9QzwWBmrODWTJruF4MKPhW4FPys4z2acipYy5r7rw0TAWDM9Jd4-09yUcEjjlYfBi32Fj82ysdI9EIGqSiSy6_MOAF5qP9a3Iirfmfw2x02kbe2WTULcEgL-ecCR4IKBfdX79CkEmsO1BvM-1y0wiCE0QfFkhJz9DlHEFoXk1hOQzWzx85Dkd73OV4KC22jCjsXgIR2GKJ0JxybjD7GrXXN735GaCx5sKyDQwqRYjhbIobVzt6j9nTZFN7Ks1iIk4x4QlMTeZw9yrR1lIgjYxiy_9ynLBN3b-cRbgCOB1deQVOh=w300-h373-no?authuser=0" 
          alt="Mi avatar" 
        />
      </figure>
    </AboutAvatar>
    <AboutName>
      <AboutH2>Luisa Fernanda Garcia Ocampo</AboutH2>
    </AboutName>
    <div className="About-profession">
      <AboutProfession>
         Tecnologa en  sistemas.
      </AboutProfession>
    </div>
    <div className="About-description">
        <AboutBio>
            Desarrolladora Fronte-end
       </AboutBio>
    </div>
    <div className="About-location">
          <AboutLocation>
              Pereira, Colombia
          </AboutLocation>
    </div>
    <div className="About-social">
     <Social />
    </div>
  </div>
</AboutStyle>

);

export default About;