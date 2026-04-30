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
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/packages/backend/src/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/packages/contracts/src/auth/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COOKIE_NAME",
    ()=>COOKIE_NAME,
    "SESSION_DURATION_MS",
    ()=>SESSION_DURATION_MS
]);
const COOKIE_NAME = "__session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
;
}),
"[project]/packages/backend/src/modules/auth/getSessionFromRequest.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSessionFromRequest",
    ()=>getSessionFromRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonwebtoken$40$9$2e$0$2e$2$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$src$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/src/auth/constants.ts [app-route] (ecmascript)");
;
;
;
;
const JWT_SECRET = process.env.JWT_SECRET;
function mapSessionDBToSessionClient(session) {
    const role = session.user.role;
    return {
        expiresAt: session.expiresAt,
        user: {
            id: session.user.id,
            email: session.user.email,
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            pseudo: session.user.pseudo,
            avatar: session.user.avatar,
            isFirstLogin: session.user.isFirstLogin,
            role: role ? {
                id: role.id,
                name: role.name,
                permissions: role.permissions.map((rp)=>rp.permission.name)
            } : null
        }
    };
}
function getCookieFromHeader(cookieHeader, name) {
    if (!cookieHeader) return null;
    const parts = cookieHeader.split(";").map((p)=>p.trim());
    for (const p of parts){
        if (!p) continue;
        const eq = p.indexOf("=");
        if (eq === -1) continue;
        const k = p.slice(0, eq).trim();
        const v = p.slice(eq + 1).trim();
        if (k === name) return decodeURIComponent(v);
    }
    return null;
}
async function readAuthToken(req) {
    if (req) {
        const token = getCookieFromHeader(req.headers.get("cookie"), __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$src$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COOKIE_NAME"]);
        if (token) return token;
    }
    try {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        return cookieStore.get(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$src$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COOKIE_NAME"])?.value ?? null;
    } catch  {
        return null;
    }
}
async function getSessionFromRequest(req) {
    const token = await readAuthToken(req);
    if (!token) return null;
    if (!JWT_SECRET) return null;
    let payload;
    try {
        payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonwebtoken$40$9$2e$0$2e$2$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch  {
        return null;
    }
    const sessionDB = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].session.findUnique({
        where: {
            id: payload.sessionId
        },
        include: {
            user: {
                include: {
                    role: {
                        include: {
                            permissions: {
                                include: {
                                    permission: true
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    if (!sessionDB) return null;
    if (sessionDB.expiresAt < new Date()) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].session.deleteMany({
            where: {
                id: sessionDB.id
            }
        });
        return null;
    }
    if (!sessionDB.user) {
        return null;
    }
    return mapSessionDBToSessionClient(sessionDB);
}
}),
"[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTRPCContext",
    ()=>createTRPCContext,
    "protectedProcedure",
    ()=>protectedProcedure,
    "publicProcedure",
    ()=>publicProcedure,
    "router",
    ()=>router,
    "t",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$initTRPC$2d$CB9uBez5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/initTRPC-CB9uBez5.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$6$2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/superjson@2.2.6/node_modules/superjson/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$auth$2f$getSessionFromRequest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/auth/getSessionFromRequest.ts [app-route] (ecmascript)");
;
;
;
;
function getIpFromRequest(req) {
    const xff = req.headers.get("x-forwarded-for");
    if (xff) {
        const first = xff.split(",")[0]?.trim();
        if (first) return first;
    }
    const realIp = req.headers.get("x-real-ip");
    if (realIp) return realIp;
    return null;
}
async function createTRPCContext({ req }) {
    const sessionClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$auth$2f$getSessionFromRequest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionFromRequest"])(req);
    return {
        sessionClient,
        prisma: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"],
        requestIp: getIpFromRequest(req),
        userAgent: req.headers.get("user-agent")
    };
}
const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$initTRPC$2d$CB9uBez5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTRPC"].context().create({
    transformer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$6$2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
});
const router = t.router;
const publicProcedure = t.procedure;
const isAuthed = t.middleware(({ ctx, next })=>{
    const sessionClient = ctx.sessionClient;
    if (!sessionClient?.user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "UNAUTHORIZED"
        });
    }
    return next({
        ctx: {
            ...ctx,
            sessionClient: sessionClient
        }
    });
});
const protectedProcedure = t.procedure.use(isAuthed);
}),
"[project]/packages/backend/src/modules/auth/router.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authRouter",
    ()=>authRouter
]);
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/trpc/core'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/lib/session/session.server'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/modules/auth/services/auth.service'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/modules/auth/services/passwordReset.service'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/email/services/sendPasswordResetEmail'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/prisma'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
const authRouter = router({
    login: publicProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(),
        password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(12, "Le mot de passe doit avoir au moins 12 caractères")
    })).mutation(async ({ input })=>{
        const { email, password } = input;
        try {
            await loginService(email, password);
            return {
                success: true
            };
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"] && error.message === "INVALID_CREDENTIALS") {
                return {
                    success: false,
                    error: "INVALID_CREDENTIALS"
                };
            }
            return {
                success: false,
                error: "LOGIN_FAILED"
            };
        }
    }),
    logout: protectedProcedure.mutation(async ()=>{
        await deleteSessionFromCookie();
        return {
            success: true
        };
    }),
    getSession: publicProcedure.query(async ({ ctx })=>{
        return ctx.sessionClient;
    }),
    requestPasswordReset: publicProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email()
    })).mutation(async ({ input, ctx })=>{
        const email = input.email.trim().toLowerCase();
        const user = await prisma.user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                email: true
            }
        });
        if (!user) {
            return {
                ok: true
            };
        }
        const lastToken = await prisma.passwordResetToken.findFirst({
            where: {
                userId: user.id
            },
            orderBy: {
                createdAt: "desc"
            },
            select: {
                createdAt: true
            }
        });
        if (lastToken) {
            const elapsed = Date.now() - lastToken.createdAt.getTime();
            if (elapsed < RESET_TOKEN_COOLDOWN_MS) {
                return {
                    ok: true
                };
            }
        }
        const { token, tokenHash } = createPasswordResetToken();
        const expiresAt = new Date(Date.now() + RESET_TOKEN_TTL_MS);
        await prisma.passwordResetToken.create({
            data: {
                userId: user.id,
                tokenHash,
                expiresAt,
                requestIp: ctx.requestIp ?? null,
                userAgent: ctx.userAgent ?? null
            }
        });
        await sendPasswordResetEmail({
            toEmail: user.email,
            token
        });
        return {
            ok: true
        };
    }),
    resetPassword: publicProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10),
        newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(12, "Le mot de passe doit faire au moins 12 caractères")
    })).mutation(async ({ input })=>{
        const token = input.token.trim();
        const tokenHash = hashResetToken(token);
        const entry = await prisma.passwordResetToken.findUnique({
            where: {
                tokenHash
            },
            select: {
                id: true,
                userId: true,
                expiresAt: true,
                usedAt: true
            }
        });
        if (!entry) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "Invalid or expired token"
            });
        }
        if (entry.usedAt) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "Token already used"
            });
        }
        if (entry.expiresAt.getTime() < Date.now()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "Token expired"
            });
        }
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(input.newPassword, 12);
        await prisma.$transaction(async (tx)=>{
            await tx.user.update({
                where: {
                    id: entry.userId
                },
                data: {
                    password: hashedPassword,
                    isFirstLogin: false
                }
            });
            await tx.passwordResetToken.update({
                where: {
                    id: entry.id
                },
                data: {
                    usedAt: new Date()
                }
            });
            await tx.session.deleteMany({
                where: {
                    userId: entry.userId
                }
            });
        });
        return {
            ok: true
        };
    })
});
}),
"[project]/packages/backend/src/modules/users/router.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userRouter",
    ()=>userRouter
]);
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/trpc/core'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/trpc/middleware'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@workspace/contracts/schemas/forms/updateMeForm.schema'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@workspace/contracts/schemas/forms/updateUserRoleById.schema'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
const userRouter = router({
    getAll: protectedProcedure.use(requirePermission("manage_users")).query(async ({ ctx })=>{
        return ctx.prisma.user.findMany({
            orderBy: {
                id: "asc"
            },
            include: {
                role: {
                    include: {
                        permissions: {
                            include: {
                                permission: true
                            }
                        }
                    }
                }
            }
        });
    }),
    getById: protectedProcedure.use(requirePermission("manage_users")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const user = await ctx.prisma.user.findUnique({
            where: {
                id: input.id
            },
            include: {
                role: {
                    include: {
                        permissions: {
                            include: {
                                permission: true
                            }
                        }
                    }
                }
            }
        });
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "User not found"
            });
        }
        return user;
    }),
    getByEmail: protectedProcedure.use(requirePermission("manage_users")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email()
    })).query(async ({ ctx, input })=>{
        const user = await ctx.prisma.user.findUnique({
            where: {
                email: input.email
            },
            include: {
                role: {
                    include: {
                        permissions: {
                            include: {
                                permission: true
                            }
                        }
                    }
                }
            }
        });
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "User not found"
            });
        }
        return user;
    }),
    create: protectedProcedure.use(requirePermission("manage_users")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email format"),
        password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(12, "Le mot de passe doit avoir au moins 12 caractères"),
        roleId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).mutation(async ({ ctx, input })=>{
        const exists = await ctx.prisma.user.findUnique({
            where: {
                email: input.email
            }
        });
        if (exists) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: "User already exists"
            });
        }
        const hash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(input.password, 12);
        const user = await ctx.prisma.user.create({
            data: {
                email: input.email,
                password: hash,
                roleId: input.roleId
            }
        });
        return {
            success: true,
            user
        };
    }),
    updateProfile: protectedProcedure.input(updateMeFormSchema).mutation(async ({ ctx, input })=>{
        const userId = ctx.sessionClient.user.id;
        return ctx.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                ...input,
                isFirstLogin: false
            }
        });
    }),
    delete: protectedProcedure.use(requirePermission("manage_users")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        return ctx.prisma.user.delete({
            where: {
                id: input.id
            }
        });
    }),
    getCurrentUserProfile: protectedProcedure.query(async ({ ctx })=>{
        const userId = ctx.sessionClient.user.id;
        const user = await ctx.prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                pseudo: true,
                avatar: true,
                aboutMe: true,
                phone: true,
                birthDate: true,
                isFirstLogin: true,
                role: true
            }
        });
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "User not found"
            });
        }
        const userProfile = {
            ...user,
            birthDate: user.birthDate ? user.birthDate.toISOString().split("T")[0] : null
        };
        return userProfile;
    }),
    updateUserRoleById: protectedProcedure.use(requirePermission("manage_users")).input(updateUserRoleByIdSchema).mutation(async ({ ctx, input })=>{
        const actorId = ctx.sessionClient.user.id;
        if (actorId === input.userId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "FORBIDDEN",
                message: "You cannot change your own role."
            });
        }
        const role = await ctx.prisma.role.findUnique({
            where: {
                id: input.roleId
            },
            select: {
                id: true
            }
        });
        if (!role) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "Role not found"
            });
        }
        const user = await ctx.prisma.user.update({
            where: {
                id: input.userId
            },
            data: {
                roleId: input.roleId
            },
            include: {
                role: {
                    include: {
                        permissions: {
                            include: {
                                permission: true
                            }
                        }
                    }
                }
            }
        });
        return user;
    }),
    getProfileById: protectedProcedure.use(isAdmin).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const user = await ctx.prisma.user.findUnique({
            where: {
                id: input.id
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                pseudo: true,
                avatar: true,
                aboutMe: true,
                phone: true,
                birthDate: true,
                isFirstLogin: true,
                role: true
            }
        });
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "User not found"
            });
        }
        const userProfile = {
            ...user,
            birthDate: user.birthDate ? user.birthDate.toISOString().split("T")[0] : null
        };
        return userProfile;
    })
});
}),
"[project]/packages/backend/src/trpc/middleware.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAdmin",
    ()=>isAdmin,
    "requirePermission",
    ()=>requirePermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
