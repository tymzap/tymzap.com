import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import withSvgr from "next-plugin-svgr";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withVanillaExtract(withSvgr(nextConfig));
