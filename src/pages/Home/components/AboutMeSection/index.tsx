import * as S from "../../style";
import H2 from "../../../../components/H2";
import Circle from "../../../../assets/svgComponents/Circle";

interface AboutMeContract {
    isMobile: boolean;
}

const AboutMeSection = ({ isMobile }: AboutMeContract) => {
    return (
        <S.Section id="aboutMe">
            <div className="centralizer">
                <H2>Sobre mim</H2>
                <S.AboutMeContainer>
                    <div>
                        <p>
                        Olá, sou Hugo Furtado, um entusiasta de tecnologia que decidiu
                        seguir o caminho da engenharia informática para aprimorar minhas 
                        habilidades em programação. Ao longo da minha jornada, estive 
                        envolvido em projetos diversos, particularmente focados na gestão 
                        educacional, desenvolvimento de API's, administração de redes e administração de bancos de dados.
                        Essa experiência permitiu-me explorar as complexidades do desenvolvimento de software, visando não 
                        apenas a eficácia operacional, mas também o impacto positivo nos sistemas educacionais. Estou comprometido
                        em continuar aprendendo e aplicando meus conhecimentos para contribuir com soluções inovadoras e eficazes
                        no campo da tecnologia.
                        </p>
                        <br />
                        <p>
                            Atualmente estou a terminar o curso de engenharia informática.
                        </p>
                    </div>
                    {!isMobile && (
                        <div className="svgContainer">
                            <Circle />
                        </div>
                    )}
                </S.AboutMeContainer>
            </div>
        </S.Section>
    );
};

export default AboutMeSection;
