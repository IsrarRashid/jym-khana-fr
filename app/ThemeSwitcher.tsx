"use client";

import { Theme } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
// import { ThemeProvider } from "next-themes";

const ThemeSwitcher = ({ children }: PropsWithChildren) => {
  // const [mode, setMode] = useState<boolean>(false);

  const currentColor = useSelector(
    (state: RootState) => state.color.currentColor
  );

  const currentMode = useSelector((state: RootState) => state.mode.currentMode);

  return (
    // <ThemeProvider attribute="class">
    <Theme
      panelBackground="translucent"
      accentColor={currentColor}
      radius="large"
      appearance={currentMode}
    >
      {children}
      {/* <Button
        className="absolute bottom-0 right-0"
        onClick={() => setMode(!mode)}
        color="bronze"
      >
        Mode Switcher
      </Button> */}
      {/* <ThemePanel /> */}
    </Theme>
    // </ThemeProvider>
  );
};

export default ThemeSwitcher;
