import NavBar from "../../components/NavBar";
import MainSlide from "./components/MainSlide";
import MainRecipes from "./components/MainRecipes";
import * as S from "./styles";
import Footer from "../../components/Footer";
export default function DelishareMenu() {
  return (
    <S.Container>
      <NavBar />
      <MainSlide />
      <MainRecipes />
      <Footer />
    </S.Container>
  );
}
