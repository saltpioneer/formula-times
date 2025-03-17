import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme
          accentColor="ruby"
          radius="small"
          scaling="105%"
          appearance="dark"
        >
          <div className="background-overlay">{children}</div>
        </Theme>
      </body>
    </html>
  );
}
