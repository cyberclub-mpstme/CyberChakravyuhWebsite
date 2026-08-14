import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { makeGenericAPIRouteHandler } from "@keystatic/core/api/generic";
import { parseString } from "set-cookie-parser";
import { collection, config, fields } from "@keystatic/core";
//#region node_modules/@keystatic/astro/dist/keystatic-astro-api.js
function makeHandler(_config) {
	return async function keystaticAPIRoute(context) {
		var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
		const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
		const { body, headers, status } = await makeGenericAPIRouteHandler({
			..._config,
			clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {}),
			clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {}),
			secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {})
		}, { slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG" })(context.request);
		let headersInADifferentStructure = /* @__PURE__ */ new Map();
		if (headers) if (Array.isArray(headers)) for (const [key, value] of headers) {
			if (!headersInADifferentStructure.has(key.toLowerCase())) headersInADifferentStructure.set(key.toLowerCase(), []);
			headersInADifferentStructure.get(key.toLowerCase()).push(value);
		}
		else if (typeof headers.entries === "function") {
			for (const [key, value] of headers.entries()) headersInADifferentStructure.set(key.toLowerCase(), [value]);
			if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
				const setCookieHeaders2 = headers.getSetCookie();
				if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
			}
		} else for (const [key, value] of Object.entries(headers)) headersInADifferentStructure.set(key.toLowerCase(), [value]);
		const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
		headersInADifferentStructure.delete("set-cookie");
		if (setCookieHeaders) for (const setCookieValue of setCookieHeaders) {
			var _options$sameSite;
			const { name, value, ...options } = parseString(setCookieValue);
			const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
			context.cookies.set(name, value, {
				domain: options.domain,
				expires: options.expires,
				httpOnly: options.httpOnly,
				maxAge: options.maxAge,
				path: options.path,
				sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
			});
		}
		return new Response(body, {
			status,
			headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
		});
	};
}
function tryOrUndefined(fn) {
	try {
		return fn();
	} catch {
		return;
	}
}
//#endregion
//#region keystatic.config.ts
var keystatic_config_default = config({
	storage: process.env.NODE_ENV === "development" ? { kind: "local" } : { kind: "cloud" },
	cloud: { project: "chakravyuh-admin/chakravyuhwebsite" },
	ui: { brand: { name: "Cyber Chakravyuh Admin" } },
	collections: {
		events: collection({
			label: "Events",
			slugField: "title",
			path: "src/content/events/*",
			format: { data: "yaml" },
			schema: {
				title: fields.slug({ name: { label: "Event Title" } }),
				image: fields.image({
					label: "Cover Image",
					directory: "public/images/events",
					publicPath: "/images/events/"
				}),
				date: fields.date({
					label: "Event Date",
					validation: { isRequired: true }
				}),
				category: fields.select({
					label: "Category",
					options: [
						{
							label: "CTF Competition",
							value: "ctf"
						},
						{
							label: "Workshop",
							value: "workshop"
						},
						{
							label: "Guest Lecture",
							value: "guest-lecture"
						},
						{
							label: "Hackathon",
							value: "hackathon"
						}
					],
					defaultValue: "workshop"
				}),
				description: fields.text({
					label: "Short Description",
					multiline: true
				}),
				featured: fields.checkbox({
					label: "Featured Event",
					defaultValue: false
				}),
				countdownTarget: fields.datetime({ label: "Countdown Target (for featured events)" }),
				registrationLink: fields.url({ label: "Registration Link" })
			}
		}),
		newsletters: collection({
			label: "Newsletters",
			slugField: "title",
			path: "src/content/newsletters/*",
			format: { data: "yaml" },
			schema: {
				title: fields.slug({ name: { label: "Edition Title" } }),
				coverImage: fields.image({
					label: "Cover Page Image",
					directory: "public/images/newsletters",
					publicPath: "/images/newsletters/"
				}),
				issueNumber: fields.integer({
					label: "Edition Number",
					validation: { isRequired: true }
				}),
				date: fields.date({
					label: "Publish Date",
					validation: { isRequired: true }
				}),
				description: fields.text({
					label: "Short Description",
					multiline: true
				}),
				pdfFile: fields.text({ label: "PDF File Path (e.g. /newsletters/zero-day-edition-1.pdf)" }),
				downloads: fields.integer({
					label: "Download Count",
					defaultValue: 0
				}),
				views: fields.integer({
					label: "View Count",
					defaultValue: 0
				})
			}
		}),
		team: collection({
			label: "Team Members",
			slugField: "name",
			path: "src/content/team/*",
			format: { data: "yaml" },
			schema: {
				name: fields.slug({ name: { label: "Full Name" } }),
				image: fields.image({
					label: "Profile Photo",
					directory: "public/images/team",
					publicPath: "/images/team/"
				}),
				role: fields.text({
					label: "Role / Title",
					validation: { isRequired: true }
				}),
				department: fields.select({
					label: "Department",
					options: [
						{
							label: "Faculty Mentor",
							value: "faculty-mentor"
						},
						{
							label: "Leadership",
							value: "leadership"
						},
						{
							label: "Technical",
							value: "technical"
						},
						{
							label: "Events",
							value: "events"
						},
						{
							label: "Marketing",
							value: "marketing"
						},
						{
							label: "Content",
							value: "content"
						},
						{
							label: "Design",
							value: "design"
						},
						{
							label: "Operations",
							value: "operations"
						}
					],
					defaultValue: "technical"
				}),
				order: fields.integer({
					label: "Display Order",
					defaultValue: 10
				}),
				linkedin: fields.url({ label: "LinkedIn URL" }),
				github: fields.url({ label: "GitHub URL" }),
				twitter: fields.url({ label: "Twitter/X URL" })
			}
		}),
		achievements: collection({
			label: "Achievements",
			slugField: "title",
			path: "src/content/achievements/*",
			format: { data: "yaml" },
			schema: {
				title: fields.slug({ name: { label: "Achievement Title" } }),
				event: fields.text({
					label: "Event / Competition Name",
					validation: { isRequired: true }
				}),
				date: fields.date({
					label: "Date",
					validation: { isRequired: true }
				}),
				description: fields.text({
					label: "Description",
					multiline: true
				}),
				icon: fields.text({
					label: "Icon (emoji)",
					defaultValue: "🏆"
				})
			}
		})
	}
});
//#endregion
//#region node_modules/@keystatic/astro/internal/keystatic-api.js
var keystatic_api_exports = /* @__PURE__ */ __exportAll({
	ALL: () => ALL,
	all: () => all,
	prerender: () => false
});
var all = makeHandler({ config: keystatic_config_default });
var ALL = all;
//#endregion
//#region \0virtual:astro:page:node_modules/@keystatic/astro/internal/keystatic-api@_@js
var page = () => keystatic_api_exports;
//#endregion
export { page };
