import Link from "next/link";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import "@radix-ui/themes/styles.css";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`py-6 backdrop-blur-sm ${className}`}
      style={{
        backgroundColor: "rgba(var(--color-background), 0.8)",
      }}
    >
      <div
        className="container mx-auto text-center"
        style={{ maxWidth: "1100px", padding: "0 1rem" }}
      >
        <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://arushmittal.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Arush Mittal
          </Link>
          . All rights reserved. Formula 1, its logo and related materials are
          trademarks owned by the Fédération Internationale de l'Automobile
          (FIA).
          <div className="mt-2">
            &lt;/&gt; with 🏎️ and ☕ by{" "}
            <Link
              href="https://arushmittal.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Arush Mittal
            </Link>
          </div>
          <div className="mt-2">
            GitHub:{" "}
            <a
              href="https://github.com/saltpioneer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              github.com/saltpioneer
            </a>
          </div>
          <div className="mt-3">
            <a
              href="https://github.com/saltpioneer"
              style={{ marginRight: "8px" }}
            >
              <GitHubLogoIcon color="red" />
            </a>
            {" | "}
            <a
              href="https://twitter.com/publiclybuild"
              style={{ marginLeft: "8px" }}
            >
              <TwitterLogoIcon color="red" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
