import { ChefHat } from "lucide-react";
import * as S from "./styles";
import { useTheme } from "styled-components";
export default function MainRecipes() {
  const theme = useTheme();
  return (
    <S.Container>
      <S.Grid>
        <S.DivInfo>
          <S.Title>
            <ChefHat size={36} color={theme.font.colors.lightBlue} />
            Receitas em Destaque
          </S.Title>
          <S.Description>Receitas incríveis para todas ocasiões</S.Description>
        </S.DivInfo>
        <S.DivLinks>
          <S.Title>Links</S.Title>
          <S.List>
            <S.Li>Home</S.Li>
            <S.Li>Receitas</S.Li>
            <S.Li>Categorias</S.Li>
            <S.Li>Sobre</S.Li>
          </S.List>
        </S.DivLinks>
        <S.DivLinks>
          <S.Title>Categorias</S.Title>
          <S.List>
            <S.Li>Café da Manhã</S.Li>
            <S.Li>Almoço</S.Li>
            <S.Li>Jantar</S.Li>
            <S.Li>Sobremesa</S.Li>
          </S.List>
        </S.DivLinks>
      </S.Grid>
      <S.Hr />
      <S.License>© 2025 Delishare.</S.License>
    </S.Container>
  );
}
