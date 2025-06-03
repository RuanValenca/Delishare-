import * as S from "./styles";

interface Props {
  icon: React.ReactNode;
  name: string;
  description: string;
  bgColor: string;
}

export default function CardInfo({ icon, name, description, bgColor }: Props) {
  return (
    <S.Container>
      <>
        <S.Icon bgColor={bgColor}>{icon}</S.Icon>
        <S.Name>{name}</S.Name>
      </>
      <S.DivDescription>
        <S.Description>{description}</S.Description>
      </S.DivDescription>
    </S.Container>
  );
}
