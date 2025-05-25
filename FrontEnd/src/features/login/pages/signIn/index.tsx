import * as S from "./styles";
import { Formik } from "formik";
import FieldFormik from "../../../../components/FieldFormik";

export default function SignIn() {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <S.Container>
      <S.Header>
        <S.IconDiv></S.IconDiv>
        <S.H1>Bem-vindo de volta!</S.H1>
        <S.H2>Entre na sua conta para acessar suas receitas favoritas</S.H2>
      </S.Header>
      <S.Form>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          <S.Form>
            <FieldFormik label="Email" name="email" type="email" />
            <FieldFormik label="Password" name="password" type="password" />
          </S.Form>
        </Formik>
      </S.Form>
    </S.Container>
  );
}
