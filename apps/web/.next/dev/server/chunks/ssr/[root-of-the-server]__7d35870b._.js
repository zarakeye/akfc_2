module.exports = [
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
"[project]/packages/backend/src/modules/cloudinary/services/upload.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSignedImageUrl",
    ()=>getSignedImageUrl,
    "uploadToCloudinary",
    ()=>uploadToCloudinary,
    "uploadToCloudinaryAuthenticated",
    ()=>uploadToCloudinaryAuthenticated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cloudinary@2.8.0/node_modules/cloudinary/cloudinary.js [app-rsc] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["v2"].config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});
async function uploadToCloudinary(file, { folder, publicId }) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return new Promise((resolve, reject)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["v2"].uploader.upload_stream({
            folder,
            public_id: publicId,
            resource_type: 'image',
            type: 'authenticated',
            overwrite: false
        }, (err, result)=>{
            if (err || !result) reject(err);
            else resolve({
                public_id: result.public_id,
                secure_url: result.secure_url
            });
        }).end(buffer);
    });
}
async function uploadToCloudinaryAuthenticated(file, { folder, publicId }) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return new Promise((resolve, reject)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["v2"].uploader.upload_stream({
            folder,
            public_id: publicId,
            type: 'authenticated',
            overwrite: false,
            resource_type: 'image'
        }, (error, result)=>{
            if (error || !result) {
                reject(error || new Error('Upload failed'));
            } else {
                resolve({
                    public_id: result.public_id
                });
            }
        }).end(buffer);
    // // Node.js File -> buffer -> stream
    // const reader = new FileReader();
    // reader.onload = () => {
    //   const arrayBuffer = reader.result as ArrayBuffer;
    //   stream.end(Buffer.from(arrayBuffer));
    // };
    // reader.onerror = reject;
    // reader.readAsArrayBuffer(file);
    });
}
function getSignedImageUrl(publicId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["v2"].url(publicId, {
        type: 'authenticated',
        secure: true,
        sign_url: true,
        expires_at: Math.floor(Date.now() / 1000) + 60 * 5
    });
}
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/packages/backend/src/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        "error",
        "warn"
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/apps/web/src/features/admin/pictures/actions/picturesDragNDropForm.action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60612ec970da4d5b4d2b5f6901a81ba6d773aabb10":"picturesDragNDropFormAction"},"",""] */ __turbopack_context__.s([
    "picturesDragNDropFormAction",
    ()=>picturesDragNDropFormAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/upload.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slugify$40$1$2e$6$2e$6$2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const APP_SHORT_NAME = process.env.APP_SHORT_NAME || 'my-app';
async function picturesDragNDropFormAction(_, formData) {
    try {
        const userId = formData.get('userId')?.toString();
        const categoryId = formData.get('categoryId')?.toString();
        const activityId = formData.get('activityId')?.toString();
        const newActivityName = formData.get('newActivityName')?.toString();
        const files = formData.getAll('pictures');
        if (!userId) return {
            success: false,
            error: 'Utilisateur non authentifié'
        };
        if (!files.length) return {
            success: false,
            error: 'Aucune image fournie'
        };
        if (!categoryId) return {
            success: false,
            error: 'Catégorie requise'
        };
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].category.findUnique({
            where: {
                id: Number(categoryId)
            }
        });
        if (!category) {
            return {
                success: false,
                error: 'Catégorie invalide'
            };
        }
        let activitySlug;
        if (activityId) {
            const course = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].course.findUnique({
                where: {
                    id: Number(activityId)
                }
            });
            if (!course) {
                return {
                    success: false,
                    error: 'Activité invalide'
                };
            }
            activitySlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slugify$40$1$2e$6$2e$6$2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(course.label, {
                lower: true,
                strict: true
            });
        } else {
            if (!newActivityName) {
                return {
                    success: false,
                    error: 'Nom de l’activité requis'
                };
            }
            activitySlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slugify$40$1$2e$6$2e$6$2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(newActivityName, {
                lower: true,
                strict: true
            });
        }
        const categorySlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$slugify$40$1$2e$6$2e$6$2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(category.type, {
            lower: true,
            strict: true
        });
        const folder = `${APP_SHORT_NAME}/pending/${categorySlug}/${activitySlug}`;
        for (const file of files){
            if (file.size === 0) {
                throw new Error('Fichier vide détecté');
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadToCloudinaryAuthenticated"])(file, {
                folder,
                publicId: crypto.randomUUID()
            });
        }
        return {
            success: true
        };
    } catch (err) {
        console.error('Cloudinary upload error:', err);
        return {
            success: false,
            error: err instanceof Error ? err.message : 'Erreur lors de l’upload des images'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    picturesDragNDropFormAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(picturesDragNDropFormAction, "60612ec970da4d5b4d2b5f6901a81ba6d773aabb10", null);
}),
"[project]/apps/web/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/src/features/admin/pictures/actions/picturesDragNDropForm.action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$admin$2f$pictures$2f$actions$2f$picturesDragNDropForm$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/admin/pictures/actions/picturesDragNDropForm.action.ts [app-rsc] (ecmascript)");
;
}),
"[project]/apps/web/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/src/features/admin/pictures/actions/picturesDragNDropForm.action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60612ec970da4d5b4d2b5f6901a81ba6d773aabb10",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$admin$2f$pictures$2f$actions$2f$picturesDragNDropForm$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["picturesDragNDropFormAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f$gallery$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$admin$2f$pictures$2f$actions$2f$picturesDragNDropForm$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/gallery/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/src/features/admin/pictures/actions/picturesDragNDropForm.action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$admin$2f$pictures$2f$actions$2f$picturesDragNDropForm$2e$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/admin/pictures/actions/picturesDragNDropForm.action.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7d35870b._.js.map