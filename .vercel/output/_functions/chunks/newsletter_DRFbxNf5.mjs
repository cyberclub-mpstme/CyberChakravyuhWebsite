import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_DgJS7_4V.mjs";
import { t as createComponent } from "./compiler_B5eAMWii.mjs";
import { t as $$Layout } from "./Layout_BwhFszXU.mjs";
import { t as getCollection } from "./_astro_content_DoOKhVOE.mjs";
//#region src/pages/newsletter.astro
var newsletter_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Newsletter,
	file: () => $$file,
	url: () => $$url
});
var $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
	const sorted = (await getCollection("newsletters")).sort((a, b) => b.data.issueNumber - a.data.issueNumber);
	const totalDownloads = sorted.reduce((sum, n) => sum + (n.data.downloads || 0), 0);
	const totalViews = sorted.reduce((sum, n) => sum + (n.data.views || 0), 0);
	const totalEditions = sorted.length;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Zero Day Newsletter — Cyber Chakravyuh",
		"activePage": "newsletter"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="zd-hero"><div class="container"><div class="zd-hero-inner"><img src="/assets/zeroday-logo.png" alt="The Zero Day Newsletter" class="zd-hero-logo"><p class="zd-hero-tagline">Secure Trust, Empowering Innovation</p></div></div></section><section class="zd-stats-bar"><div class="container"><div class="zd-stats-row"><div class="zd-stat"><span class="zd-stat-number"${addAttribute(totalEditions, "data-count")} data-suffix="">${totalEditions}</span><span class="zd-stat-label">Editions Published</span></div><div class="zd-stat-divider"></div><div class="zd-stat"><span class="zd-stat-number"${addAttribute(totalViews, "data-count")} data-suffix="">${totalViews}</span><span class="zd-stat-label">Total Views</span></div><div class="zd-stat-divider"></div><div class="zd-stat"><span class="zd-stat-number"${addAttribute(totalDownloads, "data-count")} data-suffix="">${totalDownloads}</span><span class="zd-stat-label">Total Downloads</span></div></div></div></section><section class="section"><div class="container"><div class="section-header center reveal"><div class="section-label">ALL EDITIONS</div><h2 class="section-title">Browse Our Publications</h2></div><div class="zd-editions-grid">${sorted.map((issue) => renderTemplate`<div class="zd-edition-card reveal"><div class="zd-edition-cover">${issue.data.coverImage ? renderTemplate`<img${addAttribute(issue.data.coverImage, "src")}${addAttribute(issue.data.title, "alt")}>` : renderTemplate`<div class="zd-edition-cover-placeholder"><span class="zd-edition-cover-number">#${issue.data.issueNumber}</span><span class="zd-edition-cover-name">ZERO DAY</span></div>`}</div><div class="zd-edition-info"><div class="zd-edition-badge">Edition #${issue.data.issueNumber}</div><h3 class="zd-edition-title">${issue.data.title}</h3><p class="zd-edition-date">${new Date(issue.data.date).toLocaleDateString("en-IN", {
		year: "numeric",
		month: "long",
		day: "numeric"
	})}</p><p class="zd-edition-desc">${issue.data.description}</p><div class="zd-edition-meta"><span class="zd-edition-meta-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>${issue.data.views || 0} views</span><span class="zd-edition-meta-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>${issue.data.downloads || 0} downloads</span></div><div class="zd-edition-actions">${issue.data.pdfFile && renderTemplate`<a${addAttribute(`/newsletter/read/${issue.slug}`, "href")} class="btn btn-primary zd-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>Read Now</a>`}${issue.data.pdfFile && renderTemplate`<a${addAttribute(issue.data.pdfFile, "href")} download class="btn btn-outline zd-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>Download PDF</a>`}</div></div></div>`)}</div>${sorted.length === 0 && renderTemplate`<div class="zd-empty"><p>No editions published yet. The first edition of Zero Day is coming soon!</p></div>`}</div></section><section class="section section--alt"><div class="container"><div class="newsletter-cta reveal"><div class="newsletter-cta-logo"><img src="/assets/zeroday-logo.png" alt="Zero Day"></div><div><h2 class="newsletter-cta-title">Subscribe to Zero Day</h2><form class="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing to Zero Day!');"><input type="email" class="form-input" placeholder="Your Email Address" required><button type="submit" class="btn btn-primary">Subscribe</button></form></div></div></div></section>` })}`;
}, "C:/Users/yuvib/.gemini/antigravity/scratch/cyber-chakravyuh-astro/src/pages/newsletter.astro", void 0);
var $$file = "C:/Users/yuvib/.gemini/antigravity/scratch/cyber-chakravyuh-astro/src/pages/newsletter.astro";
var $$url = "/newsletter";
//#endregion
//#region \0virtual:astro:page:src/pages/newsletter@_@astro
var page = () => newsletter_exports;
//#endregion
export { page };
