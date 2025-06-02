import * as S from "./styles";
export default function About() {
  return (
    <S.Container>
      <S.DivText>
        <S.Title>Sobre Delishare</S.Title>
      </S.DivText>

      <S.DivInfo>
        <S.Info>
          <S.TitleInfo>Como Começou?</S.TitleInfo>
          <S.Description>
            A ideia de criar o Delishare surgiu como parte do meu processo de
            evolução como desenvolvedor. Mais do que um simples projeto, ele é
            uma oportunidade prática de aplicar e aprimorar meus conhecimentos
            em tecnologias modernas como React e TypeScript.
            <br /> O foco é desenvolver uma aplicação escalável, eficiente e com
            uma arquitetura sólida, explorando boas práticas de desenvolvimento
            e buscando sempre uma estrutura que possa crescer de forma
            organizada. O Delishare representa esse compromisso com o
            aprendizado contínuo, utilizando a tecnologia de forma inteligente
            para criar algo útil, funcional e com potencial de expansão.
          </S.Description>
        </S.Info>

        <S.DivImage>
          <S.Img src="src\assets\img\programming.jpg" alt="Code" />
        </S.DivImage>
      </S.DivInfo>
    </S.Container>
  );
}