;
;
const requirePermission = (permissionName)=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"].middleware(({ ctx, next })=>{
        const user = ctx.sessionClient?.user;
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "UNAUTHORIZED",
                message: "Authentication required."
            });
        }
        const permissions = user.role?.permissions ?? [];
        const hasPermission = permissions.includes(permissionName);
        if (!hasPermission) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "FORBIDDEN",
                message: `Missing permission: ${permissionName}`
            });
        }
        return next();
    });
const isAdmin = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"].middleware(({ ctx, next })=>{
    const user = ctx.sessionClient?.user;
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "UNAUTHORIZED",
            message: "Authentication required."
        });
    }
    if (user.role?.name !== "ADMIN") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "FORBIDDEN",
            message: "Administrator access required."
        });
    }
    return next();
});
}),
"[project]/packages/backend/src/modules/roles/router.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "roleRouter",
    ()=>roleRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/middleware.ts [app-route] (ecmascript)");
;
;
;
;
const roleRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["router"])({
    getAll: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_roles")).query(async ({ ctx })=>{
        return ctx.prisma.role.findMany({
            orderBy: {
                id: "asc"
            }
        });
    }),
    getById: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_roles")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).query(async ({ ctx, input })=>{
        const role = await ctx.prisma.role.findUnique({
            where: {
                id: input.id
            }
        });
        if (!role) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Role not found"
            });
        }
        return role;
    }),
    getByIdWithPermissions: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_roles")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).query(async ({ ctx, input })=>{
        const role = await ctx.prisma.role.findUnique({
            where: {
                id: input.id
            },
            include: {
                permissions: {
                    include: {
                        permission: true
                    }
                }
            }
        });
        if (!role) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Role not found"
            });
        }
        return role;
    }),
    create: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_roles")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        permissionIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()).optional()
    })).mutation(async ({ ctx, input })=>{
        const exists = await ctx.prisma.role.findUnique({
            where: {
                name: input.name
            }
        });
        if (exists) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: "Role already exists"
            });
        }
        return ctx.prisma.role.create({
            data: {
                name: input.name,
                permissions: input.permissionIds ? {
                    create: input.permissionIds.map((id)=>({
                            permissionId: id
                        }))
                } : undefined
            },
            include: {
                permissions: {
                    include: {
                        permission: true
                    }
                }
            }
        });
    }),
    update: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_roles")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        permissions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()).default([])
    })).mutation(async ({ ctx, input })=>{
        const exists = await ctx.prisma.role.findUnique({
            where: {
                name: input.name
            },
            select: {
                id: true
            }
        });
        if (exists && exists.id !== input.id) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: "Another role with this name already exists."
            });
        }
        const roleId = input.id;
        return ctx.prisma.role.update({
            where: {
                id: roleId
            },
            data: {
                name: input.name,
                permissions: {
                    set: input.permissions.map((permissionId)=>({
                            roleId_permissionId: {
                                roleId,
                                permissionId
                            }
                        }))
                }
            },
            include: {
                permissions: {
                    include: {
                        permission: true
                    }
                }
            }
        });
    }),
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_roles")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).mutation(async ({ ctx, input })=>{
        return ctx.prisma.role.delete({
            where: {
                id: input.id
            }
        });
    })
});
}),
"[project]/packages/backend/src/modules/session/router.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sessionRouter",
    ()=>sessionRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/middleware.ts [app-route] (ecmascript)");
;
;
;
;
const sessionRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["router"])({
    getAll: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAdmin"]).query(async ({ ctx })=>{
        return ctx.prisma.session.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
    }),
    updateExpiration: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAdmin"]).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date()
    })).mutation(async ({ ctx, input })=>{
        const session = await ctx.prisma.session.findUnique({
            where: {
                id: input.id
            },
            select: {
                id: true
            }
        });
        if (!session) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Session not found"
            });
        }
        return ctx.prisma.session.update({
            where: {
                id: input.id
            },
            data: {
                expiresAt: input.expiresAt
            }
        });
    })
});
}),
"[project]/packages/contracts/src/cloudinary/move.schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "folderKindSchema",
    ()=>folderKindSchema,
    "moveSchema",
    ()=>moveSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const folderKindSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'pending',
    'published',
    'bin'
]);
/* ---------- SOURCE ---------- */ const fileSourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('file'),
    fullPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
});
const folderSourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('folder'),
    fullPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
});
/**
 * ✅ Multi-selection support
 */ const selectionSourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('selection'),
    roots: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1),
    excluded: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).optional()
});
const sourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    fileSourceSchema,
    folderSourceSchema,
    selectionSourceSchema
]);
/* ---------- TARGET ---------- */ const virtualTargetSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('virtual-folder'),
    status: folderKindSchema
});
const folderTargetSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('folder'),
    fullPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
});
const targetSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    virtualTargetSchema,
    folderTargetSchema
]);
const moveSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    source: sourceSchema,
    target: targetSchema
});
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
    const transformation = transformations[variant] ?? {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].url(publicId, {
        transformation,
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
            const res = await fetch(url, {
                cache: "no-store"
            });
            if (!res.ok) continue;
            return res; // ✅ on retourne le Response natif
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
"[project]/packages/backend/src/modules/cloudinary/utils/cloudinary.utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "folderTarget",
    ()=>folderTarget,
    "makeMoveIntent",
    ()=>makeMoveIntent,
    "moveFileIntoFolder",
    ()=>moveFileIntoFolder,
    "replaceStatusSegment",
    ()=>replaceStatusSegment,
    "virtualTarget",
    ()=>virtualTarget
]);
function replaceStatusSegment(fullPath, newStatus) {
    const parts = fullPath.split('/');
    if (parts.length < 2) {
        throw new Error(`Invalid Cloudinary path: ${fullPath}`);
    }
    // part[0] = app name
    // part[1] = status segment
    parts[1] = newStatus;
    return parts.join('/');
}
function moveFileIntoFolder(filePath, folderPath) {
    const fileName = filePath.split('/').pop();
    if (!fileName) {
        throw new Error(`Invalid filePath: ${filePath}`);
    }
    return `${folderPath}/${fileName}`;
}
function virtualTarget(status) {
    return {
        type: 'virtual',
        status
    };
}
function folderTarget(fullPath) {
    return {
        type: 'folder',
        fullPath
    };
}
function makeMoveIntent(source, target) {
    return source.type === 'file' ? {
        source: {
            type: 'file',
            fullPath: source.fullPath
        },
        target
    } : {
        source: {
            type: 'folder',
            fullPath: source.fullPath
        },
        target
    };
}
}),
"[project]/packages/backend/src/modules/cloudinary/services/move.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveService",
    ()=>moveService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$cloudinary$2e$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/cloudinary.client.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cloudinary@2.8.0/node_modules/cloudinary/cloudinary.js [app-route] (ecmascript) <export v2 as cloudinary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$cloudinary$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/utils/cloudinary.utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/cloudinary.service.ts [app-route] (ecmascript)");
