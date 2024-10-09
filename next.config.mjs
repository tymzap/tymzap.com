import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import withSvgr from "next-plugin-svgr";
import createNextIntlPlugin from "next-intl/plugin";

const withVanillaExtract = createVanillaExtractPlugin();
const withNextIntl = createNextIntlPlugin("./src/lib/getI18nRequestConfig.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(withVanillaExtract(withSvgr(nextConfig)));
