import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {/* the children prop allows to render all the Pages components */}
        {children}
      </main>
      <Footer />
    </>
  );
};
