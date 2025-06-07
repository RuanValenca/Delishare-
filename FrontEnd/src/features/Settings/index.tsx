import * as S from "./styles";
import BasicButton from "../../components/BasicButton";
import FieldFormik from "../../components/FieldFormik";
import { Formik } from "formik";
import { ArrowLeft, Save } from "lucide-react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const theme = useTheme();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    description: "",
  };
  return (
    <S.Container>
      <S.DivTop>
        <S.ButtonBack>
          <BasicButton
            borderColor
            bgColorHover={theme.colors.greenSchema.light}
            icon={<ArrowLeft />}
            onClick={() => {
              navigate(-1);
            }}
            textColor={theme.font.colors.mainText}
            height={"medium"}
            width={"small"}
            bgColor={theme.colors.background}
          />
        </S.ButtonBack>
        <S.DivText>
          <S.Title>Configurações</S.Title>
          <S.Description>Gerencie as informações do seu perfil</S.Description>
        </S.DivText>
      </S.DivTop>

      <S.DivInfo>
        <S.TitleInfo>Perfil</S.TitleInfo>
        <S.Info>
          <S.DivImage>
            <S.Img
              src="https://avatars.githubusercontent.com/u/123456789?v=4"
              alt="Profile"
            />
          </S.DivImage>
          <S.Form>
            <Formik initialValues={initialValues} onSubmit={() => {}}>
              <>
                <FieldFormik
                  placeholder="Digite seu nome"
                  heightSize="xsmall"
                  widthSize="fullWidth"
                  name="name"
                  type="string"
                  label="Nome"
                  labelPosition="top"
                />
                <FieldFormik
                  placeholder="Digite uma descrição"
                  heightSize="xsmall"
                  widthSize="fullWidth"
                  name="description"
                  type="string"
                  label="Descrição"
                  labelPosition="top"
                />
              </>
            </Formik>
            <BasicButton
              height="small"
              icon={<Save size={20} />}
              onClick={() => {}}
              textColor={theme.font.colors.whiteText}
              width={"fullWidth"}
              bgColor={theme.colors.gradientBackground}
            >
              Salvar Alterações
            </BasicButton>
          </S.Form>
        </S.Info>
      </S.DivInfo>
    </S.Container>
  );
}
