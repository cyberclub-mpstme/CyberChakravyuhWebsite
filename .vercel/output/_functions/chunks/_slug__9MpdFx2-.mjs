import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_DgJS7_4V.mjs";
import { t as createComponent } from "./compiler_B5eAMWii.mjs";
import { t as $$Layout } from "./Layout_BwhFszXU.mjs";
import { t as getCollection } from "./_astro_content_DoOKhVOE.mjs";
//#region src/pages/newsletter/read/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://www.cyberchakravyuh.in");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const newsletter = (await getCollection("newsletters")).find((n) => n.slug === slug);
	if (!newsletter) return Astro.redirect("/newsletter");
	const { title, issueNumber, date, description, pdfFile, downloads, views } = newsletter.data;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${title} — Zero Day Newsletter`,
		"activePage": "newsletter"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="zd-reader-header"><div class="container"><div class="zd-reader-nav"><a href="/newsletter" class="zd-back-link"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>Back to all editions</a><div class="zd-reader-actions">${pdfFile && renderTemplate`<a${addAttribute(pdfFile, "href")} download class="btn btn-primary zd-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>Download PDF</a>`}</div></div><div class="zd-reader-info"><div class="zd-edition-badge">Edition #${issueNumber}</div><h1 class="zd-reader-title">${title}</h1><p class="zd-reader-date">${new Date(date).toLocaleDateString("en-IN", {
		year: "numeric",
		month: "long",
		day: "numeric"
	})}</p><div class="zd-edition-meta" style="justify-content:center;"><span class="zd-edition-meta-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>${views || 0} views</span><span class="zd-edition-meta-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>${downloads || 0} downloads</span></div></div></div></section><section class="zd-reader-viewer"><div class="container">${pdfFile ? renderTemplate`<div class="zd-pdf-container"><iframe${addAttribute(pdfFile, "src")}${addAttribute(`${title} — PDF Reader`, "title")} class="zd-pdf-iframe" allowfullscreen></iframe></div>` : renderTemplate`<div class="zd-pdf-placeholder"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg><p>PDF not available yet. Check back soon!</p></div>`}</div></section>` })}`;
}, "C:/Users/yuvib/.gemini/antigravity/scratch/cyber-chakravyuh-astro/src/pages/newsletter/read/[slug].astro", void 0);
var $$file = "C:/Users/yuvib/.gemini/antigravity/scratch/cyber-chakravyuh-astro/src/pages/newsletter/read/[slug].astro";
var $$url = "/newsletter/read/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/newsletter/read/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
