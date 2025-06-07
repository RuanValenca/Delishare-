import * as S from "./styles";

interface Props {
  icon: React.ReactNode;
  name: string;
  description: string;
  bgColor: string;
  IconColor: string;
}

export default function CardInfo({
  icon,
  name,
  description,
  bgColor,
  IconColor,
}: Props) {
  return (
    <S.Container>
      <S.Icon IconColor={IconColor} bgColor={bgColor}>
        {icon}
      </S.Icon>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
