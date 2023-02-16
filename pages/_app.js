import { MainLayout } from "../src/components/layout/main-layout";
import "../styles/general.sass";


//root app
export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
