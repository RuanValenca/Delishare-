import { ChefHat } from "lucide-react";
import * as S from "./styles";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.DivName>
        <ChefHat size={32} color={theme.font.colors.lightBlue} />

        <S.Name>Delishare</S.Name>
      </S.DivName>

      <S.DivLink>
        <S.P onClick={() => navigate("/Delishare")}>Home</S.P>
        <S.P>Receitas</S.P>
        <S.P>Categorias</S.P>
        <S.P onClick={() => navigate("/sobre")}>Sobre</S.P>
      </S.DivLink>
    </S.Container>
  );
}