;
;
;
async function moveService(intent) {
    const { source, target } = intent;
    console.log('Executing move intent:', intent);
    /**
   * ---------------------------------------------------------------------------
   * ✅ 0) MULTI-SELECT
   * ---------------------------------------------------------------------------
   */ if (source.type === 'selection') {
        // Matérialiser la sélection (roots/excluded) en assets (public_id + resource_type)
        const assets = await collectSelectedAssets({
            roots: source.roots,
            excluded: source.excluded ?? []
        });
        // Dedup par public_id (au cas où roots se recoupent)
        const dedup = new Map();
        for (const a of assets)dedup.set(a.public_id, a);
        const uniqueAssets = Array.from(dedup.values());
        // ---------- selection -> virtual-folder ----------
        if (target.type === 'virtual-folder') {
            for (const asset of uniqueAssets){
                const nextPublicId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$cloudinary$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["replaceStatusSegment"])(asset.public_id, target.status);
                // no-op : déjà dans le bon status
                if (nextPublicId === asset.public_id) continue;
                await renameAsset(asset.public_id, nextPublicId, asset.resource_type);
            }
            return;
        }
        // ---------- selection -> folder ----------
        if (target.type === 'folder') {
            /**
       * IMPORTANT:
       * - On doit préserver la structure pour les dossiers sélectionnés.
       * - Mais ici on a seulement les assets. Donc on fait du renommage "par root":
       *   - si root est un fichier => moveFileIntoFolder
       *   - si root est un dossier => replace prefix root -> target/fullFolderName
       *
       * Pour ça, on va exécuter les moves root par root, en tenant compte des excluded.
       */ await moveSelectionIntoFolder({
                roots: source.roots,
                excluded: source.excluded ?? [],
                targetFolder: target.fullPath
            });
            return;
        }
        throw new Error('Invalid target for selection');
    }
    /**
   * ---------------------------------------------------------------------------
   * 1) FILE / FOLDER -> VIRTUAL
   * ---------------------------------------------------------------------------
   */ if (target.type === 'virtual-folder') {
        const newPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$cloudinary$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["replaceStatusSegment"])(source.fullPath, target.status);
        if (source.type === 'file') {
            const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAssetInfo"])(source.fullPath);
            await renameAsset(source.fullPath, newPrefix, info.resource_type);
        } else {
            await moveFolderRecursively(source.fullPath, newPrefix);
        }
        return;
    }
    /**
   * ---------------------------------------------------------------------------
   * 2) FILE / FOLDER -> FOLDER
   * ---------------------------------------------------------------------------
   */ if (target.type === 'folder') {
        if (source.type === 'file') {
            const newPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$cloudinary$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveFileIntoFolder"])(source.fullPath, target.fullPath);
            const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAssetInfo"])(source.fullPath);
            await renameAsset(source.fullPath, newPath, info.resource_type);
        } else {
            const folderName = source.fullPath.split('/').pop();
            if (!folderName) return;
            const targetPrefix = `${target.fullPath}/${folderName}`;
            await moveFolderRecursively(source.fullPath, targetPrefix);
        }
        return;
    }
    throw new Error('Invalid move intent');
}
/**
 * ---------------------------------------------------------------------------
 * Cloudinary helpers
 * ---------------------------------------------------------------------------
 */ /**
 * Rename an asset on Cloudinary with the given resource type.
 * @param from The current public ID of the asset.
 * @param to The new public ID of the asset.
 * @param resourceType The type of the asset to rename.
 * @returns A promise that resolves when the asset has been renamed.
 */ async function renameAsset(from, to, resourceType) {
    // ✅ on passe resource_type pour que rename marche (image/video/raw)
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].uploader.rename(from, to, {
        type: 'authenticated',
        resource_type: resourceType,
        overwrite: true
    });
}
/**
 * List all the assets under a given prefix (authenticated) for image/video/raw.
 * NOTE perf:
 * - on pagine par 500.
 * - en cas de gros dossiers, cette liste peut être lourde.
 *   On optimise plus tard si nécessaire (cache, listing par "subfolders", etc.).
 * @param prefix The prefix to list assets under.
 * @returns A promise that resolves with an array of ListedAsset objects.
 */ async function listAssetsByPrefix(prefix) {
    const out = [];
    for (const rt of [
        'image',
        'video',
        'raw'
    ]){
        let nextCursor;
        do {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resources({
                type: 'authenticated',
                resource_type: rt,
                prefix,
                max_results: 500,
                next_cursor: nextCursor
            });
            for (const asset of res.resources){
                out.push({
                    public_id: asset.public_id,
                    resource_type: rt
                });
            }
            nextCursor = res.next_cursor;
        }while (nextCursor)
    }
    return out;
}
/**
 * Renomme un dossier récursivement (image/video/raw) de sourcePrefix vers targetPrefix.
 * - On bouge image/video/raw, paginé.
 * - (Ton ancienne version ne gérait qu'un type implicite et une pagination partielle selon usage.)
 * @param sourcePrefix Le préfixe actuel du dossier à renommer.
 * @param targetPrefix Le préfixe cible du dossier à renommer.
 * @returns Une promesse qui se résout lorsqu'un dossier a été renommé.
 */ async function moveFolderRecursively(sourcePrefix, targetPrefix) {
    /**
   * Version robuste: on bouge image/video/raw, paginé.
   * (Ton ancienne version ne gérait qu’un type implicite et une pagination partielle selon usage.)
   */ for (const rt of [
        'image',
        'video',
        'raw'
    ]){
        let nextCursor;
        do {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resources({
                type: 'authenticated',
                resource_type: rt,
                prefix: sourcePrefix,
                max_results: 500,
                next_cursor: nextCursor
            });
            for (const asset of res.resources){
                const newPublicId = asset.public_id.replace(sourcePrefix, targetPrefix);
                await renameAsset(asset.public_id, newPublicId, rt);
            }
            nextCursor = res.next_cursor;
        }while (nextCursor)
    }
}
/**
 * ---------------------------------------------------------------------------
 * ✅ Multi-select resolver: roots/excluded -> liste d'assets
 * ---------------------------------------------------------------------------
 */ /**
 * Collect all the assets that are under the given roots and not excluded.
 * @param input The input object with roots and excluded arrays.
 * @returns A promise that resolves with an array of ListedAsset objects.
 */ async function collectSelectedAssets(input) {
    const excluded = input.excluded ?? [];
    const isExcluded = (publicId)=>excluded.some((ex)=>publicId === ex || publicId.startsWith(`${ex}/`));
    const out = [];
    for (const root of input.roots){
        if (isExcluded(root)) continue;
        // 1) root est-il un asset ?
        const asset = await tryGetAsset(root);
        if (asset) {
            if (!isExcluded(asset.public_id)) out.push(asset);
            continue;
        }
        // 2) sinon root est un dossier => liste tous les assets sous le prefix
        const assetsUnder = await listAssetsByPrefix(root);
        for (const a of assetsUnder){
            if (!isExcluded(a.public_id)) out.push(a);
        }
    }
    return out;
}
/**
 * Try to get an asset from Cloudinary by its public ID, authenticated.
 * The function will try all the resource types in order (image, video, raw).
 * If an asset is found, it returns a ListedAsset object with the public ID and resource type.
 * If no asset is found (any resource type), it returns null.
 * @param publicId The public ID of the asset to try to get.
 * @returns A promise that resolves with a ListedAsset object or null.
 */ async function tryGetAsset(publicId) {
    for (const rt of [
        'image',
        'video',
        'raw'
    ]){
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resource(publicId, {
                type: 'authenticated',
                resource_type: rt
            });
            if (res?.public_id) {
                return {
                    public_id: res.public_id,
                    resource_type: rt
                };
            }
        } catch  {
        // continue
        }
    }
    return null;
}
/**
 * ---------------------------------------------------------------------------
 * ✅ selection -> folder (préserve la structure des dossiers sélectionnés)
 * ---------------------------------------------------------------------------
 *
 * On traite root par root (pas juste "assets globaux") pour:
 * - fichier root => moveFileIntoFolder
 * - dossier root => move sous targetFolder en conservant le nom du dossier
 *
 * On respecte excluded (fichier ou dossier) via la même règle "prefix".
 */ async function moveSelectionIntoFolder(params) {
    const { roots, excluded, targetFolder } = params;
    /**
   * Returns true if the public ID is excluded, false otherwise.
   * An asset is excluded if its public ID is equal to an excluded string
   * or if it starts with an excluded string followed by a slash.
   * @param publicId The public ID to check.
   * @returns True if the asset is excluded, false otherwise.
   */ const isExcluded = (publicId)=>excluded.some((ex)=>publicId === ex || publicId.startsWith(`${ex}/`));
    for (const root of roots){
        if (isExcluded(root)) continue;
        // root asset ?
        const asset = await tryGetAsset(root);
        if (asset) {
            const newPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$cloudinary$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveFileIntoFolder"])(asset.public_id, targetFolder);
            await renameAsset(asset.public_id, newPath, asset.resource_type);
            continue;
        }
        // root folder => déplacer sous targetFolder en gardant folderName
        const folderName = root.split('/').pop();
        if (!folderName) continue;
        const targetPrefix = `${targetFolder}/${folderName}`;
        // On liste tous les assets sous root et on renomme root -> targetPrefix (en respectant excluded)
        const assetsUnder = await listAssetsByPrefix(root);
        for (const a of assetsUnder){
            if (isExcluded(a.public_id)) continue;
            const newPublicId = a.public_id.replace(root, targetPrefix);
            await renameAsset(a.public_id, newPublicId, a.resource_type);
        }
    }
}
}),
"[project]/packages/backend/src/modules/cloudinary/tree/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * 🧱 Cloudinary Tree – Public Facade
 *
 * This module acts as the **stable public entry point** for building a
 * Cloudinary folder tree on the server.
 *
 * ──────────────────────────────────────────────────────────────
 * Versioning strategy
 * ──────────────────────────────────────────────────────────────
 * - The actual implementation lives in versioned modules
 *   (e.g. `cloudinary.tree.v1.ts`).
 * - This facade re-exports a specific version under an explicit name
 *   (`buildCloudinaryTreeV1`).
 *
 * This allows:
 * - Multiple contract versions to coexist safely
 * - Explicit imports in consumers (no hidden breaking changes)
 * - A clear upgrade path when V2 / V3 are introduced
 *
 * ──────────────────────────────────────────────────────────────
 * Usage
 * ──────────────────────────────────────────────────────────────
 * Consumers SHOULD import from this facade, never directly
 * from versioned files.
 *
 * Example:
 * ```ts
 * import { buildCloudinaryTreeV1 } from "@/server/cloudinary/tree";
 * ```
 *
 * When a new version is released:
 * - A new implementation file is added
 * - This facade is updated (or extended) deliberately
 *
 * No automatic version switching is performed by design.
 */ __turbopack_context__.s([]);
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/modules/cloudinary/tree/finder.tree.v1'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
}),
"[project]/packages/backend/src/modules/cloudinary/tree/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$tree$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/tree/index.ts [app-route] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/modules/cloudinary/tree/finder.tree.v1'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/packages/backend/src/mappers/cloudinary/tree.v1.mapper.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapCloudinaryFileToClient",
    ()=>mapCloudinaryFileToClient,
    "mapCloudinaryFolderToClient",
    ()=>mapCloudinaryFolderToClient,
    "mapCloudinaryNodeToClient",
    ()=>mapCloudinaryNodeToClient
]);
function mapCloudinaryFolderToClient(folder) {
    return {
        type: "folder",
        fullPath: folder.path,
        name: folder.name,
        children: folder.children.map(mapCloudinaryNodeToClient)
    };
}
function mapCloudinaryFileToClient(file) {
    return {
        type: "file",
        name: file.name,
        fullPath: file.publicId,
        publicId: file.publicId
    };
}
function mapCloudinaryNodeToClient(node) {
    return node.type === "folder" ? mapCloudinaryFolderToClient(node) : mapCloudinaryFileToClient(node);
}
}),
"[project]/packages/backend/src/modules/cloudinary/services/resolvePendingUploadFolder.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolvePendingUploadFolder",
    ()=>resolvePendingUploadFolder
]);
function slugify(input) {
    return input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
async function resolvePendingUploadFolder(params) {
    const { prisma, destination, appRoot } = params;
    const category = await prisma.category.findUnique({
        where: {
            id: destination.categoryId
        }
    });
    if (!category) {
        throw new Error("Category not found");
    }
    const categorySegment = category.type; // ou slug si tu en as un
    if (destination.kind === "existing-activity") {
        const activity = await prisma.activity.findUnique({
            where: {
                id: destination.activityId
            }
        });
        if (!activity) {
            throw new Error("Activity not found");
        }
        if (activity.martialArt !== category.type) {
            throw new Error("Activity does not belong to category");
        }
        return `${appRoot}/pending/${categorySegment}/${activity.id}`;
    }
    // new activity
    const slug = slugify(destination.newActivityName);
    return `${appRoot}/pending/${categorySegment}/new/${slug}`;
}
}),
"[project]/packages/backend/src/modules/cloudinary/services/createUploadSignatures.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUploadSignatures",
    ()=>createUploadSignatures
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$resolvePendingUploadFolder$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/resolvePendingUploadFolder.service.ts [app-route] (ecmascript)");
;
;
async function createUploadSignatures(params) {
    const { prisma, appRoot, destination, assets } = params;
    const folder = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$resolvePendingUploadFolder$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolvePendingUploadFolder"])({
        prisma,
        destination,
        appRoot
    });
    const timestamp = Math.floor(Date.now() / 1000);
    return assets.map((asset)=>{
        const publicId = asset.fileName.replace(/\.[^/.]+$/, "");
        const toSign = {
            folder,
            timestamp,
            public_id: publicId,
            type: "authenticated"
        };
        const signature = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha1").update(Object.keys(toSign).sort().map((k)=>`${k}=${toSign[k]}`).join("&") + process.env.CLOUDINARY_API_SECRET).digest("hex");
        return {
            fileName: asset.fileName,
            mimeType: asset.mimeType,
            mediaType: asset.mediaType,
            resourceType: asset.mediaType,
            folder,
            publicId,
            timestamp,
            type: "authenticated",
            signature,
            apiKey: process.env.CLOUDINARY_API_KEY,
            cloudName: process.env.CLOUDINARY_CLOUD_NAME
        };
    });
}
}),
"[project]/packages/backend/src/modules/cloudinary/utils/media-validation.utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertResourceTypeMatchesMimeType",
    ()=>assertResourceTypeMatchesMimeType,
    "assertSupportedMimeType",
    ()=>assertSupportedMimeType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
;
const ALLOWED_IMAGE_MIME_TYPES = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif"
]);
const ALLOWED_VIDEO_MIME_TYPES = new Set([
    "video/mp4",
    "video/webm",
    "video/quicktime"
]);
function assertSupportedMimeType(params) {
    const { mimeType, mediaType } = params;
    if (mediaType === "image" && !ALLOWED_IMAGE_MIME_TYPES.has(mimeType)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "BAD_REQUEST",
            message: `Unsupported image mime type: ${mimeType}`
        });
    }
    if (mediaType === "video" && !ALLOWED_VIDEO_MIME_TYPES.has(mimeType)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "BAD_REQUEST",
            message: `Unsupported video mime type: ${mimeType}`
        });
    }
}
function assertResourceTypeMatchesMimeType(params) {
    const { resourceType, mimeType } = params;
    if (resourceType === "image" && !mimeType.startsWith("image/")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "BAD_REQUEST",
            message: "Resource type and mime type do not match."
        });
    }
    if (resourceType === "video" && !mimeType.startsWith("video/")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "BAD_REQUEST",
            message: "Resource type and mime type do not match."
        });
    }
}
}),
"[project]/packages/backend/src/modules/cloudinary/utils/path-validation.utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertSafeCloudinaryPath",
    ()=>assertSafeCloudinaryPath,
    "sanitizeBaseName",
    ()=>sanitizeBaseName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
;
function sanitizeBaseName(fileName) {
    const withoutExtension = fileName.replace(/\.[^/.]+$/, "");
    const sanitized = withoutExtension.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    if (!sanitized) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "BAD_REQUEST",
            message: "Invalid file name."
        });
    }
    return sanitized;
}
function assertSafeCloudinaryPath(path, appRoot) {
    if (!path.startsWith(`${appRoot}/pending/`)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "FORBIDDEN",
            message: "Uploads are only allowed under pending."
        });
    }
    if (path.includes("..") || path.includes("/.trash/")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "BAD_REQUEST",
            message: "Invalid asset path."
        });
    }
}
}),
"[project]/packages/backend/src/modules/cloudinary/services/readUploadedAssetMetadata.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readUploadedAssetMetadata",
    ()=>readUploadedAssetMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$cloudinary$2e$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/cloudinary.client.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cloudinary@2.8.0/node_modules/cloudinary/cloudinary.js [app-route] (ecmascript) <export v2 as cloudinary>");
