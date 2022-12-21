import { Helmet, HelmetProvider } from "react-helmet-async";
import { useThemeStore } from "@store/storeTheme";

const Head = () => {
  const { theme } = useThemeStore();

  return (
    <HelmetProvider>
      <Helmet>
        <html data-theme={theme} />
        <body className="font-nunito-sans" />
        <title>Countries of The World</title>
        <meta
          name="description"
          content="REST Countries API with color theme switcher"
        />
        <link rel="icon" href="/icon.ico" />
      </Helmet>
    </HelmetProvider>
  );
};

export default Head;
