import { ChefHat } from "lucide-react";
import * as S from "./styles";
import { useTheme } from "styled-components";
export default function NavBar() {
  const theme = useTheme();
  return (
    <S.Container>
      <S.DivName>
        <ChefHat size={32} color={theme.font.colors.lightBlue} />

        <S.Name>Delishare</S.Name>
      </S.DivName>

      <S.DivLink>
        <S.P>Home</S.P>
        <S.P>Receitas</S.P>
        <S.P>Categorias</S.P>
        <S.P>Sobre</S.P>
      </S.DivLink>
    </S.Container>
  );
}