;
;
async function readUploadedAssetMetadata(params) {
    const { publicId, resourceType } = params;
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resource(publicId, {
            resource_type: resourceType,
            type: "authenticated"
        });
        return {
            publicId: result.public_id,
            secureUrl: result.secure_url,
            resourceType,
            format: result.format ?? null,
            bytes: result.bytes ?? 0,
            width: result.width ?? null,
            height: result.height ?? null,
            duration: result.duration ?? null
        };
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "BAD_REQUEST",
            message: "Uploaded asset not found on Cloudinary."
        });
    }
}
}),
"[project]/packages/backend/src/modules/cloudinary/services/registerUploadedAssets.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerUploadedAssets",
    ()=>registerUploadedAssets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$media$2d$validation$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/utils/media-validation.utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$path$2d$validation$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/utils/path-validation.utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$readUploadedAssetMetadata$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/readUploadedAssetMetadata.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$resolvePendingUploadFolder$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/resolvePendingUploadFolder.service.ts [app-route] (ecmascript)");
;
;
;
;
;
async function registerUploadedAssets(params) {
    const { prisma, appRoot, userId, destination, assets, eventDate } = params;
    const expectedFolder = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$resolvePendingUploadFolder$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolvePendingUploadFolder"])({
        prisma,
        destination,
        appRoot
    });
    const created = await prisma.$transaction(async (tx)=>{
        const out = [];
        for (const asset of assets){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$path$2d$validation$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertSafeCloudinaryPath"])(asset.folder, appRoot);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$media$2d$validation$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertResourceTypeMatchesMimeType"])({
                resourceType: asset.resourceType,
                mimeType: asset.mimeType
            });
            if (asset.folder !== expectedFolder) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                    code: "FORBIDDEN",
                    message: "Asset folder does not match the authorized pending destination."
                });
            }
            if (!asset.publicId.startsWith(`${expectedFolder}/`)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                    code: "FORBIDDEN",
                    message: "Asset publicId does not match the authorized pending destination."
                });
            }
            const cloudinaryAsset = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$readUploadedAssetMetadata$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readUploadedAssetMetadata"])({
                publicId: asset.publicId,
                resourceType: asset.resourceType
            });
            if (cloudinaryAsset.publicId !== asset.publicId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                    code: "BAD_REQUEST",
                    message: "PublicId mismatch."
                });
            }
            if (cloudinaryAsset.secureUrl !== asset.secureUrl) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                    code: "BAD_REQUEST",
                    message: "SecureUrl mismatch."
                });
            }
            const createdAsset = await tx.mediaAsset.create({
                data: {
                    publicId: cloudinaryAsset.publicId,
                    secureUrl: cloudinaryAsset.secureUrl,
                    resourceType: cloudinaryAsset.resourceType,
                    mimeType: asset.mimeType,
                    format: cloudinaryAsset.format,
                    originalFileName: asset.originalFileName,
                    displayName: asset.displayName ?? null,
                    description: asset.description ?? null,
                    bytes: cloudinaryAsset.bytes,
                    width: cloudinaryAsset.width,
                    height: cloudinaryAsset.height,
                    duration: cloudinaryAsset.duration,
                    appRoot,
                    status: "pending",
                    categoryId: destination.categoryId,
                    activityId: destination.kind === "existing-activity" ? destination.activityId : null,
                    proposedActivityName: destination.kind === "new-activity" ? destination.newActivityName : null,
                    eventDate: eventDate ?? null,
                    uploadedAt: new Date(),
                    uploaderUserId: userId
                }
            });
            out.push(createdAsset);
        }
        return out;
    });
    return {
        success: true,
        assets: created.map((asset)=>({
                id: asset.id,
                publicId: asset.publicId,
                secureUrl: asset.secureUrl
            }))
    };
}
}),
"[project]/packages/contracts/src/cloudinary/upload.schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUploadSignaturesSchema",
    ()=>createUploadSignaturesSchema,
    "registerUploadedAssetsSchema",
    ()=>registerUploadedAssetsSchema,
    "registeredAssetSchema",
    ()=>registeredAssetSchema,
    "uploadAssetRequestSchema",
    ()=>uploadAssetRequestSchema,
    "uploadDestinationSchema",
    ()=>uploadDestinationSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const uploadDestinationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("existing-activity"),
        categoryId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
        activityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("new-activity"),
        categoryId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
        newActivityName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(120)
    })
]);
const uploadAssetRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    fileName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(255),
    mimeType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(120),
    mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "image",
        "video"
    ])
});
const createUploadSignaturesSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    destination: uploadDestinationSchema,
    assets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(uploadAssetRequestSchema).min(1).max(20)
});
const registeredAssetSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    publicId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(500),
    secureUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    resourceType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "image",
        "video"
    ]),
    originalFileName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(255),
    displayName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(255).optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(2000).optional(),
    mimeType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(120),
    format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(50).optional(),
    bytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    width: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional(),
    height: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional(),
    duration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    folder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(500)
});
const registerUploadedAssetsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    appRoot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(120),
    destination: uploadDestinationSchema,
    eventDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.date().optional(),
    assets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(registeredAssetSchema).min(1).max(20)
});
}),
"[project]/packages/backend/src/modules/cloudinary/router.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloudinaryRouter",
    ()=>cloudinaryRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/middleware.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$src$2f$cloudinary$2f$move$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/src/cloudinary/move.schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/cloudinary.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$move$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/move.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$tree$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/tree/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$tree$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/tree/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$cloudinary$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/utils/cloudinary.utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$cloudinary$2e$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/cloudinary.client.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cloudinary@2.8.0/node_modules/cloudinary/cloudinary.js [app-route] (ecmascript) <export v2 as cloudinary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$mappers$2f$cloudinary$2f$tree$2e$v1$2e$mapper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/mappers/cloudinary/tree.v1.mapper.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$createUploadSignatures$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/createUploadSignatures.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$registerUploadedAssets$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/registerUploadedAssets.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$src$2f$cloudinary$2f$upload$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/src/cloudinary/upload.schema.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PROJECT_ROOT = process.env.APP_SHORT_NAME || "my-app";
