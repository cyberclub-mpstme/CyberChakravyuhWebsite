import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_DgJS7_4V.mjs";
import { t as createComponent } from "./compiler_B5eAMWii.mjs";
import { t as $$Layout } from "./Layout_BwhFszXU.mjs";
//#region src/pages/register.astro
var register_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Register,
	file: () => $$file,
	url: () => $$url
});
var $$Register = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Register — Cyber Chakravyuh",
		"activePage": "register"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div style="width: 100%; height: 80vh; min-height: 600px; position: relative;"><iframe data-tally-src="https://tally.so/r/0QzDXy?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="Become a Member of the Cyber Chakravyuh Committee" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: 0;"></iframe></div><script async src="https://tally.so/widgets/embed.js"><\/script>` })}`;
}, "C:/Users/yuvib/.gemini/antigravity/scratch/cyber-chakravyuh-astro/src/pages/register.astro", void 0);
var $$file = "C:/Users/yuvib/.gemini/antigravity/scratch/cyber-chakravyuh-astro/src/pages/register.astro";
var $$url = "/register";
//#endregion
//#region \0virtual:astro:page:src/pages/register@_@astro
var page = () => register_exports;
//#endregion
export { page };
