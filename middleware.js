import createMiddleware from "next-intl/middleware";

export const AppLanguage = {
  English: "en",
  Chinese: "zh-hans",

};

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "zh-hans"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
  localeDetection: false,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