const adminProcedure = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAdmin"]);
function normalizePath(path) {
    return path.replace(/^\/+|\/+$/g, "");
}
function assertSafePath(path) {
    if (!path.startsWith(PROJECT_ROOT)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "FORBIDDEN",
            message: "Forbidden path."
        });
    }
    if (path.includes("..")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "BAD_REQUEST",
            message: "Invalid path."
        });
    }
}
/**
 * Interdit toute opération "cloudinaryRouter" sur le storage caché du bin.
 *
 * Pourquoi :
 * - Un contenu placé en corbeille est immuable (lecture / restore / deleteForever uniquement).
 * - Toute mutation sur `.trash` doit passer par `trashRouter`.
 */ function assertNotInTrashStorage(path) {
    const p = normalizePath(path);
    if (p.startsWith(`${PROJECT_ROOT}/bin/.trash/`)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "FORBIDDEN",
            message: "Forbidden operation on trash storage. Use trashRouter."
        });
    }
}
function folderAncestorsOfPublicId(publicId) {
    const parts = normalizePath(publicId).split("/").filter(Boolean);
    if (parts.length < 2) return [];
    const folders = parts.slice(0, -1);
    const out = [];
    for(let i = 1; i <= folders.length; i++){
        out.push(folders.slice(0, i).join("/"));
    }
    return out;
}
function folderAncestorsOfFolderPath(folderPath) {
    const parts = normalizePath(folderPath).split("/").filter(Boolean);
    const out = [];
    for(let i = 1; i <= parts.length; i++){
        out.push(parts.slice(0, i).join("/"));
    }
    return out;
}
/**
 * Déduit le status à partir du path.
 * Convention: my-app/<status>/...
 */ function statusFromPath(path) {
    const parts = normalizePath(path).split("/").filter(Boolean);
    const status = parts[1];
    if (status === "pending" || status === "published" || status === "bin") {
        return status;
    }
    return "pending";
}
/**
 * Renommer un asset Cloudinary (authenticated) de manière robuste.
 * Cloudinary exige souvent le bon resource_type.
 */ async function renameAuthenticatedResource(fromPublicId, toPublicId) {
    const resourceTypes = [
        "image",
        "video",
        "raw"
    ];
    let lastError = null;
    for (const resourceType of resourceTypes){
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].uploader.rename(fromPublicId, toPublicId, {
                type: "authenticated",
                resource_type: resourceType,
                overwrite: true
            });
            return;
        } catch (err) {
            lastError = err;
        }
    }
    throw lastError ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
        code: "INTERNAL_SERVER_ERROR",
        message: "Rename failed."
    });
}
/**
 * Détruire un asset Cloudinary (authenticated) de manière robuste.
 * Les typings Cloudinary exigent parfois resource_type => on teste image/video/raw.
 */ async function destroyAuthenticatedResource(publicId) {
    const resourceTypes = [
        "image",
        "video",
        "raw"
    ];
    let lastError = null;
    for (const resourceType of resourceTypes){
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].uploader.destroy(publicId, {
                type: "authenticated",
                resource_type: resourceType
            });
            return;
        } catch (err) {
            lastError = err;
        }
    }
    throw lastError ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
        code: "INTERNAL_SERVER_ERROR",
        message: "Destroy failed."
    });
}
/**
 * Renommer/migrer un préfixe de dossier sur Cloudinary :
 * - renomme TOUS les assets sous fromPrefix/ vers toPrefix/
 * - pour image/video/raw
 */ async function renameFolderPrefixOnCloudinary(fromPrefix, toPrefix) {
    const resourceTypes = [
        "image",
        "video",
        "raw"
    ];
    for (const resourceType of resourceTypes){
        let nextCursor;
        do {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resources({
                type: "authenticated",
                resource_type: resourceType,
                prefix: fromPrefix,
                max_results: 500,
                next_cursor: nextCursor
            });
            for (const asset of res.resources ?? []){
                const from = asset.public_id;
                const to = from.replace(fromPrefix, toPrefix);
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].uploader.rename(from, to, {
                    type: "authenticated",
                    resource_type: resourceType,
                    overwrite: true
                });
            }
            nextCursor = res.next_cursor;
        }while (nextCursor)
    }
}
/**
 * Upsert un ensemble de folders (ancêtres inclus).
 * Important pour “matérialiser” en DB des dossiers rencontrés via Cloudinary.
 */ async function upsertFolders(db, paths) {
    const unique = Array.from(new Set(paths)).filter(Boolean);
    await db.$transaction(unique.map((fullPath)=>db.cloudinaryFolder.upsert({
            where: {
                appRoot_fullPath: {
                    appRoot: PROJECT_ROOT,
                    fullPath
                }
            },
            create: {
                appRoot: PROJECT_ROOT,
                fullPath,
                status: statusFromPath(fullPath)
            },
            update: {
                status: statusFromPath(fullPath)
            }
        })));
}
/**
 * ✅ DB SYNC: déplacer/renommer des dossiers “DB-only” sous un préfixe.
 *
 * Pourquoi :
 * - Cloudinary n'a pas de dossiers réels.
 * - Un dossier vide (placeholder DB) n'a pas d'assets => moveService ne “voit” rien.
 * - Donc si on glisse ce dossier vers /bin (ou autre status), la DB doit être renommée.
 */ async function moveDbFoldersPrefix(params) {
    const { db, fromPrefix, toPrefix, nextStatus } = params;
    const rows = await db.cloudinaryFolder.findMany({
        where: {
            appRoot: PROJECT_ROOT,
            OR: [
                {
                    fullPath: fromPrefix
                },
                {
                    fullPath: {
                        startsWith: `${fromPrefix}/`
                    }
                }
            ]
        },
        select: {
            id: true,
            fullPath: true
        }
    });
    if (!rows.length) return;
    await db.$transaction(async (tx)=>{
        for (const row of rows){
            const newFullPath = row.fullPath === fromPrefix ? toPrefix : `${toPrefix}${row.fullPath.slice(fromPrefix.length)}`;
            await tx.cloudinaryFolder.upsert({
                where: {
                    appRoot_fullPath: {
                        appRoot: PROJECT_ROOT,
                        fullPath: newFullPath
                    }
                },
                create: {
                    appRoot: PROJECT_ROOT,
                    fullPath: newFullPath,
                    status: nextStatus
                },
                update: {
                    status: nextStatus
                }
            });
            await tx.cloudinaryFolder.delete({
                where: {
                    id: row.id
                }
            });
        }
    });
}
const cloudinaryRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["router"])({
    /**
   * Prépare des uploads signés Cloudinary.
   *
   * Règle métier :
   * - tout user connecté peut uploader
   * - tout upload arrive obligatoirement sous `pending`
   * - la destination finale est résolue côté serveur
   */ createUploadSignatures: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$src$2f$cloudinary$2f$upload$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createUploadSignaturesSchema"]).mutation(async ({ ctx, input })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$createUploadSignatures$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createUploadSignatures"])({
            prisma: ctx.prisma,
            appRoot: process.env.APP_SHORT_NAME || "my-app",
            destination: input.destination,
            assets: input.assets
        });
    }),
    /**
   * Enregistre côté backend les assets réellement uploadés sur Cloudinary.
   *
   * Règle métier :
   * - l'uploader réel vient toujours de la session
   * - le backend revalide la destination `pending`
   * - le backend relit les métadonnées réelles depuis Cloudinary
   * - création des MediaAsset en DB
   */ registerUploadedAssets: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$src$2f$cloudinary$2f$upload$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerUploadedAssetsSchema"]).mutation(async ({ ctx, input })=>{
        const userId = ctx.sessionClient.user.id;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$registerUploadedAssets$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerUploadedAssets"])({
            prisma: ctx.prisma,
            appRoot: input.appRoot,
            userId,
            destination: input.destination,
            assets: input.assets,
            eventDate: input.eventDate
        });
    }),
    /**
   * ✅ Tree Finder (DB folders + Cloudinary files)
   * - Sync opportuniste: on upsert en DB les folders rencontrés via Cloudinary.
   */ getFolderTree: adminProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).query(async ({ ctx, input })=>{
        const normalizedPath = normalizePath(input.path);
        assertSafePath(normalizedPath);
        const resources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listAuthenticatedResources"])(normalizedPath);
        const discoveredFolderPaths = resources.flatMap((r)=>folderAncestorsOfPublicId(r.publicId));
        await upsertFolders(ctx.prisma, discoveredFolderPaths);
        const registered = await ctx.prisma.cloudinaryFolder.findMany({
            where: {
                appRoot: PROJECT_ROOT,
                fullPath: {
                    startsWith: normalizedPath
                }
            },
            select: {
                fullPath: true
            }
        });
        const finderTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$tree$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildCloudinaryTreeV1"])(resources, registered.map((f)=>f.fullPath), normalizedPath);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$mappers$2f$cloudinary$2f$tree$2e$v1$2e$mapper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapCloudinaryFolderToClient"])(finderTree);
    }),
    getPendingTree: adminProcedure.query(async ()=>{
        const rootPath = `${PROJECT_ROOT}/pending`;
        const resources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listAuthenticatedResources"])(rootPath);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$tree$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildCloudinaryTreeV1"])(resources, [
            rootPath
        ], rootPath);
    }),
    deletePicture: adminProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        publicId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).mutation(async ({ input })=>{
        const publicId = normalizePath(input.publicId);
        assertSafePath(publicId);
        assertNotInTrashStorage(publicId);
        await destroyAuthenticatedResource(publicId);
        return {
            success: true
        };
    }),
    /**
   * ✅ Renommer un fichier (ou asset) — robuste image/video/raw
   * + Sync DB: upsert ancêtres de la destination
   */ renamePicture: adminProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        fromPublicId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        toPublicId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).mutation(async ({ ctx, input })=>{
        const from = normalizePath(input.fromPublicId);
        const to = normalizePath(input.toPublicId);
        assertSafePath(from);
        assertSafePath(to);
        assertNotInTrashStorage(from);
        assertNotInTrashStorage(to);
        await renameAuthenticatedResource(from, to);
        await upsertFolders(ctx.prisma, folderAncestorsOfPublicId(to));
        return {
            success: true
        };
    }),
    /**
   * ✅ Créer un dossier (même vide) dans la registry DB.
   */ createFolder: adminProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        fullPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).mutation(async ({ ctx, input })=>{
        const fullPath = normalizePath(input.fullPath);
        assertSafePath(fullPath);
        assertNotInTrashStorage(fullPath);
        await upsertFolders(ctx.prisma, folderAncestorsOfFolderPath(fullPath));
        return {
            success: true
        };
    }),
    /**
   * ✅ Renommer / déplacer un dossier (préfixe)
   */ renameFolderPrefix: adminProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        fromPrefix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        toPrefix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).mutation(async ({ ctx, input })=>{
        const fromPrefix = normalizePath(input.fromPrefix);
        const toPrefix = normalizePath(input.toPrefix);
        assertSafePath(fromPrefix);
        assertSafePath(toPrefix);
        assertNotInTrashStorage(fromPrefix);
        assertNotInTrashStorage(toPrefix);
        if (fromPrefix === toPrefix) {
            return {
                success: true
            };
        }
        await renameFolderPrefixOnCloudinary(fromPrefix, toPrefix);
        const impacted = await ctx.prisma.cloudinaryFolder.findMany({
            where: {
                appRoot: PROJECT_ROOT,
                OR: [
                    {
                        fullPath: fromPrefix
                    },
                    {
                        fullPath: {
                            startsWith: `${fromPrefix}/`
                        }
                    }
                ]
            },
            select: {
                id: true,
                fullPath: true
            }
        });
        if (impacted.length === 0) {
            await upsertFolders(ctx.prisma, folderAncestorsOfFolderPath(toPrefix));
            return {
                success: true
            };
        }
        const updates = impacted.map((folder)=>({
                id: folder.id,
                nextFullPath: folder.fullPath.replace(fromPrefix, toPrefix)
            }));
        const targetPaths = Array.from(new Set(updates.map((u)=>u.nextFullPath)));
        const collisions = await ctx.prisma.cloudinaryFolder.findMany({
            where: {
                appRoot: PROJECT_ROOT,
                fullPath: {
                    in: targetPaths
                },
                id: {
                    notIn: impacted.map((i)=>i.id)
                }
            },
            select: {
                fullPath: true
            }
        });
        if (collisions.length > 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: `Folder rename collision: ${collisions.map((c)=>c.fullPath).join(", ")}`
            });
        }
        await ctx.prisma.$transaction(async (tx)=>{
            const ancestors = folderAncestorsOfFolderPath(toPrefix);
            for (const fullPath of ancestors){
                await tx.cloudinaryFolder.upsert({
                    where: {
                        appRoot_fullPath: {
                            appRoot: PROJECT_ROOT,
                            fullPath
                        }
                    },
                    create: {
                        appRoot: PROJECT_ROOT,
                        fullPath,
                        status: statusFromPath(fullPath)
                    },
                    update: {
                        status: statusFromPath(fullPath)
                    }
                });
            }
            for (const update of updates){
                await tx.cloudinaryFolder.update({
                    where: {
                        id: update.id
                    },
                    data: {
                        fullPath: update.nextFullPath,
                        status: statusFromPath(update.nextFullPath)
                    }
                });
            }
        });
        return {
            success: true
        };
    }),
    deleteFolder: adminProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        prefix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).mutation(async ({ input })=>{
        const normalizedPrefix = normalizePath(input.prefix);
        assertSafePath(normalizedPrefix);
        assertNotInTrashStorage(normalizedPrefix);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteByPrefix"])(normalizedPrefix);
        return {
            success: true
        };
    }),
    emptyBin: adminProcedure.mutation(async ()=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "BAD_REQUEST",
            message: "Deprecated. Use trash.deleteForever (or trash.emptyBin)."
        });
    }),
    deleteSelectionInBin: adminProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        roots: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1),
        excluded: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).optional()
    })).mutation(async ()=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: "BAD_REQUEST",
            message: "Deprecated. Use trash.deleteForever (by trashIds)."
        });
    }),
    validatePictures: adminProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        publicIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(1),
        category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        activity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).mutation(async ({ ctx, input })=>{
        for (const oldPublicId of input.publicIds){
            const oldId = normalizePath(oldPublicId);
            assertSafePath(oldId);
            assertNotInTrashStorage(oldId);
            const filename = oldId.split("/").pop();
            if (!filename) continue;
            const newPublicId = `${PROJECT_ROOT}/${input.category}/${input.activity}/${filename}`;
            const newId = normalizePath(newPublicId);
            assertSafePath(newId);
            assertNotInTrashStorage(newId);
            await renameAuthenticatedResource(oldId, newId);
            await upsertFolders(ctx.prisma, folderAncestorsOfPublicId(newId));
        }
        return {
            success: true
        };
    }),
    /**
   * ✅ Move (DnD + multi-select)
   * IMPORTANT : move -> bin est interdit ici (trash.trashToBin).
   */ move: adminProcedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$src$2f$cloudinary$2f$move$2e$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveSchema"]).mutation(async ({ ctx, input })=>{
        if (input.target.type === "virtual-folder" && input.target.status === "bin") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "BAD_REQUEST",
                message: "Move to bin is not allowed here. Use trash.trashToBin."
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$move$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveService"])(input);
        const { source, target } = input;
        if (target.type === "virtual-folder") {
            if (source.type === "folder") {
                const fromPrefix = normalizePath(source.fullPath);
                assertSafePath(fromPrefix);
                assertNotInTrashStorage(fromPrefix);
                const toPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$cloudinary$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["replaceStatusSegment"])(fromPrefix, target.status);
                assertSafePath(toPrefix);
                assertNotInTrashStorage(toPrefix);
                await moveDbFoldersPrefix({
                    db: ctx.prisma,
                    fromPrefix,
                    toPrefix,
                    nextStatus: target.status
                });
            }
            if (source.type === "selection") {
                for (const root of source.roots){
                    const fromPrefix = normalizePath(root);
                    assertSafePath(fromPrefix);
                    assertNotInTrashStorage(fromPrefix);
                    const toPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$utils$2f$cloudinary$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["replaceStatusSegment"])(fromPrefix, target.status);
                    assertSafePath(toPrefix);
                    assertNotInTrashStorage(toPrefix);
                    await moveDbFoldersPrefix({
                        db: ctx.prisma,
                        fromPrefix,
                        toPrefix,
                        nextStatus: target.status
                    });
                }
            }
        }
        return {
            success: true
        };
    })
});
}),
"[project]/packages/backend/src/modules/trash/services/listBin.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listBin",
    ()=>listBin
]);
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/modules/trash/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
async function listBin(params) {
    const { prisma, input } = params;
    const limit = Math.min(Math.max(input.limit ?? 50, 1), 100);
    const where = {
        appRoot: input.appRoot,
        status: "IN_BIN"
    };
    if (input.search && input.search.trim().length > 0) {
        const q = input.search.trim();
        where.OR = [
            {
                displayName: {
                    contains: q,
                    mode: "insensitive"
                }
            },
            {
                previousPath: {
                    contains: q,
                    mode: "insensitive"
                }
            }
        ];
    }
    const rows = await prisma.trashEntry.findMany({
        where,
        orderBy: [
            {
                trashedAt: "desc"
            },
            {
                id: "desc"
            }
        ],
        take: limit + 1,
        ...input.cursor ? {
            cursor: {
                id: input.cursor
            },
            skip: 1
        } : {},
        select: {
            id: true,
            appRoot: true,
            kind: true,
            status: true,
            displayName: true,
            previousPath: true,
            storageRoot: true,
            trashedAt: true,
            sizeBytes: true,
            cloudinaryCreatedAt: true
        }
    });
    const hasNextPage = rows.length > limit;
    const sliced = hasNextPage ? rows.slice(0, limit) : rows;
    const items = sliced.map((r)=>({
            id: r.id,
            appRoot: r.appRoot,
            kind: r.kind === "folder" ? "folder" : "file",
            status: r.status,
            displayName: r.displayName,
            previousPath: r.previousPath,
            previousPathShort: buildPreviousPathShort(r.previousPath),
            trashedAt: r.trashedAt.toISOString(),
            sizeBytes: bigIntToSafeNumber(r.sizeBytes),
            createdAt: r.cloudinaryCreatedAt ? r.cloudinaryCreatedAt.toISOString() : undefined,
            publicId: r.kind === "file" ? r.storageRoot : undefined
        }));
    return {
        items,
        nextCursor: hasNextPage ? sliced[sliced.length - 1]?.id ?? null : null
    };
}
}),
"[project]/packages/backend/src/modules/trash/services/readTrashFolder.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readTrashFolder",
    ()=>readTrashFolder
]);
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/modules/cloudinary/cloudinary.client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/modules/trash/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
/**
 * Liste tous les assets sous un prefix (authenticated) pour image/video/raw.
 *
 * NOTE perf:
 * - on pagine par 500.
 * - en cas de gros dossiers, cette liste peut être lourde.
 *   On optimise plus tard si nécessaire (cache, listing par "subfolders", etc.).
 */ async function listAssetsByPrefix(prefix) {
    const resourceTypes = [
        "image",
        "video",
        "raw"
    ];
    const out = [];
    for (const resource_type of resourceTypes){
        let nextCursor;
        do {
            const res = await cloudinary.api.resources({
                type: "authenticated",
                resource_type,
                prefix,
                max_results: 500,
                next_cursor: nextCursor
            });
            for (const asset of res.resources ?? []){
                out.push({
                    publicId: asset.public_id,
                    bytes: typeof asset.bytes === "number" ? asset.bytes : undefined,
                    createdAt: asset.created_at ? String(asset.created_at) : undefined
                });
            }
            nextCursor = res.next_cursor;
        }while (nextCursor)
    }
    return out;
}
/**
 * À partir d'une liste d'assets sous un prefix, extrait les enfants directs:
 * - folders: premier segment relatif
 * - files  : segment unique relatif
 */ function computeDirectChildren(params) {
    const { assets, storagePrefix, virtualPrefix, meta } = params;
    const prefix = normalizePath(storagePrefix);
    const folders = new Map();
    const files = new Map();
    for (const a of assets){
        const publicId = normalizePath(a.publicId);
        if (publicId === prefix) continue;
        if (!publicId.startsWith(`${prefix}/`)) continue;
        const relative = publicId.slice(prefix.length + 1);
        const parts = relative.split("/").filter(Boolean);
        if (parts.length === 0) continue;
        if (parts.length === 1) {
            const name = parts[0];
            if (!files.has(name)) {
                files.set(name, {
                    type: "file",
                    name,
                    fullPath: normalizePath(`${virtualPrefix}/${name}`),
                    publicId: a.publicId,
                    sizeBytes: a.bytes,
                    createdAt: a.createdAt,
                    meta
                });
            }
            continue;
        }
        const folderName = parts[0];
        if (!folders.has(folderName)) {
            folders.set(folderName, {
                type: "folder",
                name: folderName,
                fullPath: normalizePath(`${virtualPrefix}/${folderName}`),
                children: [],
                meta
            });
        }
    }
    const folderNodes = Array.from(folders.values()).sort((a, b)=>a.name.localeCompare(b.name));
    const fileNodes = Array.from(files.values()).sort((a, b)=>a.name.localeCompare(b.name));
    return [
        ...folderNodes,
        ...fileNodes
    ];
}
async function readTrashFolder(params) {
    const { prisma, input } = params;
    const relativePath = normalizePath(input.relativePath ?? "");
    const entry = await prisma.trashEntry.findFirst({
        where: {
            id: input.trashId,
            appRoot: input.appRoot,
            status: "IN_BIN"
        },
        select: {
            id: true,
            kind: true,
            displayName: true,
            previousPath: true,
            trashedAt: true,
            storageRoot: true
        }
    });
    if (!entry) {
        throw new Error("TrashEntry not found (or not in bin)");
    }
    if (entry.kind !== "folder") {
        throw new Error("readTrashFolder can only open folder trash entries");
    }
    const storagePrefix = normalizePath(relativePath ? `${entry.storageRoot}/${relativePath}` : entry.storageRoot);
    const virtualPrefix = normalizePath(relativePath ? `${input.appRoot}/bin/${entry.displayName}/${relativePath}` : `${input.appRoot}/bin/${entry.displayName}`);
    const meta = {
        kind: "trash",
        trashId: entry.id,
        previousPath: entry.previousPath,
        trashedAt: entry.trashedAt.toISOString()
    };
    const assets = await listAssetsByPrefix(storagePrefix);
    const children = computeDirectChildren({
        assets,
        storagePrefix,
        virtualPrefix,
        meta
    });
    const name = virtualPrefix.split("/").filter(Boolean).pop() ?? entry.displayName;
    const folder = {
        type: "folder",
        name,
        fullPath: virtualPrefix,
        children,
        meta
    };
    return {
        folder,
        displayPath: virtualPrefix
    };
}
}),
"[project]/packages/backend/src/modules/trash/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * trash.utils.ts
 *
 * Petites fonctions utilitaires centralisées pour la corbeille.
 *
 * Objectifs :
 * - Garder un format stable et testable
 * - Éviter de dupliquer des règles de normalisation / affichage
 */ /**
 * Normalise un chemin (supprime les / en début/fin).
 */ __turbopack_context__.s([
    "bigIntToSafeNumber",
    ()=>bigIntToSafeNumber,
    "buildPreviousPathShort",
    ()=>buildPreviousPathShort,
    "formatBinSuffix",
    ()=>formatBinSuffix,
    "isTrashStoragePath",
    ()=>isTrashStoragePath,
    "normalizePath",
    ()=>normalizePath,
    "suffixFileName",
    ()=>suffixFileName,
    "suffixFilePath",
    ()=>suffixFilePath,
    "suffixFolderPath",
    ()=>suffixFolderPath
]);
function normalizePath(path) {
    return path.replace(/^\/+|\/+$/g, "");
}
function buildPreviousPathShort(previousPath) {
    const p = normalizePath(previousPath);
    const parts = p.split("/").filter(Boolean);
    if (parts.length <= 2) return p;
    // Retirer appRoot si présent (1er segment)
    const withoutRoot = parts.slice(1);
    if (withoutRoot.length <= 2) return `…/${withoutRoot.join("/")}`;
    const tail = withoutRoot.slice(-2);
    return `…/${tail.join("/")}`;
}
function bigIntToSafeNumber(value) {
    if (value === null || value === undefined) return undefined;
    const max = BigInt(Number.MAX_SAFE_INTEGER);
    if (value > max) return undefined;
    return Number(value);
}
function isTrashStoragePath(appRoot, path) {
    const p = normalizePath(path);
    return p.startsWith(`${appRoot}/bin/.trash/`);
}
function formatBinSuffix(trashedAt) {
    const pad = (n)=>String(n).padStart(2, "0");
    const yyyy = trashedAt.getFullYear();
    const mm = pad(trashedAt.getMonth() + 1);
    const dd = pad(trashedAt.getDate());
    const hh = pad(trashedAt.getHours());
    const mi = pad(trashedAt.getMinutes());
    return ` (bin ${yyyy}-${mm}-${dd} ${hh}-${mi})`;
}
function splitPath(path) {
    return normalizePath(path).split("/").filter(Boolean);
}
function suffixFolderPath(path, suffix) {
    const parts = splitPath(path);
    if (parts.length === 0) return path;
    parts[parts.length - 1] = `${parts[parts.length - 1]}${suffix}`;
    return parts.join("/");
}
function suffixFileName(fileName, suffix) {
    const idx = fileName.lastIndexOf(".");
    if (idx <= 0) return `${fileName}${suffix}`;
    const base = fileName.slice(0, idx);
    const ext = fileName.slice(idx);
    return `${base}${suffix}${ext}`;
}
function suffixFilePath(path, suffix) {
    const parts = splitPath(path);
    if (parts.length === 0) return path;
    parts[parts.length - 1] = suffixFileName(parts[parts.length - 1], suffix);
    return parts.join("/");
}
}),
"[project]/packages/backend/src/modules/trash/services/trashToBin.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trashToBin",
    ()=>trashToBin
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$cloudinary$2e$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/cloudinary.client.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cloudinary@2.8.0/node_modules/cloudinary/cloudinary.js [app-route] (ecmascript) <export v2 as cloudinary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/trash/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/cloudinary.service.ts [app-route] (ecmascript)");
;
;
;
;
function lastSegment(path) {
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(path);
    const parts = p.split("/").filter(Boolean);
    return parts[parts.length - 1] ?? p;
}
function assertNotStatusOrRoot(appRoot, fullPath) {
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(fullPath);
    if (p === appRoot) {
        throw new Error("Cannot trash the app root");
    }
    const forbidden = [
        `${appRoot}/pending`,
        `${appRoot}/published`,
        `${appRoot}/bin`
    ];
    if (forbidden.includes(p)) {
        throw new Error("Cannot trash a status folder root");
    }
    if (p.startsWith(`${appRoot}/bin/.trash/`)) {
        throw new Error("Cannot trash an item already in trash storage");
    }
}
async function listAssetsByPrefix(prefix) {
    const out = [];
    for (const rt of [
        "image",
        "video",
        "raw"
    ]){
        let nextCursor;
        do {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resources({
                type: "authenticated",
                resource_type: rt,
                prefix,
                max_results: 500,
                next_cursor: nextCursor
            });
            for (const asset of res.resources ?? []){
                out.push({
                    public_id: asset.public_id,
                    resource_type: rt,
                    bytes: typeof asset.bytes === "number" ? asset.bytes : undefined,
                    created_at: asset.created_at ? String(asset.created_at) : undefined
                });
            }
            nextCursor = res.next_cursor;
        }while (nextCursor)
    }
    return out;
}
async function renameAsset(from, to, resourceType) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].uploader.rename(from, to, {
        type: "authenticated",
        resource_type: resourceType,
        overwrite: true
    });
}
async function moveFolderRecursively(sourcePrefix, targetPrefix) {
    for (const rt of [
        "image",
        "video",
        "raw"
    ]){
        let nextCursor;
        do {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resources({
                type: "authenticated",
                resource_type: rt,
                prefix: sourcePrefix,
                max_results: 500,
                next_cursor: nextCursor
            });
            for (const asset of res.resources ?? []){
                const newPublicId = String(asset.public_id).replace(sourcePrefix, targetPrefix);
                await renameAsset(String(asset.public_id), newPublicId, rt);
            }
            nextCursor = res.next_cursor;
        }while (nextCursor)
    }
}
async function detectKind(params) {
    const { prisma, appRoot, fullPath } = params;
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(fullPath);
    // 1) Si on a un registre folder DB, c'est un folder.
    const folder = await prisma.cloudinaryFolder.findFirst({
        where: {
            appRoot,
            fullPath: p
        },
        select: {
            id: true
        }
    });
    if (folder) return "folder";
    // 2) Si Cloudinary connaît la ressource exacte => file.
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAssetInfo"])(p);
        return "file";
    } catch  {
    // continue
    }
    // 3) Si on a au moins un asset sous prefix => folder.
    const assets = await listAssetsByPrefix(`${p}/`);
    if (assets.length > 0) return "folder";
    throw new Error(`Unable to detect kind (file/folder) for: ${p}`);
}
function computeAggregateFromAssets(assets) {
    let total = 0;
    let hasBytes = false;
    let maxCreated = null;
    for (const a of assets){
        if (typeof a.bytes === "number") {
            total += a.bytes;
            hasBytes = true;
        }
        if (a.created_at) {
            const d = new Date(a.created_at);
            if (!Number.isNaN(d.valueOf())) {
                if (!maxCreated || d > maxCreated) maxCreated = d;
            }
        }
    }
    return {
        sizeBytes: hasBytes ? BigInt(total) : undefined,
        cloudinaryCreatedAt: maxCreated ?? undefined
    };
}
async function normalizeSources(params) {
    const { prisma, input } = params;
    const out = [];
    const seen = new Set();
    for (const s of input.sources){
        if (s.kind === "selection") {
            for (const root of s.roots){
                const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(root);
                if (seen.has(p)) continue;
                seen.add(p);
                // On détecte le kind pour être robuste.
                const kind = await detectKind({
                    prisma,
                    appRoot: input.appRoot,
                    fullPath: p
                });
                out.push({
                    kind,
                    fullPath: p
                });
            }
            continue;
        }
        const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(s.fullPath);
        if (seen.has(p)) continue;
        seen.add(p);
        out.push({
            kind: s.kind,
            fullPath: p
        });
    }
    return out;
}
async function trashToBin(params) {
    const { prisma, input } = params;
    const appRoot = input.appRoot;
    // Normalise la liste et déduplique.
    const sources = await normalizeSources({
        prisma,
        input
    });
    const results = [];
    for (const source of sources){
        assertNotStatusOrRoot(appRoot, source.fullPath);
        // Interdit d'envoyer un contenu déjà dans bin/trash.
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(source.fullPath);
        if (normalized.startsWith(`${appRoot}/bin/`)) {
            throw new Error("Cannot trash an item already under appRoot/bin");
        }
        const displayName = lastSegment(normalized);
        const id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
        // NOTE : même pour un file, on stocke sous `.trash/<id>/<displayName>`
        // (bin navigable caché, collisions impossibles)
        const storageRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(`${appRoot}/bin/.trash/${id}/${displayName}`);
        // 1) Calcul des agrégats (sizeBytes + createdAt)
        let sizeBytes;
        let cloudinaryCreatedAt;
        if (source.kind === "file") {
            const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAssetInfo"])(normalized);
            sizeBytes = typeof info.bytes === "number" ? BigInt(info.bytes) : undefined;
            cloudinaryCreatedAt = info.created_at ? new Date(info.created_at) : undefined;
        } else {
            // ✅ trailing slash pour éviter les collisions de prefix (ex: cours1 vs cours10)
            const assets = await listAssetsByPrefix(`${normalized}/`);
            const agg = computeAggregateFromAssets(assets);
            sizeBytes = agg.sizeBytes;
            cloudinaryCreatedAt = agg.cloudinaryCreatedAt;
        }
        // 2) Création TrashEntry (avant move) : on "réserve" l'id et on garde la provenance.
        await prisma.trashEntry.create({
            data: {
                id,
                appRoot,
                kind: source.kind,
                status: "IN_BIN",
                displayName,
                previousPath: normalized,
                storageRoot,
                trashedAt: new Date(),
                sizeBytes,
                cloudinaryCreatedAt
            }
        });
        // 3) Déplacement Cloudinary vers storageRoot
        if (source.kind === "file") {
            const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAssetInfo"])(normalized);
            await renameAsset(normalized, storageRoot, info.resource_type);
        } else {
            // ✅ trailing slash pour éviter les collisions de prefix
            await moveFolderRecursively(`${normalized}/`, `${storageRoot}/`);
            // 4) Nettoyage registry DB des dossiers :
            //    Si tu jettes un dossier, il ne doit plus exister "à l'ancien endroit".
            //    Donc on supprime les CloudinaryFolder dont le fullPath est dans ce sous-arbre.
            await prisma.cloudinaryFolder.deleteMany({
                where: {
                    appRoot,
                    fullPath: {
                        startsWith: normalized
                    }
                }
            });
        }
        results.push({
            id,
            appRoot,
            kind: source.kind,
            status: "IN_BIN",
            displayName,
            previousPath: normalized,
            previousPathShort: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPreviousPathShort"])(normalized),
            trashedAt: new Date().toISOString(),
            sizeBytes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bigIntToSafeNumber"])(sizeBytes),
            createdAt: cloudinaryCreatedAt ? cloudinaryCreatedAt.toISOString() : undefined
        });
    }
    return {
        trashed: results,
        message: `${results.length} item(s) moved to bin`
    };
}
}),
"[project]/packages/backend/src/modules/trash/services/restoreFromBin.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restoreFromBin",
    ()=>restoreFromBin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$cloudinary$2e$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/cloudinary.client.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cloudinary@2.8.0/node_modules/cloudinary/cloudinary.js [app-route] (ecmascript) <export v2 as cloudinary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/trash/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/cloudinary.service.ts [app-route] (ecmascript)");
