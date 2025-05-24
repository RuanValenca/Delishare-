import { Outlet } from "react-router-dom";

export default function LayoutMain() {
  return (
    <>
      <header>
        <h1>Cabeçalho</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
}
