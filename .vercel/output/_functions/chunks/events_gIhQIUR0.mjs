import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_DgJS7_4V.mjs";
import { t as createComponent } from "./compiler_B5eAMWii.mjs";
import { t as $$Layout } from "./Layout_BwhFszXU.mjs";
import { t as getCollection } from "./_astro_content_DoOKhVOE.mjs";
//#region src/pages/events.astro
var events_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Events,
	file: () => $$file,
	url: () => $$url
});
var $$Events = createComponent(async ($$result, $$props, $$slots) => {
	const allEvents = await getCollection("events");
	const featured = allEvents.find((e) => e.data.featured);
	const pastEvents = allEvents.filter((e) => !e.data.featured).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
	const categories = ["all", ...new Set(allEvents.map((e) => e.data.category))];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Events — Cyber Chakravyuh",
		"activePage": "events"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero-inner"><div class="container"><div class="section-label">WHAT WE DO</div><h1 class="hero-title">Events & Experiences</h1><p class="hero-subtitle">From CTFs to workshops — our calendar of cyber events</p></div></section>${featured && renderTemplate`<section class="section"><div class="container"><div class="featured-event two-col"><div>${featured.data.image ? renderTemplate`<img${addAttribute(featured.data.image, "src")}${addAttribute(featured.data.title, "alt")} style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">` : renderTemplate`<div style="background-color: var(--color-surface); width: 100%; height: 100%; min-height: 300px; border-radius: 8px; display: flex; align-items: center; justify-content: center;"><span style="color: var(--text-muted);">No Image</span></div>`}</div><div><div class="section-label">UPCOMING</div><h2 class="section-title">${featured.data.title}</h2><p class="section-desc">${featured.data.description}</p><div class="countdown" id="eventCountdown"${addAttribute(featured.data.countdownTarget || "", "data-target")}></div>${featured.data.registrationLink && renderTemplate`<a${addAttribute(featured.data.registrationLink, "href")} class="btn btn-primary">Register Now</a>`}</div></div></div></section>`}<section class="section section--alt"><div class="container"><div class="filter-tabs">${categories.map((cat) => renderTemplate`<button${addAttribute(`filter-tab ${cat === "all" ? "active" : ""}`, "class")}${addAttribute(cat, "data-filter")}>${cat === "all" ? "All" : cat.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</button>`)}</div><div class="events-grid">${pastEvents.map((event) => renderTemplate`<div class="event-card reveal"${addAttribute(event.data.category, "data-category")}>${event.data.image ? renderTemplate`<div class="event-card-img"${addAttribute(`background-image: url('${event.data.image}'); background-size: cover; background-position: center;`, "style")}></div>` : renderTemplate`<div class="event-card-img"><span>${event.data.category.toUpperCase().slice(0, 3)}</span></div>`}<div class="event-card-badge">${event.data.category.replace(/-/g, " ")}</div><div class="event-card-body"><div class="event-card-date"> ${new Date(event.data.date).toLocaleDateString("en-IN", {
		year: "numeric",
		month: "long",
		day: "numeric"
	})}</div><h3 class="event-card-title">${event.data.title}</h3><p class="event-card-desc">${event.data.description}</p></div></div>`)}</div></div></section><script>
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof initFilterTabs === 'function') initFilterTabs();
    var el = document.getElementById('eventCountdown');
    if (el && el.dataset.target && typeof initCountdown === 'function') {
      initCountdown(el.dataset.target, 'eventCountdown');
    }
  });
  <\/script>` })}`;
}, "C:/Users/yuvib/.gemini/antigravity/scratch/cyber-chakravyuh-astro/src/pages/events.astro", void 0);
var $$file = "C:/Users/yuvib/.gemini/antigravity/scratch/cyber-chakravyuh-astro/src/pages/events.astro";
var $$url = "/events";
//#endregion
//#region \0virtual:astro:page:src/pages/events@_@astro
var page = () => events_exports;
//#endregion
export { page };