;
;
;
async function hasAnyResourceWithPrefix(prefix) {
    for (const rt of [
        "image",
        "video",
        "raw"
    ]){
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resources({
                type: "authenticated",
                resource_type: rt,
                prefix,
                max_results: 1
            });
            if ((res.resources ?? []).length > 0) return true;
        } catch  {
        // ignore (treat as none)
        }
    }
    return false;
}
function statusFromPath(path) {
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(path).split("/").filter(Boolean);
    const status = parts[1];
    if (status === "pending" || status === "published" || status === "bin") return status;
    return "pending";
}
function folderAncestorsOfFolderPath(folderPath) {
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(folderPath).split("/").filter(Boolean);
    const out = [];
    for(let i = 1; i <= parts.length; i++){
        out.push(parts.slice(0, i).join("/"));
    }
    return out;
}
function folderAncestorsOfPublicId(publicId) {
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(publicId).split("/").filter(Boolean);
    if (parts.length < 2) return [];
    // remove last segment (file name)
    const folders = parts.slice(0, -1);
    const out = [];
    for(let i = 1; i <= folders.length; i++){
        out.push(folders.slice(0, i).join("/"));
    }
    return out;
}
async function upsertFolders(prisma, appRoot, paths) {
    const unique = Array.from(new Set(paths.map(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"]))).filter(Boolean);
    if (!unique.length) return;
    await prisma.$transaction(unique.map((fullPath)=>prisma.cloudinaryFolder.upsert({
            where: {
                appRoot_fullPath: {
                    appRoot,
                    fullPath
                }
            },
            create: {
                appRoot,
                fullPath,
                status: statusFromPath(fullPath)
            },
            update: {
                status: statusFromPath(fullPath)
            }
        })));
}
async function renameAsset(fromPublicId, toPublicId, resourceType) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].uploader.rename(fromPublicId, toPublicId, {
        type: "authenticated",
        resource_type: resourceType,
        overwrite: true
    });
}
async function moveFolderRecursively(sourcePrefix, targetPrefix) {
    for (const rt of [
        "image",
        "video",
        "raw"
    ]){
        let nextCursor;
        do {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].api.resources({
                type: "authenticated",
                resource_type: rt,
                prefix: sourcePrefix,
                max_results: 500,
                next_cursor: nextCursor
            });
            for (const asset of res.resources ?? []){
                const from = String(asset.public_id);
                const to = from.replace(sourcePrefix, targetPrefix);
                await renameAsset(from, to, rt);
            }
            nextCursor = res.next_cursor;
        }while (nextCursor)
    }
}
async function pathCollides(params) {
    const { prisma, appRoot, kind, targetPath } = params;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(targetPath);
    // Collision DB (folder placeholder)
    if (kind === "folder") {
        const folder = await prisma.cloudinaryFolder.findFirst({
            where: {
                appRoot,
                fullPath: t
            },
            select: {
                id: true
            }
        });
        if (folder) return true;
    }
    // Collision Cloudinary
    if (kind === "file") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileExists"])(t);
    }
    // Folder => collision si au moins un asset existe sous prefix `${t}/`
    return hasAnyResourceWithPrefix(`${t}/`);
}
function addCounterToFolderPath(path, counter) {
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(path).split("/").filter(Boolean);
    if (!parts.length) return path;
    parts[parts.length - 1] = `${parts[parts.length - 1]} (${counter})`;
    return parts.join("/");
}
function addCounterToFilePath(path, counter) {
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(path).split("/").filter(Boolean);
    if (!parts.length) return path;
    const fileName = parts[parts.length - 1];
    parts[parts.length - 1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["suffixFileName"])(fileName, ` (${counter})`);
    return parts.join("/");
}
async function computeRestoredToPath(params) {
    const { prisma, appRoot, kind, previousPath, trashedAt } = params;
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(previousPath);
    const collides = await pathCollides({
        prisma,
        appRoot,
        kind,
        targetPath: base
    });
    if (!collides) return {
        restoredToPath: base,
        wasCollision: false
    };
    const suffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatBinSuffix"])(trashedAt);
    let candidate = kind === "folder" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["suffixFolderPath"])(base, suffix) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["suffixFilePath"])(base, suffix);
    // Collision persistante (rare) => compteur
    let i = 2;
    while(await pathCollides({
        prisma,
        appRoot,
        kind,
        targetPath: candidate
    })){
        candidate = kind === "folder" ? addCounterToFolderPath(candidate, i) : addCounterToFilePath(candidate, i);
        i++;
    }
    return {
        restoredToPath: candidate,
        wasCollision: true
    };
}
async function restoreFromBin(params) {
    const { prisma, input } = params;
    const appRoot = input.appRoot;
    const entries = await prisma.trashEntry.findMany({
        where: {
            appRoot,
            id: {
                in: input.ids
            },
            status: "IN_BIN"
        },
        select: {
            id: true,
            kind: true,
            displayName: true,
            previousPath: true,
            storageRoot: true,
            trashedAt: true
        }
    });
    if (entries.length !== input.ids.length) {
        const found = new Set(entries.map((e)=>e.id));
        const missing = input.ids.filter((id)=>!found.has(id));
        throw new Error(`restoreFromBin: missing TrashEntry ids: ${missing.join(", ")}`);
    }
    const restored = [];
    for (const entry of entries){
        const kind = entry.kind === "folder" ? "folder" : "file";
        // Sécurité absolue
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTrashStoragePath"])(appRoot, entry.storageRoot)) {
            throw new Error(`Refusing restore: storageRoot is not trash storage: ${entry.storageRoot}`);
        }
        const { restoredToPath, wasCollision } = await computeRestoredToPath({
            prisma,
            appRoot,
            kind,
            previousPath: entry.previousPath,
            trashedAt: entry.trashedAt
        });
        // Parents DB (registry)
        if (kind === "folder") {
            await upsertFolders(prisma, appRoot, folderAncestorsOfFolderPath(restoredToPath));
        } else {
            await upsertFolders(prisma, appRoot, folderAncestorsOfPublicId(restoredToPath));
        }
        // Move Cloudinary
        if (kind === "file") {
            const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAssetInfo"])(entry.storageRoot);
            await renameAsset(entry.storageRoot, restoredToPath, info.resource_type);
        } else {
            // IMPORTANT: trailing slash pour éviter collisions cours1 vs cours10
            await moveFolderRecursively(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(entry.storageRoot)}/`, `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(restoredToPath)}/`);
        }
        await prisma.trashEntry.update({
            where: {
                id: entry.id
            },
            data: {
                status: "RESTORED",
                restoredAt: new Date(),
                restoredToPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(restoredToPath)
            }
        });
        restored.push({
            id: entry.id,
            kind,
            displayName: entry.displayName,
            previousPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(entry.previousPath),
            restoredToPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(restoredToPath),
            wasCollision,
            trashedAt: entry.trashedAt.toISOString(),
            renameReason: wasCollision ? "COLLISION" : undefined
        });
    }
    return {
        restored
    };
}
}),
"[project]/packages/backend/src/modules/trash/services/deleteForever.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteForever",
    ()=>deleteForever
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$cloudinary$2e$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/cloudinary.client.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cloudinary@2.8.0/node_modules/cloudinary/cloudinary.js [app-route] (ecmascript) <export v2 as cloudinary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/trash/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/services/cloudinary.service.ts [app-route] (ecmascript)");
;
;
;
async function deleteForever(params) {
    const { prisma, input } = params;
    const appRoot = input.appRoot;
    const entries = await prisma.trashEntry.findMany({
        where: {
            appRoot,
            id: {
                in: input.ids
            },
            status: "IN_BIN"
        },
        select: {
            id: true,
            kind: true,
            storageRoot: true
        }
    });
    if (entries.length !== input.ids.length) {
        const found = new Set(entries.map((e)=>e.id));
        const missing = input.ids.filter((id)=>!found.has(id));
        throw new Error(`deleteForever: missing TrashEntry ids: ${missing.join(", ")}`);
    }
    for (const entry of entries){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTrashStoragePath"])(appRoot, entry.storageRoot)) {
            throw new Error(`Refusing deleteForever: storageRoot is not trash storage: ${entry.storageRoot}`);
        }
        if (entry.kind === "file") {
            const info = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAssetInfo"])(entry.storageRoot);
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cloudinary$40$2$2e$8$2e$0$2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v2__as__cloudinary$3e$__["cloudinary"].uploader.destroy(entry.storageRoot, {
                type: "authenticated",
                resource_type: info.resource_type
            });
        } else {
            // Folder: supprime tout sous `${storageRoot}/`
            // (les assets n'existent pas comme dossiers réels)
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$services$2f$cloudinary$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteByPrefix"])(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePath"])(entry.storageRoot)}/`);
        }
        await prisma.trashEntry.update({
            where: {
                id: entry.id
            },
            data: {
                status: "DELETED",
                deletedAt: new Date()
            }
        });
    }
    return {
        deletedIds: entries.map((e)=>e.id)
    };
}
}),
"[project]/packages/backend/src/modules/trash/router.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trashRouter",
    ()=>trashRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/middleware.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$services$2f$listBin$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/trash/services/listBin.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$services$2f$readTrashFolder$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/trash/services/readTrashFolder.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$services$2f$trashToBin$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/trash/services/trashToBin.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$services$2f$restoreFromBin$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/trash/services/restoreFromBin.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$services$2f$deleteForever$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/trash/services/deleteForever.service.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * trash.router.ts
 *
 * Router tRPC dédié à la corbeille.
 *
 * IMPORTANT (design validé) :
 * - Bin = lecture + restore + delete définitif
 * - Le stockage Cloudinary réel est caché : `${appRoot}/bin/.trash/<uuid>/...`
 * - L'utilisateur ne voit jamais `.trash/<uuid>`
 */ const adminProcedure = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAdmin"]);
const listBinInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    appRoot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    cursor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).nullable().optional(),
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).max(100).optional(),
    search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional()
});
const readTrashFolderInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    appRoot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    trashId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    relativePath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const trashToBinInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    appRoot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    sources: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("folder"),
            fullPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("file"),
            fullPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("selection"),
            roots: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1)
        })
    ])).min(1)
});
const restoreFromBinInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    appRoot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    ids: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1)
});
const deleteForeverInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    appRoot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    ids: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1)
});
const trashRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["router"])({
    listBin: adminProcedure.input(listBinInputSchema).query(async ({ ctx, input })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$services$2f$listBin$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listBin"])({
            prisma: ctx.prisma,
            input
        });
    }),
    readTrashFolder: adminProcedure.input(readTrashFolderInputSchema).query(async ({ ctx, input })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$services$2f$readTrashFolder$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readTrashFolder"])({
            prisma: ctx.prisma,
            input
        });
    }),
    trashToBin: adminProcedure.input(trashToBinInputSchema).mutation(async ({ ctx, input })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$services$2f$trashToBin$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["trashToBin"])({
            prisma: ctx.prisma,
            input
        });
    }),
    restoreFromBin: adminProcedure.input(restoreFromBinInputSchema).mutation(async ({ ctx, input })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$services$2f$restoreFromBin$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["restoreFromBin"])({
            prisma: ctx.prisma,
            input
        });
    }),
    deleteForever: adminProcedure.input(deleteForeverInputSchema).mutation(async ({ ctx, input })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$services$2f$deleteForever$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteForever"])({
            prisma: ctx.prisma,
            input
        });
    })
});
}),
"[project]/packages/backend/src/modules/permissions/router.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "permissionRouter",
    ()=>permissionRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/middleware.ts [app-route] (ecmascript)");
