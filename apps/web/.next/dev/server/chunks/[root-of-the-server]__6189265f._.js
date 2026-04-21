module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/packages/backend/src/modules/cloudinary/cloudinary.client.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cloudinary@2.8.0/node_modules/cloudinary/cloudinary.js [app-route] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v2"].config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});
;
}),
"[project]/packages/backend/src/modules/cloudinary/services/cloudinary.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildAuthenticatedUrl",
    ()=>buildAuthenticatedUrl,
    "deleteByPrefix",
    ()=>deleteByPrefix,
    "fetchAuthenticatedAsset",
    ()=>fetchAuthenticatedAsset,
    "fileExists",
    ()=>fileExists,
    "getAssetInfo",
    ()=>getAssetInfo,
    "listAuthenticatedResources",
    ()=>listAuthenticatedResources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$cloudinary$2e$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/cloudinary.client.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cloudinary@2.8.0/node_modules/cloudinary/cloudinary.js [app-route] (ecmascript) <export v2 as cloudinary>");
;
/* -------------------------------------------------------------------------- */ /*                              CONFIG TRANSFO                                */ /* -------------------------------------------------------------------------- */ const transformations = {
    thumb: {
        width: 150,
        height: 150,
        crop: "fill"
    },
    small: {
        width: 300,
        crop: "scale"
    },
    medium: {
        width: 600,
        crop: "scale"
    },
    large: {
        width: 1200,
        crop: "scale"
    },
    original: {}
};
function buildAuthenticatedUrl(publicId, variant, resourceType = "image") {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].url(publicId, {
        transformation: transformations[variant],
        sign_url: true,
        type: "authenticated",
        resource_type: resourceType,
        secure: true
    });
}
async function fetchAuthenticatedAsset(publicId, variant) {
    for (const rt of [
        "image",
        "video",
        "raw"
    ]){
        try {
            const url = buildAuthenticatedUrl(publicId, variant, rt);
            const res = await fetch(url);
            if (!res.ok) continue;
            return new Response(res.body, {
                headers: {
                    "Content-Type": res.headers.get("content-type") ?? "application/octet-stream",
                    "Cache-Control": "public, max-age=31536000, immutable"
                }
            });
        } catch  {
        // on tente le prochain resource_type
        }
    }
    return null;
}
async function getAssetInfo(publicId) {
    for (const rt of [
        "image",
        "video",
        "raw"
    ]){
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resource(publicId, {
                type: "authenticated",
                resource_type: rt
            });
            if (res?.public_id) {
                return {
                    resource_type: rt,
                    bytes: typeof res.bytes === "number" ? res.bytes : undefined,
                    created_at: res.created_at ? String(res.created_at) : undefined
                };
            }
        } catch  {
        // try next
        }
    }
    throw new Error(`Asset not found (any resource_type): ${publicId}`);
}
async function fileExists(publicId) {
    for (const rt of [
        "image",
        "video",
        "raw"
    ]){
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resource(publicId, {
                type: "authenticated",
                resource_type: rt
            });
            if (res?.public_id) return true;
        } catch  {
        // continue
        }
    }
    return false;
}
async function deleteByPrefix(prefix) {
    for (const resourceType of [
        "image",
        "video",
        "raw"
    ]){
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.delete_resources_by_prefix(prefix, {
            type: "authenticated",
            resource_type: resourceType
        });
    }
    return {
        success: true
    };
}
async function listAuthenticatedResources(prefix) {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resources({
        type: "authenticated",
        prefix,
        max_results: 500
    });
    return result.resources.map((r)=>({
            publicId: r.public_id,
            url: r.secure_url
        }));
}
}),
"[project]/apps/web/src/app/api/media/by-public-id/[...publicId]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/cloudinary.service.ts [app-route] (ecmascript)");
;
function parseVariant(value) {
    if (value === "thumb") return "thumb";
    if (value === "medium") return "medium";
    if (value === "large") return "large";
    if (value === "original") return "original";
    return "large";
}
async function GET(req, { params }) {
    const { publicId } = await params;
    const id = publicId?.join("/");
    if (!id) {
        return new Response("Missing publicId", {
            status: 400
        });
    }
    const { searchParams } = new URL(req.url);
    const rawVariant = searchParams.get("variant");
    const variant = parseVariant(rawVariant);
    const asset = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchAuthenticatedAsset"])(id, variant);
    if (!asset || !asset.ok) {
        return new Response("Not found", {
            status: 404
        });
    }
    // 🔥 récupérer le binaire
    const buffer = await asset.arrayBuffer();
    // 🔥 récupérer le content-type réel
    const contentType = asset.headers.get("content-type") || "image/jpeg";
    return new Response(buffer, {
        status: 200,
        headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=31536000, immutable"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6189265f._.js.map