import * as S from "./styles";
import { Formik } from "formik";
import FieldFormik from "../../../../components/FieldFormik";
import { ChefHat, LockIcon, Mail } from "lucide-react";
import { useTheme } from "styled-components";
import BasicButton from "../../../../components/BasicButton";

export default function SignIn() {
  const theme = useTheme();

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <S.Container>
      <S.Header>
        <S.IconDiv>
          <ChefHat color="white" />
        </S.IconDiv>
        <S.H1>Bem-vindo de volta!</S.H1>
        <S.H2>Entre na sua conta para acessar suas receitas favoritas</S.H2>
      </S.Header>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <S.Form>
          <FieldFormik
            leftIcon={
              <Mail color={theme.colors.blueSchema.default} size={14} />
            }
            labelPosition="top"
            heightSize="xxsmall"
            widthSize="fullWidth"
            label="Email"
            name="email"
            type="string"
          />
          <FieldFormik
            leftIcon={
              <LockIcon color={theme.colors.blueSchema.default} size={14} />
            }
            labelPosition="top"
            heightSize="xxsmall"
            widthSize="fullWidth"
            label="Senha"
            name="password"
            type="password"
          />
          <S.BottomForm>
            <S.A>Esqueceu a Senha?</S.A>
          </S.BottomForm>
        </S.Form>
      </Formik>
      <S.Footer>
        <BasicButton
          height="small"
          textColor={theme.font.colors.whiteText}
          bgColor={theme.colors.gradientBackground}
          font="small"
          width="fullWidth"
        >
          Entrar
        </BasicButton>
        <S.P>
          Não tem uma Conta? <S.A>Cadastre-se</S.A>
        </S.P>

        <S.Return>Voltar ao início</S.Return>
      </S.Footer>
    </S.Container>
  );
}