;
;
;
;
const permissionRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["router"])({
    getAll: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_permissions")).query(async ({ ctx })=>{
        return ctx.prisma.permission.findMany({
            include: {
                roles: {
                    include: {
                        role: true
                    }
                }
            },
            orderBy: {
                id: "asc"
            }
        });
    }),
    getById: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_permissions")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).query(async ({ ctx, input })=>{
        const permission = await ctx.prisma.permission.findUnique({
            where: {
                id: input.id
            }
        });
        if (!permission) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Permission not found"
            });
        }
        return permission;
    }),
    create: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_permissions")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).mutation(async ({ ctx, input })=>{
        const exists = await ctx.prisma.permission.findUnique({
            where: {
                name: input.name
            }
        });
        if (exists) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: "Permission already exists"
            });
        }
        return ctx.prisma.permission.create({
            data: {
                name: input.name
            }
        });
    }),
    update: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_permissions")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).mutation(async ({ ctx, input })=>{
        const exists = await ctx.prisma.permission.findUnique({
            where: {
                name: input.name
            },
            select: {
                id: true
            }
        });
        if (exists && exists.id !== input.id) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: "Another permission with that name already exists."
            });
        }
        return ctx.prisma.permission.update({
            where: {
                id: input.id
            },
            data: {
                name: input.name
            }
        });
    }),
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_permissions")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).mutation(async ({ ctx, input })=>{
        const linked = await ctx.prisma.rolePermissions.count({
            where: {
                permissionId: input.id
            }
        });
        if (linked > 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: "Cannot delete a permission that is assigned to roles."
            });
        }
        return ctx.prisma.permission.delete({
            where: {
                id: input.id
            }
        });
    }),
    assignToRole: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_permissions")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        permissionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        roleId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).mutation(async ({ ctx, input })=>{
        await ctx.prisma.rolePermissions.upsert({
            where: {
                roleId_permissionId: {
                    roleId: input.roleId,
                    permissionId: input.permissionId
                }
            },
            update: {},
            create: {
                roleId: input.roleId,
                permissionId: input.permissionId
            }
        });
        return {
            success: true
        };
    }),
    removeFromRole: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_permissions")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        permissionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        roleId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).mutation(async ({ ctx, input })=>{
        await ctx.prisma.rolePermissions.deleteMany({
            where: {
                roleId: input.roleId,
                permissionId: input.permissionId
            }
        });
        return {
            success: true
        };
    })
});
const __TURBOPACK__default__export__ = permissionRouter;
}),
"[project]/packages/backend/src/modules/categories/router.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryRouter",
    ()=>categoryRouter,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/middleware.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
;
;
;
const categoryRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["router"])({
    getAll: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicProcedure"].query(async ({ ctx })=>{
        return ctx.prisma.category.findMany({
            orderBy: {
                id: "asc"
            }
        });
    }),
    getById: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).query(async ({ ctx, input })=>{
        const category = await ctx.prisma.category.findUnique({
            where: {
                id: input.id
            }
        });
        if (!category) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Category not found"
            });
        }
        return category;
    }),
    getByType: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const category = await ctx.prisma.category.findUnique({
            where: {
                type: input.type
            }
        });
        if (!category) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Category not found"
            });
        }
        return category;
    }),
    create: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_categories")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).mutation(async ({ ctx, input })=>{
        const exists = await ctx.prisma.category.findUnique({
            where: {
                type: input.type
            }
        });
        if (exists) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: "This category already exists."
            });
        }
        return ctx.prisma.category.create({
            data: {
                type: input.type
            }
        });
    }),
    update: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_categories")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })).mutation(async ({ ctx, input })=>{
        const exists = await ctx.prisma.category.findUnique({
            where: {
                type: input.type
            }
        });
        if (exists && exists.id !== input.id) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: "Another category with this type already exists."
            });
        }
        return ctx.prisma.category.update({
            where: {
                id: input.id
            },
            data: {
                type: input.type
            }
        });
    }),
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_categories")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).mutation(async ({ ctx, input })=>{
        return ctx.prisma.category.delete({
            where: {
                id: input.id
            }
        });
    })
});
const __TURBOPACK__default__export__ = categoryRouter;
}),
"[project]/packages/backend/src/modules/courses/router.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courseRouter",
    ()=>courseRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/tracked-Blz8XOf1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/middleware.ts [app-route] (ecmascript)");
;
;
;
;
;
const courseRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["router"])({
    getAll: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicProcedure"].query(async ({ ctx })=>{
        return ctx.prisma.course.findMany({
            orderBy: {
                id: "asc"
            }
        });
    }),
    getById: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).query(async ({ ctx, input })=>{
        const course = await ctx.prisma.course.findUnique({
            where: {
                id: input.id
            }
        });
        if (!course) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "NOT_FOUND",
                message: "Course not found"
            });
        }
        return course;
    }),
    create: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requirePermission"])("manage_courses")).input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].json(),
        beginTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        endTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        day: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY",
            "SATURDAY",
            "SUNDAY"
        ]),
        requisites: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        coachId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        const exists = await ctx.prisma.course.findUnique({
            where: {
                label: input.label
            }
        });
        if (exists) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$Blz8XOf1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: "CONFLICT",
                message: "A course with this label already exists."
            });
        }
        const createData = {
            label: input.label,
            content: input.content === null ? __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Prisma"].JsonNull : input.content,
            beginTime: input.beginTime,
            endTime: input.endTime,
            day: input.day,
            requisites: input.requisites,
            coach: {
                connect: {
                    id: input.coachId
                }
            }
        };
        return ctx.prisma.course.create({
            data: createData
        });
    })
});
}),
"[project]/packages/backend/src/modules/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appRouter",
    ()=>appRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$auth$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/auth/router.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$users$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/users/router.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$roles$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/roles/router.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$session$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/session/router.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/cloudinary/router.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/trash/router.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$permissions$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/permissions/router.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$categories$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/categories/router.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$courses$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/courses/router.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const appRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["router"])({
    auth: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$auth$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authRouter"],
    user: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$users$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userRouter"],
    role: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$roles$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["roleRouter"],
    session: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$session$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessionRouter"],
    cloudinary: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$cloudinary$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cloudinaryRouter"],
    trash: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$trash$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["trashRouter"],
    permission: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$permissions$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["permissionRouter"],
    category: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$categories$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["categoryRouter"],
    course: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$courses$2f$router$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["courseRouter"]
});
}),
"[project]/packages/backend/src/trpc/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/index.ts [app-route] (ecmascript)");
;
;
}),
"[project]/apps/web/src/app/api/trpc/[trpc]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>handler,
    "POST",
    ()=>handler,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@11.7.1_typescript@5.9.3/node_modules/@trpc/server/dist/adapters/fetch/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/modules/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/backend/src/trpc/core.ts [app-route] (ecmascript)");
;
;
;
const runtime = "nodejs";
const dynamic = "force-dynamic";
const handler = async (req)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$7$2e$1_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchRequestHandler"])({
        endpoint: "/api/trpc",
        req,
        router: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$modules$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appRouter"],
        createContext: async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$backend$2f$src$2f$trpc$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCContext"])({
                req
            })
    });
};
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__95e495a5._.js.map