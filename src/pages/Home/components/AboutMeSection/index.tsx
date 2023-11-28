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
                        Olá, sou Hugo Furtado, um entusiasta de tecnologia que decidiu seguir o caminho da 
                        engenharia informática para aprimorar minhas habilidades em programação. Ao longo da minha jornada, estive 
                        envolvido em projetos diversos, particularmente focados em criar sites, administração de redes e 
                        administração de bancos de dados. Essa experiência permitiu-me explorar as complexidades do desenvolvimento 
                        de software, visando a eficácia operacional. Estou comprometido em continuar aprendendo e aplicando 
                        meus conhecimentos 
                        para contribuir com soluções inovadoras e eficazes no campo da tecnologia. O que mais gosto de fazer nos 
                        meus tempos livres é jogar bola ou assistir a jogos de futebol. Adoro a emoção e a energia que o esporte 
                        proporciona. Além disso, a prática regular me ajuda a relaxar, me mantém ativo e me permite socializar com 
                        amigos que compartilham do mesmo interesse.
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
