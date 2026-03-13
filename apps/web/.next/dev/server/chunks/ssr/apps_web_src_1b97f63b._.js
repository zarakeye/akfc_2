module.exports = [
"[project]/apps/web/src/server/cloudinary/move.guards.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canMove",
    ()=>canMove,
    "isFileSource",
    ()=>isFileSource,
    "isFolderSource",
    ()=>isFolderSource,
    "isFolderTarget",
    ()=>isFolderTarget,
    "isSelectionSource",
    ()=>isSelectionSource,
    "isVirtualFolderTarget",
    ()=>isVirtualFolderTarget
]);
const isFileSource = (s)=>s.type === 'file';
const isFolderSource = (s)=>s.type === 'folder';
const isSelectionSource = (s)=>s.type === 'selection';
const isFolderTarget = (t)=>t.type === 'folder';
const isVirtualFolderTarget = (t)=>t.type === 'virtual-folder';
const canMove = (source, target)=>{
    /**
   * -----------------------------------------------------------------------
   * 1) Cas selection
   * -----------------------------------------------------------------------
   */ if (isSelectionSource(source)) {
        // Target virtual = OK (on ne peut pas être "descendant" d'un virtual)
        if (isVirtualFolderTarget(target)) {
            return true;
        }
        // Target folder : vérifier chaque root
        if (isFolderTarget(target)) {
            for (const root of source.roots){
                // ❌ interdit : se dropper soi-même (root == target)
                if (target.fullPath === root) return false;
                // ❌ interdit : un dossier parent droppé dans un de ses descendants
                // (on traite root comme potentiellement un folder)
                if (target.fullPath.startsWith(root + "/")) return false;
            }
            return true;
        }
        return false;
    }
    /**
   * -----------------------------------------------------------------------
   * 2) Cas folder unitaire : règles existantes
   * -----------------------------------------------------------------------
   */ // 1. ❌ interdit : se dropper soi-même
    if (isFolderSource(source) && isFolderTarget(target) && source.fullPath === target.fullPath) {
        return false;
    }
    // 2. ❌ interdit : un dossier dans un de ses sous-dossiers
    if (isFolderSource(source) && isFolderTarget(target) && target.fullPath.startsWith(source.fullPath + "/")) {
        return false;
    }
    // 3. ✅ autorisé : autres cas
    // ✅ File → Folder
    if (isFileSource(source) && isFolderTarget(target)) return true;
    // ✅ File → Virtual Folder
    if (isFileSource(source) && isVirtualFolderTarget(target)) return true;
    // ✅ Folder → Folder
    if (isFolderSource(source) && isFolderTarget(target)) return true;
    // ✅ Folder → Virtual Folder
    if (isFolderSource(source) && isVirtualFolderTarget(target)) return true;
    return false;
};
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/tree/VirtualFolderNodeComponent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VirtualFolderNodeComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$cloudinary$2f$move$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/cloudinary/move.guards.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function VirtualFolderNodeComponent({ node, currentPath, onOpen, onMove, binHasItems }) {
    const [isOver, setIsOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isForbidden, setIsForbidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isActive = node.fullPath === currentPath;
    const icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // ✅ bin: icône pleine/vide
        if (node.status === 'bin') {
            return binHasItems ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/full_trash.svg",
                alt: "full-trash",
                width: 20,
                height: 20
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/VirtualFolderNodeComponent.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/empty_trash.svg",
                alt: "empty-trash",
                width: 20,
                height: 20
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/VirtualFolderNodeComponent.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this);
        }
        // ✅ autres status: icône dossier
        return '📂';
    }, [
        node.status,
        binHasItems
    ]);
    const handleDragOver = (e)=>{
        e.preventDefault(); // nécessaire pour autoriser le drop
        const raw = e.dataTransfer.getData('application/cloudinary');
        if (!raw) {
            setIsOver(true);
            setIsForbidden(true);
            return;
        }
        try {
            const source = JSON.parse(raw);
            const ok = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$cloudinary$2f$move$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canMove"])(source, {
                type: 'virtual-folder',
                status: node.status
            });
            setIsOver(true);
            setIsForbidden(!ok);
            e.dataTransfer.dropEffect = ok ? 'move' : 'none';
        } catch  {
            setIsOver(true);
            setIsForbidden(true);
            e.dataTransfer.dropEffect = 'none';
        }
    };
    const handleDragLeave = ()=>{
        setIsOver(false);
        setIsForbidden(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsOver(false);
        setIsForbidden(false);
        const raw = e.dataTransfer.getData('application/cloudinary');
        if (!raw) return;
        try {
            const source = JSON.parse(raw);
            const intent = {
                source,
                // ✅ IMPORTANT: virtual-folder target (pas folder/fullPath)
                target: {
                    type: 'virtual-folder',
                    status: node.status
                }
            };
            // ✅ garde-fou: si canMove=false, ne pas déclencher onMove
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$cloudinary$2f$move$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canMove"])(source, intent.target)) return;
            onMove(intent);
        } catch (err) {
            console.error('[VirtualFolderNodeComponent] Invalid drop payload', err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        // ✅ requis pour dragGhost.manager.ts (document.dragover)
        "data-drop-type": "virtual-folder",
        "data-drop-status": node.status,
        onClick: ()=>onOpen(node.fullPath),
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('px-9 py-1 rounded cursor-pointer select-none', isActive && 'bg-blue-100 text-blue-700', isOver && !isForbidden && 'bg-emerald-400/15', isOver && isForbidden && 'bg-rose-400/15'),
        title: node.fullPath,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-4 inline-block"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/VirtualFolderNodeComponent.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/VirtualFolderNodeComponent.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "capitalize truncate",
                    children: node.name
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/VirtualFolderNodeComponent.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/VirtualFolderNodeComponent.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/VirtualFolderNodeComponent.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/stores/useSelectionStore.ts
__turbopack_context__.s([
    "useSelectionStore",
    ()=>useSelectionStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.8_@types+react@19.2.2_react@19.2.0_use-sync-external-store@1.6.0_react@19.2.0_/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
// -----------------------------
// Helpers selection normal
// -----------------------------
function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, '');
}
function normalizeSet(set) {
    return new Set(Array.from(set, normalizePath));
}
function isCoveredByRoots(path, roots) {
    for (const root of roots){
        if (path === root || path.startsWith(`${root}/`)) return true;
    }
    return false;
}
function isBlockedByExcluded(path, excluded) {
    for (const ex of excluded){
        if (path === ex || path.startsWith(`${ex}/`)) return true;
    }
    return false;
}
function removeExcludedUnder(path, excluded) {
    const next = new Set(excluded);
    for (const ex of excluded){
        if (ex !== path && ex.startsWith(`${path}/`)) next.delete(ex);
    }
    return next;
}
function compressRoots(roots) {
    const arr = Array.from(roots).sort();
    const next = new Set();
    for (const r of arr){
        if (isCoveredByRoots(r, next)) continue;
        next.add(r);
        for (const kept of Array.from(next)){
            if (kept !== r && kept.startsWith(`${r}/`)) next.delete(kept);
        }
    }
    return next;
}
function compressExcluded(excluded) {
    const arr = Array.from(excluded).sort();
    const next = new Set();
    for (const ex of arr){
        if (isBlockedByExcluded(ex, next)) continue;
        next.add(ex);
        for (const kept of Array.from(next)){
            if (kept !== ex && kept.startsWith(`${ex}/`)) next.delete(kept);
        }
    }
    return next;
}
const useSelectionStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // -----------------------------
        // NORMAL
        // -----------------------------
        multiSelectActive: false,
        selection: {
            roots: new Set(),
            excluded: new Set()
        },
        startSelection: (rootPath)=>{
            const p = normalizePath(rootPath);
            set({
                multiSelectActive: true,
                selection: {
                    roots: new Set([
                        p
                    ]),
                    excluded: new Set()
                },
                // ✅ ne pas mélanger
                binMultiSelectActive: false,
                binSelection: new Set()
            });
        },
        isSelected: (path)=>{
            const p = normalizePath(path);
            const { roots, excluded } = get().selection;
            if (!isCoveredByRoots(p, roots)) return false;
            if (isBlockedByExcluded(p, excluded)) return false;
            return true;
        },
        toggleItem: (path)=>{
            const p = normalizePath(path);
            set((state)=>{
                let roots = compressRoots(normalizeSet(state.selection.roots));
                let excluded = compressExcluded(normalizeSet(state.selection.excluded));
                const isRoot = roots.has(p);
                const coveredByRoot = isCoveredByRoots(p, roots);
                // 1) root explicite -> remove root + exclusions dessous
                if (isRoot) {
                    roots.delete(p);
                    const nextExcluded = new Set();
                    for (const ex of excluded){
                        if (!(ex === p || ex.startsWith(`${p}/`))) nextExcluded.add(ex);
                    }
                    roots = compressRoots(roots);
                    excluded = compressExcluded(nextExcluded);
                    return {
                        multiSelectActive: true,
                        selection: {
                            roots,
                            excluded
                        },
                        // ✅ bin intact
                        binMultiSelectActive: state.binMultiSelectActive,
                        binSelection: state.binSelection
                    };
                }
                // 2) couvert -> toggle exclusion
                if (coveredByRoot) {
                    if (excluded.has(p)) {
                        excluded.delete(p);
                        excluded = removeExcludedUnder(p, excluded);
                    } else {
                        excluded.add(p);
                        excluded = removeExcludedUnder(p, excluded);
                    }
                    excluded = compressExcluded(excluded);
                    return {
                        multiSelectActive: true,
                        selection: {
                            roots,
                            excluded
                        },
                        binMultiSelectActive: state.binMultiSelectActive,
                        binSelection: state.binSelection
                    };
                }
                // 3) pas couvert -> add root
                roots.add(p);
                roots = compressRoots(roots);
                excluded = compressExcluded(excluded);
                return {
                    multiSelectActive: true,
                    selection: {
                        roots,
                        excluded
                    },
                    binMultiSelectActive: state.binMultiSelectActive,
                    binSelection: state.binSelection
                };
            });
        },
        uncheckFolderPreserveDescendants: (folderPath, directChildrenPaths)=>{
            const folder = normalizePath(folderPath);
            const children = directChildrenPaths.map(normalizePath).filter(Boolean);
            set((state)=>{
                let roots = compressRoots(normalizeSet(state.selection.roots));
                let excluded = compressExcluded(normalizeSet(state.selection.excluded));
                if (!roots.has(folder)) return state;
                roots.delete(folder);
                for (const c of children){
                    if (c === folder || !c.startsWith(`${folder}/`)) continue;
                    roots.add(c);
                }
                if (excluded.has(folder)) excluded.delete(folder);
                roots = compressRoots(roots);
                excluded = compressExcluded(excluded);
                return {
                    multiSelectActive: true,
                    selection: {
                        roots,
                        excluded
                    },
                    binMultiSelectActive: state.binMultiSelectActive,
                    binSelection: state.binSelection
                };
            });
        },
        // -----------------------------
        // BIN
        // -----------------------------
        binMultiSelectActive: false,
        binSelection: new Set(),
        startBinSelection: (trashId)=>{
            set({
                binMultiSelectActive: true,
                binSelection: new Set([
                    trashId
                ]),
                // ✅ ne pas mélanger
                multiSelectActive: false,
                selection: {
                    roots: new Set(),
                    excluded: new Set()
                }
            });
        },
        toggleBinSelection: (trashId)=>{
            set((state)=>{
                const next = new Set(state.binSelection);
                if (next.has(trashId)) next.delete(trashId);
                else next.add(trashId);
                return {
                    binMultiSelectActive: true,
                    binSelection: next,
                    multiSelectActive: state.multiSelectActive,
                    selection: state.selection
                };
            });
        },
        // Aliases (compat)
        startBinItem: (trashId)=>get().startBinSelection(trashId),
        toggleBinItem: (trashId)=>get().toggleBinSelection(trashId),
        isBinSelected: (trashId)=>get().binSelection.has(trashId),
        // -----------------------------
        // CLEAR
        // -----------------------------
        clearNormalSelection: ()=>{
            set({
                multiSelectActive: false,
                selection: {
                    roots: new Set(),
                    excluded: new Set()
                }
            });
        },
        clearBinSelection: ()=>{
            set({
                binMultiSelectActive: false,
                binSelection: new Set()
            });
        },
        clearSelection: ()=>{
            set({
                multiSelectActive: false,
                selection: {
                    roots: new Set(),
                    excluded: new Set()
                },
                binMultiSelectActive: false,
                binSelection: new Set()
            });
        }
    }));
}),
"[project]/apps/web/src/features/cloudinary-finder/hooks/useLongPress.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLongPress",
    ()=>useLongPress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useLongPress(onLongPress, delay = 1500) {
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cleanupWindowListenersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cancel = ()=>{
        if (timerRef.current !== null) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (cleanupWindowListenersRef.current) {
            cleanupWindowListenersRef.current();
            cleanupWindowListenersRef.current = null;
        }
    };
    /**
   * Starts the timer for the long press event. If the user releases the mouse button or moves the mouse out of the element before the delay, the onLongPress function is not called.
   */ const start = ()=>{
        cancel();
        timerRef.current = window.setTimeout(()=>{
            timerRef.current = null;
            if (cleanupWindowListenersRef.current) {
                cleanupWindowListenersRef.current();
                cleanupWindowListenersRef.current = null;
            }
            onLongPress();
        }, delay);
        // ✅ Annulation robuste (mouseup/blur/dragstart)
        const onAnyEnd = ()=>cancel();
        window.addEventListener("mouseup", onAnyEnd, true);
        window.addEventListener("blur", onAnyEnd, true);
        window.addEventListener("dragstart", onAnyEnd, true);
        window.addEventListener("touchend", onAnyEnd, true);
        cleanupWindowListenersRef.current = ()=>{
            window.removeEventListener("mouseup", onAnyEnd, true);
            window.removeEventListener("blur", onAnyEnd, true);
            window.removeEventListener("dragstart", onAnyEnd, true);
            window.removeEventListener("touchend", onAnyEnd, true);
        };
    };
    return {
        onMouseDown: start,
        onMouseUp: cancel,
        onMouseLeave: cancel,
        onDragStart: cancel
    };
}
}),
"[project]/apps/web/src/features/cloudinary-finder/dnd/dragGhost.manager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * dragGhost.manager.ts
 *
 * Corrections UX :
 * - Ghost plus translucide
 * - Badge au-dessus (z-index élevé)
 * - Suppression fiable du dragImage natif (setDragImage avec élément DOM transparent)
 * - Badge pastel + shadow + icône SVG (traits arrondis)
 */ __turbopack_context__.s([
    "startDragGhost",
    ()=>startDragGhost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$cloudinary$2f$move$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/cloudinary/move.guards.ts [app-ssr] (ecmascript)");
;
let ghostEl = null;
let badgeEl = null;
let sourceRef = null;
let dragImageEl = null;
function createTransparentDragImageEl() {
    // ✅ élément DOM transparent, fiable pour neutraliser le ghost natif
    const el = document.createElement('div');
    el.style.width = '1px';
    el.style.height = '1px';
    el.style.opacity = '0';
    el.style.position = 'fixed';
    el.style.left = '-9999px';
    el.style.top = '-9999px';
    el.style.pointerEvents = 'none';
    document.body.appendChild(el);
    return el;
}
function moveGhost(x, y) {
    if (!ghostEl) return;
    ghostEl.style.left = `${x + 14}px`;
    ghostEl.style.top = `${y + 14}px`;
}
function svgPlus() {
    return `
  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5v14M5 12h14" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
function svgX() {
    return `
  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7l10 10M17 7L7 17" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
function setBadgeState(state) {
    if (!badgeEl) return;
    // ✅ Couleurs pastel + shadow vers le bas + z-index au-dessus du ghost
    const base = 'absolute -top-3 -right-3 z-[99999] w-8 h-8 rounded-full flex items-center justify-center shadow-md';
    const allowed = 'bg-emerald-400/90';
    const forbidden = 'bg-rose-400/90';
    badgeEl.className = `${base} ${state === 'allowed' ? allowed : forbidden}`;
    badgeEl.innerHTML = state === 'allowed' ? svgPlus() : svgX();
}
function renderGhost(previews) {
    if (!ghostEl) return;
    ghostEl.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'relative';
    // Badge
    const badge = document.createElement('div');
    badgeEl = badge;
    setBadgeState('allowed');
    wrapper.appendChild(badge);
    // Pile
    const stack = document.createElement('div');
    // ✅ Ghost translucide
    stack.className = 'relative w-24 h-24 opacity-70';
    const top = previews.slice(0, 3);
    top.forEach((p, idx)=>{
        const card = document.createElement('div');
        card.className = 'absolute w-24 h-24 rounded border border-gray-200 bg-white/80 overflow-hidden flex items-center justify-center';
        const dx = idx * 6;
        const dy = idx * 6;
        card.style.transform = `translate(${dx}px, ${dy}px)`;
        if (p.kind === 'file') {
            const img = document.createElement('img');
            img.src = p.thumbUrl;
            img.alt = p.name;
            img.className = 'w-full h-full object-contain bg-gray-50/60';
            card.appendChild(img);
        } else {
            const inner = document.createElement('div');
            inner.className = 'flex flex-col items-center justify-center text-center px-2';
            inner.innerHTML = `<div class="text-3xl">📁</div><div class="text-xs truncate w-full">${p.name}</div>`;
            card.appendChild(inner);
        }
        stack.appendChild(card);
    });
    wrapper.appendChild(stack);
    // compteur si > 3
    if (previews.length > 3) {
        const count = document.createElement('div');
        count.className = 'absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full';
        count.textContent = `+${previews.length - 3}`;
        wrapper.appendChild(count);
    }
    ghostEl.appendChild(wrapper);
}
function parseDropDataset(el) {
    if (!el) return null;
    const type = el.getAttribute('data-drop-type');
    if (!type) return null;
    if (type === 'folder') {
        const fullPath = el.getAttribute('data-drop-path');
        if (!fullPath) return null;
        return {
            type: 'folder',
            fullPath
        };
    }
    if (type === 'virtual-folder') {
        const status = el.getAttribute('data-drop-status');
        if (!status) return null;
        return {
            type: 'virtual-folder',
            status
        };
    }
    return null;
}
function buildTargetFromDataset(ds) {
    if (ds.type === 'virtual-folder') return {
        type: 'virtual-folder',
        status: ds.status
    };
    return {
        type: 'folder',
        fullPath: ds.fullPath
    };
}
function handleDocumentDragOver(e) {
    if (!ghostEl || !sourceRef) return;
    moveGhost(e.clientX, e.clientY);
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const dropZone = el?.closest?.('[data-drop-type]') ?? null;
    const ds = parseDropDataset(dropZone);
    if (!ds) {
        setBadgeState('forbidden');
        return;
    }
    const target = buildTargetFromDataset(ds);
    const ok = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$cloudinary$2f$move$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canMove"])(sourceRef, target);
    setBadgeState(ok ? 'allowed' : 'forbidden');
}
function cleanup() {
    document.removeEventListener('dragover', handleDocumentDragOver);
    window.removeEventListener('drop', cleanup, true);
    window.removeEventListener('dragend', cleanup, true);
    if (ghostEl) {
        ghostEl.remove();
        ghostEl = null;
    }
    if (dragImageEl) {
        dragImageEl.remove();
        dragImageEl = null;
    }
    badgeEl = null;
    sourceRef = null;
}
function startDragGhost(args) {
    const { e, source, previews } = args;
    sourceRef = source;
    // ✅ Neutralise le ghost natif HTML5
    dragImageEl = createTransparentDragImageEl();
    e.dataTransfer.setDragImage(dragImageEl, 0, 0);
    const ghost = document.createElement('div');
    ghost.className = 'fixed z-[9999] pointer-events-none select-none';
    ghost.style.left = '0px';
    ghost.style.top = '0px';
    document.body.appendChild(ghost);
    ghostEl = ghost;
    renderGhost(previews);
    moveGhost(e.clientX, e.clientY);
    document.addEventListener('dragover', handleDocumentDragOver);
    window.addEventListener('drop', cleanup, true);
    window.addEventListener('dragend', cleanup, true);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/utils/binTrashUI.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * binTrashUi.ts
 *
 * Helpers UI pour masquer l'implémentation technique de la corbeille:
 * - Storage réel: <APP>/bin/.trash/<trashId>/...
 * - UI: on cache ".trash" et on remplace "<trashId>" par basename(previousPath)
 */ __turbopack_context__.s([
    "basenamePath",
    ()=>basenamePath,
    "getBinFolderLabel",
    ()=>getBinFolderLabel,
    "getBinTooltipTitle",
    ()=>getBinTooltipTitle,
    "getRelativePathInsideTrash",
    ()=>getRelativePathInsideTrash,
    "getTrashIdFromStoragePath",
    ()=>getTrashIdFromStoragePath,
    "normalizePath",
    ()=>normalizePath
]);
function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, "");
}
function basenamePath(p) {
    const parts = normalizePath(p).split("/").filter(Boolean);
    return parts[parts.length - 1] ?? p;
}
function getTrashIdFromStoragePath(fullPath) {
    const parts = normalizePath(fullPath).split("/").filter(Boolean);
    // attendu: [APP, bin, .trash, <trashId>, ...]
    const idx = parts.indexOf(".trash");
    if (idx === -1) return null;
    const trashId = parts[idx + 1];
    return trashId ?? null;
}
function getRelativePathInsideTrash(fullPath, trashId) {
    const normalized = normalizePath(fullPath);
    const needle = `/bin/.trash/${trashId}/`;
    const idx = normalized.indexOf(needle);
    if (idx === -1) return "";
    return normalized.slice(idx + needle.length);
}
function getBinTooltipTitle(fullPath, trashMap) {
    const trashId = getTrashIdFromStoragePath(fullPath);
    if (!trashId) return fullPath;
    const entry = trashMap.get(trashId);
    if (!entry) return fullPath;
    const relative = getRelativePathInsideTrash(fullPath, trashId);
    if (!relative) return entry.previousPath;
    return `${normalizePath(entry.previousPath)}/${relative}`;
}
function getBinFolderLabel(params) {
    const { folderName, folderFullPath, trashMap } = params;
    if (folderName === ".trash") return {
        shouldRender: false,
        label: folderName
    };
    const trashId = getTrashIdFromStoragePath(folderFullPath);
    if (trashId && folderName === trashId) {
        const entry = trashMap.get(trashId);
        return {
            shouldRender: true,
            label: entry?.displayName ?? "Élément supprimé"
        };
    }
    return {
        shouldRender: true,
        label: folderName
    };
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/cloudinary-finder/TreeView/FolderNodeComponent.tsx
__turbopack_context__.s([
    "default",
    ()=>FolderNodeComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/hooks/useLongPress.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$cloudinary$2f$move$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/cloudinary/move.guards.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$dnd$2f$dragGhost$2e$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/dnd/dragGhost.manager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$utils$2f$binTrashUI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/utils/binTrashUI.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function isStatusRootFolder(fullPath) {
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$utils$2f$binTrashUI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePath"])(fullPath).split('/').filter(Boolean);
    if (parts.length !== 2) return false;
    return parts[1] === 'pending' || parts[1] === 'published' || parts[1] === 'bin';
}
function isBinContext(currentPath) {
    if (!currentPath) return false;
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$utils$2f$binTrashUI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePath"])(currentPath);
    return p.includes('/bin') && (p.endsWith('/bin') || p.includes('/bin/'));
}
function isInTrashStorage(fullPath) {
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$utils$2f$binTrashUI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePath"])(fullPath);
    return p.includes('/bin/.trash/');
}
function getFolderTriState(params) {
    const { folderPath, roots, excluded, isSelected } = params;
    const selectedSelf = isSelected(folderPath);
    let hasDescendantRoot = false;
    for (const r of roots){
        if (r !== folderPath && r.startsWith(`${folderPath}/`)) {
            hasDescendantRoot = true;
            break;
        }
    }
    let hasExcludedInside = false;
    for (const ex of excluded){
        if (ex === folderPath || ex.startsWith(`${folderPath}/`)) {
            hasExcludedInside = true;
            break;
        }
    }
    if (selectedSelf) return hasExcludedInside ? 'indeterminate' : 'checked';
    if (hasDescendantRoot) return 'indeterminate';
    return 'unchecked';
}
function binTooltipFallback() {
    return 'Élément supprimé (corbeille)';
}
function FolderNodeComponent({ folder, currentPath, onOpen, onMove, isOpen, onToggleOpen, multiSelectActive, openFolders, setOpenFolders, trashMap, binHasItems }) {
    const isActive = folder.fullPath === currentPath;
    const [isOver, setIsOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isForbidden, setIsForbidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { selection, startSelection, toggleItem, clearSelection, isSelected, uncheckFolderPreserveDescendants } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])();
    const statusRoot = isStatusRootFolder(folder.fullPath);
    const tri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getFolderTriState({
            folderPath: folder.fullPath,
            roots: selection.roots,
            excluded: selection.excluded,
            isSelected
        }), [
        folder.fullPath,
        selection.roots,
        selection.excluded,
        isSelected
    ]);
    const isValidated = tri === 'checked';
    const rowHighlighted = tri !== 'unchecked';
    const checkboxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!checkboxRef.current) return;
        checkboxRef.current.indeterminate = tri === 'indeterminate';
    }, [
        tri
    ]);
    const longPressFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const longPressHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLongPress"])(()=>{
        if (statusRoot) return;
        longPressFiredRef.current = true;
        startSelection(folder.fullPath);
    });
    // ✅ BIN UI MASK
    const inBin = isBinContext(currentPath);
    const inTrashStorage = isInTrashStorage(folder.fullPath);
    const trashId = inTrashStorage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$utils$2f$binTrashUI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTrashIdFromStoragePath"])(folder.fullPath) : null;
    if (inBin && folder.name === '.trash') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    let uiLabel = folder.name;
    if (inBin && inTrashStorage) {
        if (trashId && folder.name === trashId) {
            uiLabel = trashMap?.get(trashId)?.displayName ?? 'Élément supprimé';
        }
    }
    let title = folder.fullPath;
    if (inBin && inTrashStorage) {
        title = trashMap ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$utils$2f$binTrashUI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBinTooltipTitle"])(folder.fullPath, trashMap) : binTooltipFallback();
    }
    function buildDragSource() {
        if (multiSelectActive && isValidated) {
            return {
                type: 'selection',
                roots: Array.from(selection.roots),
                excluded: Array.from(selection.excluded)
            };
        }
        if (multiSelectActive && tri === 'indeterminate') {
            return {
                type: 'folder',
                fullPath: folder.fullPath
            };
        }
        if (multiSelectActive && tri === 'unchecked') {
            clearSelection();
            return {
                type: 'folder',
                fullPath: folder.fullPath
            };
        }
        return {
            type: 'folder',
            fullPath: folder.fullPath
        };
    }
    function buildFolderPreviewsForGhost(source) {
        if (source.type === 'selection') {
            const excluded = new Set(source.excluded ?? []);
            const roots = (source.roots ?? []).filter((p)=>!excluded.has(p));
            const previews = roots.map((p)=>{
                const parts = p.split('/');
                const name = parts[parts.length - 1] || p;
                return {
                    kind: 'folder',
                    name
                };
            });
            return previews.length ? previews : [
                {
                    kind: 'folder',
                    name: uiLabel
                }
            ];
        }
        return [
            {
                kind: 'folder',
                name: uiLabel
            }
        ];
    }
    const handleDragStart = (e)=>{
        const source = buildDragSource();
        e.dataTransfer.setData('application/cloudinary', JSON.stringify(source));
        e.dataTransfer.effectAllowed = 'move';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$dnd$2f$dragGhost$2e$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startDragGhost"])({
            e,
            source,
            previews: buildFolderPreviewsForGhost(source)
        });
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        const raw = e.dataTransfer.getData('application/cloudinary');
        if (!raw) {
            setIsOver(true);
            setIsForbidden(true);
            return;
        }
        try {
            const source = JSON.parse(raw);
            const target = {
                type: 'folder',
                fullPath: folder.fullPath
            };
            const ok = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$cloudinary$2f$move$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canMove"])(source, target);
            setIsOver(true);
            setIsForbidden(!ok);
            e.dataTransfer.dropEffect = ok ? 'move' : 'none';
        } catch  {
            setIsOver(true);
            setIsForbidden(true);
            e.dataTransfer.dropEffect = 'none';
        }
    };
    const handleDragLeave = ()=>{
        setIsOver(false);
        setIsForbidden(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsOver(false);
        setIsForbidden(false);
        const raw = e.dataTransfer.getData('application/cloudinary');
        if (!raw) return;
        try {
            const source = JSON.parse(raw);
            const target = {
                type: 'folder',
                fullPath: folder.fullPath
            };
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$cloudinary$2f$move$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canMove"])(source, target)) return;
            onMove({
                source,
                target
            });
        } catch (err) {
            console.error('[FolderNodeComponent] Invalid drop payload', err);
        }
    };
    const subFolders = folder.children.filter((child)=>child.type === 'folder');
    const handleRowClick = ()=>{
        if (multiSelectActive) {
            if (statusRoot) {
                onOpen(folder.fullPath);
                return;
            }
            toggleItem(folder.fullPath);
            return;
        }
        onOpen(folder.fullPath);
    };
    const handleCheckboxChange = ()=>{
        if (statusRoot) return;
        const isRoot = selection.roots.has(folder.fullPath);
        if (tri === 'checked' && isRoot) {
            const directChildrenPaths = folder.children.map((c)=>c.fullPath);
            uncheckFolderPreserveDescendants(folder.fullPath, directChildrenPaths);
            return;
        }
        toggleItem(folder.fullPath);
    };
    const draggable = !multiSelectActive ? true : !statusRoot && tri !== 'indeterminate';
    const showChevron = !multiSelectActive && subFolders.length > 0 && folder.name !== 'bin';
    /**
   * ✅ FIX: full/empty corrigé
   */ const binIcon = binHasItems ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        src: "/full_trash.svg",
        alt: "full-trash",
        width: 20,
        height: 20
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
        lineNumber: 312,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        src: "/empty_trash.svg",
        alt: "empty-trash",
        width: 20,
        height: 20
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
        lineNumber: 314,
        columnNumber: 5
    }, this);
    const icon = folder.name === 'bin' ? binIcon : '📁';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-tree-item": "true",
                "data-drop-type": "folder",
                "data-drop-path": folder.fullPath,
                draggable: draggable,
                onDragStart: draggable ? handleDragStart : undefined,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,
                onClickCapture: (e)=>{
                    if (!longPressFiredRef.current) return;
                    longPressFiredRef.current = false;
                    e.preventDefault();
                    e.stopPropagation();
                },
                onClick: handleRowClick,
                onMouseDown: longPressHandlers.onMouseDown,
                onMouseUp: longPressHandlers.onMouseUp,
                onMouseLeave: longPressHandlers.onMouseLeave,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('flex items-center gap-2 px-3 py-1 rounded cursor-pointer', isActive && !multiSelectActive && 'bg-blue-100 text-blue-700', isOver && !isForbidden && 'bg-emerald-400/15', isOver && isForbidden && 'bg-rose-400/15', multiSelectActive && rowHighlighted && 'bg-gray-200', multiSelectActive && !rowHighlighted && 'hover:bg-gray-100'),
                title: title,
                children: [
                    multiSelectActive && !statusRoot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: checkboxRef,
                        type: "checkbox",
                        checked: tri === 'checked',
                        onChange: handleCheckboxChange,
                        onMouseDown: (e)=>e.stopPropagation(),
                        onPointerDown: (e)=>e.stopPropagation(),
                        onClick: (e)=>e.stopPropagation(),
                        className: "h-4 w-4 accent-blue-600",
                        title: tri === 'indeterminate' ? 'Sélection partielle (indéterminée) — aucune action ne s’applique sur ce dossier' : 'Sélectionner ce dossier'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-4 inline-block"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this),
                    multiSelectActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-4 inline-block"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
                        lineNumber: 371,
                        columnNumber: 11
                    }, this) : showChevron ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onToggleOpen();
                        },
                        className: "cursor-pointer w-4 inline-block text-center",
                        children: isOpen ? '▾' : '▸'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
                        lineNumber: 373,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-4 inline-block"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
                        lineNumber: 383,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "capitalize truncate",
                        children: uiLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            isOpen && subFolders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4 space-y-1",
                children: subFolders.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FolderNodeComponent, {
                        folder: child,
                        currentPath: currentPath,
                        onOpen: onOpen,
                        onMove: onMove,
                        isOpen: openFolders.has(child.fullPath),
                        onToggleOpen: ()=>{
                            if (multiSelectActive) return;
                            setOpenFolders((prev)=>{
                                const next = new Set(prev);
                                next.has(child.fullPath) ? next.delete(child.fullPath) : next.add(child.fullPath);
                                return next;
                            });
                        },
                        multiSelectActive: multiSelectActive,
                        openFolders: openFolders,
                        setOpenFolders: setOpenFolders,
                        trashMap: trashMap,
                        binHasItems: binHasItems
                    }, child.fullPath, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
                        lineNumber: 394,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
                lineNumber: 392,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx",
        lineNumber: 320,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/tree/TreeView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TreeView",
    ()=>TreeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$tree$2f$VirtualFolderNodeComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/tree/VirtualFolderNodeComponent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$tree$2f$FolderNodeComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/tree/FolderNodeComponent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trpcClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$utils$2f$binTrashUI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/utils/binTrashUI.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, '');
}
function collectAllFolderPaths(roots) {
    const acc = [];
    function walkFolder(folder) {
        acc.push(folder.fullPath);
        for (const child of folder.children){
            if (child.type === 'folder') walkFolder(child);
        }
    }
    for (const node of roots){
        if (node.type === 'folder') walkFolder(node);
    }
    return acc;
}
function isInBinUi(currentPath) {
    const p = normalizePath(currentPath);
    return p.includes('/bin') && (p.endsWith('/bin') || p.includes('/bin/'));
}
function extractTrashItems(data) {
    if (!data) return [];
    if ('items' in data && Array.isArray(data.items)) {
        return data.items;
    }
    if ('entries' in data && Array.isArray(data.entries)) {
        return data.entries;
    }
    return [];
}
function TreeView({ roots, currentPath, onOpen, onMove, appRoot }) {
    const multiSelectActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.multiSelectActive);
    const clearSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.clearSelection);
    const [openFolders, setOpenFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set());
    const openBackupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const allFolderPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>collectAllFolderPaths(roots), [
        roots
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (multiSelectActive) {
            if (!openBackupRef.current) openBackupRef.current = new Set(openFolders);
            setOpenFolders(new Set(allFolderPaths));
        } else {
            if (openBackupRef.current) {
                setOpenFolders(openBackupRef.current);
                openBackupRef.current = null;
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        multiSelectActive,
        allFolderPaths
    ]);
    function toggleFolder(path) {
        if (multiSelectActive) return;
        setOpenFolders((prev)=>{
            const next = new Set(prev);
            next.has(path) ? next.delete(path) : next.add(path);
            return next;
        });
    }
    const inBin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isInBinUi(currentPath), [
        currentPath
    ]);
    /**
   * ✅ IMPORTANT:
   * - `limit` doit respecter le schema (max 100) sinon 400.
   * - ne PAS passer `search: undefined` pour éviter "undefined" sérialisé.
   */ const listBin = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.listBin.useQuery({
        appRoot,
        limit: 100,
        cursor: null
    }, {
        staleTime: 20_000,
        refetchOnWindowFocus: false
    });
    const allTrashItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return extractTrashItems(listBin.data);
    }, [
        listBin.data
    ]);
    /**
   * ✅ Map utilisée UNIQUEMENT en contexte bin (masques .trash + labels)
   */ const trashMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!inBin) return undefined;
        const map = new Map();
        for (const e of allTrashItems){
            const ui = {
                id: e.id,
                previousPath: e.previousPath,
                displayName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$utils$2f$binTrashUI$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["basenamePath"])(e.previousPath)
            };
            map.set(ui.id, ui);
        }
        return map;
    }, [
        inBin,
        allTrashItems
    ]);
    /**
   * ✅ Bin pleine/vide : calcul basé sur listBin même hors bin
   */ const binHasItems = allTrashItems.length > 0;
    // 🔎 Logs conservés pour valider le fix (tu peux les enlever ensuite)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const binNode = roots.find((n)=>n.fullPath === `${appRoot}/bin`);
        // eslint-disable-next-line no-console
        console.log('[TreeView][BIN DEBUG]', {
            appRoot,
            currentPath,
            inBin,
            listBinStatus: {
                isLoading: listBin.isLoading,
                isFetching: listBin.isFetching,
                isError: listBin.isError,
                hasData: Boolean(listBin.data)
            },
            trashCount: allTrashItems.length,
            binHasItems,
            binNodeType: binNode ? binNode.type : 'MISSING',
            binNodeFullPath: binNode?.fullPath ?? null,
            binNodeName: binNode?.name ?? null
        });
    }, [
        appRoot,
        currentPath,
        inBin,
        roots,
        listBin.isLoading,
        listBin.isFetching,
        listBin.isError,
        listBin.data,
        allTrashItems.length,
        binHasItems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1",
        onMouseDownCapture: (e)=>{
            if (!multiSelectActive) return;
            const el = e.target;
            if (!el) return;
            const insideTreeItem = el.closest('[data-tree-item="true"]');
            if (!insideTreeItem) clearSelection();
        },
        children: roots.map((node)=>{
            if (node.type === 'virtual-folder') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$tree$2f$VirtualFolderNodeComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    node: node,
                    currentPath: currentPath,
                    onOpen: onOpen,
                    onMove: onMove
                }, node.fullPath, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/TreeView.tsx",
                    lineNumber: 211,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$tree$2f$FolderNodeComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                folder: node,
                currentPath: currentPath,
                onOpen: onOpen,
                onMove: onMove,
                isOpen: openFolders.has(node.fullPath),
                onToggleOpen: ()=>toggleFolder(node.fullPath),
                multiSelectActive: multiSelectActive,
                openFolders: openFolders,
                setOpenFolders: setOpenFolders,
                trashMap: trashMap,
                binHasItems: binHasItems
            }, node.fullPath, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/TreeView.tsx",
                lineNumber: 222,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/TreeView.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/guards/finder.guards.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDefinedFolderNode",
    ()=>isDefinedFolderNode,
    "isDefinedNode",
    ()=>isDefinedNode,
    "isFileNode",
    ()=>isFileNode,
    "isFolderNode",
    ()=>isFolderNode
]);
function isFolderNode(node) {
    return node.type === "folder";
}
function isFileNode(node) {
    return node.type === "file";
}
function isDefinedFolderNode(node) {
    return node !== undefined && node.type === 'folder';
}
function isDefinedNode(node) {
    return node !== undefined;
}
}),
"[project]/apps/web/src/features/cloudinary-finder/adapters/mappers/explorer.move.mapper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * explorer.move.mapper.ts
 *
 * Actions effectuées :
 * - Adaptation de explorerNodeToDragSource pour supporter 2 cas explicites :
 *   1) Drag unitaire (file/folder)
 *   2) Drag multi-select (type 'selection' + roots/excluded depuis le store)
 * - Garder explorerNodeToMoveTarget compatible avec RootNode (virtual-folder) et TreeNode (folder réel).
 */ __turbopack_context__.s([
    "explorerNodeToDragSource",
    ()=>explorerNodeToDragSource,
    "explorerNodeToMoveTarget",
    ()=>explorerNodeToMoveTarget
]);
function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, '');
}
/**
 * ✅ Filtre “actionnable” (validé) pour roots/excluded.
 *
 * Spécification UX (fixée) :
 * - Les éléments indéterminés ne doivent PAS subir d'actions (move/delete).
 *
 * Dans roots/excluded, un root devient “indéterminé” dès qu'il possède au moins
 * une exclusion sous lui.
 *
 * => on retire donc des roots tout root qui a une exclusion (ex === root ou ex sous root/)
 * => on retire aussi les exclusions qui ne sont pas sous un root conservé
 */ function filterSelectionForActions(selection) {
    const roots = Array.from(selection.roots, normalizePath);
    const excluded = Array.from(selection.excluded, normalizePath);
    const validRoots = [];
    for (const r of roots){
        const hasExcludedUnder = excluded.some((ex)=>ex === r || ex.startsWith(`${r}/`));
        if (!hasExcludedUnder) validRoots.push(r);
    }
    const validRootsSet = new Set(validRoots);
    const validExcluded = excluded.filter((ex)=>{
        for (const r of validRootsSet){
            if (ex === r || ex.startsWith(`${r}/`)) return true;
        }
        return false;
    });
    return {
        roots: new Set(validRoots),
        excluded: new Set(validExcluded)
    };
}
function explorerNodeToDragSource(input) {
    /**
   * ✅ CAS mlti-select : payload Zod "selection"
   */ if (input.kind === 'selection') {
        // ✅ On n'envoie que la partie “validée / actionnable”
        // (les roots indéterminés ne doivent pas subir d'action)
        const actionable = filterSelectionForActions(input.selection);
        const roots = Array.from(actionable.roots);
        const excludedArr = Array.from(actionable.excluded);
        return {
            type: 'selection',
            roots,
            // 👇 Action : n'envoyer excluded que si non-vide (sinon on laisse undefined)
            excluded: excludedArr.length ? excludedArr : undefined
        };
    }
    /**
   * ✅ CAS unitaire : payload Zod "file" ou "folder"
   */ const node = input.node;
    if (node.type === 'file' || node.type === 'folder') {
        return {
            type: node.type,
            fullPath: node.fullPath
        };
    }
    // ⚠️ Sécurité : TreeNode ne devrait pas contenir 'virtual-folder' de toute façon
    throw new Error(`Invalid node type for drag: ${node.type}`);
}
function explorerNodeToMoveTarget(node) {
    if (node.type === 'virtual-folder') {
        return {
            type: 'virtual-folder',
            status: node.status
        };
    }
    // folder réel
    return {
        type: 'folder',
        fullPath: node.fullPath
    };
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFolderItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GridFolderItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$adapters$2f$mappers$2f$explorer$2e$move$2e$mapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/adapters/mappers/explorer.move.mapper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/hooks/useLongPress.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$dnd$2f$dragGhost$2e$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/dnd/dragGhost.manager.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, '');
}
function isStatusRootFolder(fullPath) {
    const parts = normalizePath(fullPath).split('/').filter(Boolean);
    if (parts.length !== 2) return false;
    return parts[1] === 'pending' || parts[1] === 'published' || parts[1] === 'bin';
}
/**
 * ✅ Tri-state basé sur roots/excluded (pas sur les enfants présents dans la grille).
 *
 * - checked: folder sélectionné ET aucune exclusion sous lui
 * - indeterminate: descendant root sélectionné, ou folder sélectionné mais exclu partiellement
 * - unchecked: rien
 */ function getFolderTriState(params) {
    const { folderPath, roots, excluded, isSelected } = params;
    const selectedSelf = isSelected(folderPath);
    let hasDescendantRoot = false;
    for (const r of roots){
        if (r !== folderPath && r.startsWith(`${folderPath}/`)) {
            hasDescendantRoot = true;
            break;
        }
    }
    let hasExcludedInside = false;
    for (const ex of excluded){
        if (ex === folderPath || ex.startsWith(`${folderPath}/`)) {
            hasExcludedInside = true;
            break;
        }
    }
    if (selectedSelf) return hasExcludedInside ? 'indeterminate' : 'checked';
    if (hasDescendantRoot) return 'indeterminate';
    return 'unchecked';
}
/**
 * Construit une sélection “actionnable” pour le drag depuis la grid.
 *
 * Spéc demandé : seuls les éléments VALIDÉS (checked) subissent l'action.
 * - Dossiers indéterminés : exclus
 * - Files checked : inclus
 * - Dossiers checked : inclus
 *
 * Dans la grid, on a une opportunité : on connaît visibleNodes.
 * => on peut ajouter en roots les items checked visibles, même si leur “check”
 * vient d'un root parent indéterminé.
 */ function buildActionableSelection(params) {
    const { selection, visibleNodes, isSelected, getTriForFolder } = params;
    const excludedArr = Array.from(selection.excluded);
    // 1) Roots “validés” (pas d'exclusion sous eux)
    const validRootsFromStore = [];
    for (const r of selection.roots){
        const hasExcludedUnder = excludedArr.some((ex)=>ex === r || ex.startsWith(`${r}/`));
        if (!hasExcludedUnder) validRootsFromStore.push(r);
    }
    const rootsSet = new Set(validRootsFromStore);
    // 2) Ajouter les items checked visibles (files + folders), en évitant les doublons.
    for (const n of visibleNodes){
        if (n.type === 'file') {
            if (isSelected(n.fullPath)) rootsSet.add(n.fullPath);
            continue;
        }
        if (n.type === 'folder') {
            if (getTriForFolder(n.fullPath) === 'checked') rootsSet.add(n.fullPath);
        }
    }
    // 3) Excluded : on ne garde que celles qui sont sous un root conservé
    const roots = Array.from(rootsSet);
    const keptExcluded = excludedArr.filter((ex)=>roots.some((r)=>ex === r || ex.startsWith(`${r}/`)));
    return {
        roots,
        excluded: keptExcluded.length ? keptExcluded : undefined
    };
}
function GridFolderItem({ folder, onOpenFolder, visibleNodes }) {
    const { multiSelectActive, selection, startSelection, toggleItem, isSelected, uncheckFolderPreserveDescendants } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])();
    const statusRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isStatusRootFolder(folder.fullPath), [
        folder.fullPath
    ]);
    const tri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getFolderTriState({
            folderPath: folder.fullPath,
            roots: selection.roots,
            excluded: selection.excluded,
            isSelected
        }), [
        folder.fullPath,
        selection.roots,
        selection.excluded,
        isSelected
    ]);
    // ✅ visuel: on garde l'indeterminate visible
    const highlighted = tri !== 'unchecked';
    // ✅ actionnable UNIQUEMENT si checked
    const isValidated = tri === 'checked';
    const checkboxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!checkboxRef.current) return;
        checkboxRef.current.indeterminate = tri === 'indeterminate';
    }, [
        tri
    ]);
    const didLongPressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const longPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLongPress"])(()=>{
        // ✅ status roots : pas de multiselect dessus
        if (statusRoot) return;
        didLongPressRef.current = true;
        startSelection(folder.fullPath);
    });
    const getTriForFolder = (path)=>getFolderTriState({
            folderPath: path,
            roots: selection.roots,
            excluded: selection.excluded,
            isSelected
        });
    function resolveNodesForGhost(actionableRoots) {
        if (!multiSelectActive) return [
            folder
        ];
        if (!actionableRoots.length) return [
            folder
        ];
        // Ghost = uniquement les roots actionnables qui sont visibles dans cette grille
        return visibleNodes.filter((n)=>actionableRoots.includes(n.fullPath));
    }
    /**
   * Checkbox change
   * - status roots: pas de checkbox
   * - uncheck d'un folder root validé => garder descendance cochée
   * - sinon toggle standard
   */ const handleCheckboxChange = ()=>{
        if (statusRoot) return;
        const isRoot = selection.roots.has(folder.fullPath);
        if (tri === 'checked' && isRoot) {
            const directChildrenPaths = folder.children.map((c)=>c.fullPath);
            uncheckFolderPreserveDescendants(folder.fullPath, directChildrenPaths);
            return;
        }
        toggleItem(folder.fullPath);
    };
    // ✅ Désactivation des actions sur les dossiers indéterminés en multiselect
    const draggable = !multiSelectActive ? true : !statusRoot && tri !== 'indeterminate';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-content-item": "true",
        className: [
            'relative w-32 h-32 rounded border cursor-pointer flex flex-col items-center justify-center',
            'transition-colors duration-150',
            highlighted ? 'bg-slate-200/70 border-slate-300' : 'bg-gray-50 border-gray-200',
            'hover:shadow-md'
        ].join(' '),
        draggable: draggable,
        onDragStart: draggable ? (e)=>{
            setDragging(true);
            // ✅ actionnable = roots validés + items checked visibles
            const actionable = buildActionableSelection({
                selection,
                visibleNodes,
                isSelected,
                getTriForFolder
            });
            // Si le folder “cliqué” est indeterminate => pas d'action (draggable=false déjà)
            // Si le folder n'est pas validé => on drag en single
            const shouldUseSelection = multiSelectActive && isValidated && actionable.roots.length > 0;
            const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$adapters$2f$mappers$2f$explorer$2e$move$2e$mapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["explorerNodeToDragSource"])(shouldUseSelection ? {
                kind: 'selection',
                selection: {
                    roots: new Set(actionable.roots),
                    excluded: new Set(actionable.excluded ?? [])
                }
            } : {
                kind: 'single',
                node: folder
            });
            e.dataTransfer.setData('application/cloudinary', JSON.stringify(payload));
            e.dataTransfer.effectAllowed = 'move';
            const nodesForGhost = shouldUseSelection ? resolveNodesForGhost(actionable.roots) : [
                folder
            ];
            const previews = nodesForGhost.map((n)=>{
                if (n.type === 'file') {
                    const thumbUrl = n.url.replace('/upload/', '/upload/w_128,h_128,c_fit,dpr_auto,f_auto/');
                    return {
                        kind: 'file',
                        name: n.name,
                        thumbUrl
                    };
                }
                return {
                    kind: 'folder',
                    name: n.name
                };
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$dnd$2f$dragGhost$2e$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startDragGhost"])({
                e,
                source: payload,
                previews
            });
            longPress.onDragStart();
        } : undefined,
        onDragEnd: ()=>setDragging(false),
        onClick: ()=>{
            if (didLongPressRef.current) {
                didLongPressRef.current = false;
                return;
            }
            if (dragging) return;
            if (multiSelectActive) {
                // ✅ status roots : navigation, pas de sélection
                if (statusRoot) {
                    onOpenFolder(folder.fullPath);
                    return;
                }
                toggleItem(folder.fullPath);
            } else {
                onOpenFolder(folder.fullPath);
            }
        },
        onMouseDown: longPress.onMouseDown,
        onMouseUp: longPress.onMouseUp,
        onMouseLeave: longPress.onMouseLeave,
        children: [
            multiSelectActive && !statusRoot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: checkboxRef,
                type: "checkbox",
                checked: tri === 'checked',
                onChange: handleCheckboxChange,
                onMouseDown: (e)=>e.stopPropagation(),
                onPointerDown: (e)=>e.stopPropagation(),
                onClick: (e)=>e.stopPropagation(),
                className: "absolute top-2 left-2 z-10 h-4 w-4 accent-blue-600",
                title: tri === 'indeterminate' ? 'Sélection partielle (indéterminée) — aucune action ne s’applique sur ce dossier' : 'Sélectionner ce dossier'
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFolderItem.tsx",
                lineNumber: 280,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl",
                children: "📂"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFolderItem.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 text-xs truncate text-center px-2 w-full",
                children: folder.name
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFolderItem.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFolderItem.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFileItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GridFileItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$adapters$2f$mappers$2f$explorer$2e$move$2e$mapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/adapters/mappers/explorer.move.mapper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/hooks/useLongPress.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$dnd$2f$dragGhost$2e$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/dnd/dragGhost.manager.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
/**
 * Construit une sélection “actionnable” pour le drag depuis la grid.
 *
 * Spéc demandé : seuls les éléments VALIDÉS (checked) subissent l'action.
 * - Fichiers checked : inclus
 * - Dossiers indéterminés : exclus (ils ne sont jamais “checked” côté file)
 *
 * Ici, comme on est sur un file item, l'objectif est surtout :
 * - drag en multiselect => déplacer la sélection de tous les items cochés visibles
 * - sans inclure les dossiers indéterminés (filtrés dans explorer.move.mapper)
 */ function buildActionableSelection(params) {
    const { selection, visibleNodes, isSelected } = params;
    const excludedArr = Array.from(selection.excluded);
    // 1) roots validés (pas d'exclusion sous eux)
    const validRootsFromStore = [];
    for (const r of selection.roots){
        const hasExcludedUnder = excludedArr.some((ex)=>ex === r || ex.startsWith(`${r}/`));
        if (!hasExcludedUnder) validRootsFromStore.push(r);
    }
    const rootsSet = new Set(validRootsFromStore);
    // 2) ajouter les fichiers cochés visibles
    for (const n of visibleNodes){
        if (n.type !== 'file') continue;
        if (isSelected(n.fullPath)) rootsSet.add(n.fullPath);
    }
    const roots = Array.from(rootsSet);
    const keptExcluded = excludedArr.filter((ex)=>roots.some((r)=>ex === r || ex.startsWith(`${r}/`)));
    return {
        roots,
        excluded: keptExcluded.length ? keptExcluded : undefined
    };
}
function GridFileItem({ file, onSelect, visibleNodes }) {
    const { multiSelectActive, selection, startSelection, toggleItem, isSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])();
    // ✅ sélection implicite (roots/excluded) = vrai même si file est descendant d’un root
    const selected = isSelected(file.fullPath);
    const didLongPressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const longPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLongPress"])(()=>{
        didLongPressRef.current = true;
        startSelection(file.fullPath);
    });
    function toThumb(url) {
        return url.replace('/upload/', '/upload/w_128,h_128,c_fit,dpr_auto,f_auto/');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-content-item": "true",
        className: [
            'relative w-32 h-32 rounded border cursor-pointer flex items-center justify-center',
            'transition-colors duration-150',
            selected ? 'bg-slate-200/70 border-slate-300' : 'bg-gray-50 border-gray-200',
            'hover:shadow-md'
        ].join(' '),
        draggable: true,
        onDragStart: (e)=>{
            setDragging(true);
            // ✅ actionnable = roots validés + fichiers cochés visibles
            const actionable = buildActionableSelection({
                selection,
                visibleNodes,
                isSelected
            });
            // En multiselect, on utilise “selection” uniquement si le file est coché
            // ET si on a au moins 1 root actionnable.
            const shouldUseSelection = multiSelectActive && selected && actionable.roots.length > 0;
            const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$adapters$2f$mappers$2f$explorer$2e$move$2e$mapper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["explorerNodeToDragSource"])(shouldUseSelection ? {
                kind: 'selection',
                selection: {
                    roots: new Set(actionable.roots),
                    excluded: new Set(actionable.excluded ?? [])
                }
            } : {
                kind: 'single',
                node: file
            });
            e.dataTransfer.setData('application/cloudinary', JSON.stringify(payload));
            e.dataTransfer.effectAllowed = 'move';
            const nodesForGhost = shouldUseSelection ? visibleNodes.filter((n)=>actionable.roots.includes(n.fullPath)) : [
                file
            ];
            const previews = nodesForGhost.map((n)=>{
                if (n.type === 'file') {
                    return {
                        kind: 'file',
                        name: n.name,
                        thumbUrl: toThumb(n.url)
                    };
                }
                return {
                    kind: 'folder',
                    name: n.name
                };
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$dnd$2f$dragGhost$2e$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startDragGhost"])({
                e,
                source: payload,
                previews
            });
            // ✅ annule le long press résiduel
            longPress.onDragStart();
        },
        onDragEnd: ()=>setDragging(false),
        onClick: ()=>{
            if (didLongPressRef.current) {
                didLongPressRef.current = false;
                return;
            }
            if (dragging) return;
            if (multiSelectActive) toggleItem(file.fullPath);
            else onSelect?.(file);
        },
        onMouseDown: longPress.onMouseDown,
        onMouseUp: longPress.onMouseUp,
        onMouseLeave: longPress.onMouseLeave,
        children: [
            multiSelectActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                checked: selected,
                onChange: ()=>toggleItem(file.fullPath),
                onMouseDown: (e)=>e.stopPropagation(),
                onPointerDown: (e)=>e.stopPropagation(),
                onClick: (e)=>e.stopPropagation(),
                className: "absolute top-2 left-2 z-10 h-4 w-4 accent-blue-600"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFileItem.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: toThumb(file.url),
                alt: file.name,
                fill: true,
                className: "object-contain"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFileItem.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 w-full bg-white/70 text-xs truncate text-center px-1",
                children: file.name
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFileItem.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFileItem.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFolderItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/cloudinary-finder/SelectedFolderContent/BinGridFolderItem.tsx
__turbopack_context__.s([
    "default",
    ()=>BinGridFolderItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/hooks/useLongPress.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function BinGridFolderItem({ trashId, displayName, canMultiSelect, onOpen, title }) {
    const binMultiSelectActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.binMultiSelectActive);
    const binSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.binSelection);
    const startBinSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.startBinSelection);
    const toggleBinSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.toggleBinSelection);
    const selected = binSelection.has(trashId);
    const showCheckbox = canMultiSelect && binMultiSelectActive;
    const didLongPressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const longPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLongPress"])(()=>{
        if (!canMultiSelect) return;
        didLongPressRef.current = true;
        startBinSelection(trashId);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-content-item": "true",
        title: title,
        className: [
            'relative w-32 h-32 rounded border cursor-pointer flex flex-col items-center justify-center',
            'transition-colors duration-150',
            selected && showCheckbox ? 'bg-slate-200/70 border-slate-300' : 'bg-gray-50 border-gray-200',
            'hover:shadow-md'
        ].join(' '),
        onMouseDown: canMultiSelect ? (e)=>{
            e.stopPropagation();
            longPress.onMouseDown();
        } : undefined,
        onMouseUp: canMultiSelect ? ()=>longPress.onMouseUp() : undefined,
        onMouseLeave: canMultiSelect ? ()=>longPress.onMouseLeave() : undefined,
        onClick: ()=>{
            if (didLongPressRef.current) {
                didLongPressRef.current = false;
                return;
            }
            if (!canMultiSelect) {
                onOpen(trashId);
                return;
            }
            if (binMultiSelectActive) {
                toggleBinSelection(trashId);
                return;
            }
            onOpen(trashId);
        },
        children: [
            showCheckbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                checked: selected,
                onChange: ()=>toggleBinSelection(trashId),
                onMouseDown: (e)=>e.stopPropagation(),
                onClick: (e)=>e.stopPropagation(),
                className: "absolute top-2 left-2 z-10 h-4 w-4 accent-blue-600"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFolderItem.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl",
                children: "📂"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFolderItem.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 text-xs truncate text-center px-2 w-full",
                children: displayName
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFolderItem.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFolderItem.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFileItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BinGridFileItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/hooks/useLongPress.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function toThumb(url) {
    // ✅ même logique que GridFileItem
    return url.replace('/upload/', '/upload/w_128,h_128,c_fit,dpr_auto,f_auto/');
}
function BinGridFileItem({ trashId, displayName, previewUrl, canMultiSelect, title, onOpen }) {
    const binMultiSelectActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.binMultiSelectActive);
    const binSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.binSelection);
    const startBinSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.startBinSelection);
    const toggleBinSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.toggleBinSelection);
    const selected = binSelection.has(trashId);
    const didLongPressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const longPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$hooks$2f$useLongPress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLongPress"])(()=>{
        if (!canMultiSelect) return;
        didLongPressRef.current = true;
        startBinSelection(trashId);
    });
    const showCheckbox = canMultiSelect && binMultiSelectActive;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-content-item": "true",
        title: title,
        className: [
            // ✅ EXACTEMENT le gabarit de GridFileItem
            'relative w-32 h-32 rounded border cursor-pointer flex items-center justify-center',
            'transition-colors duration-150',
            selected && showCheckbox ? 'bg-slate-200/70 border-slate-300' : 'bg-gray-50 border-gray-200',
            'hover:shadow-md'
        ].join(' '),
        onMouseDown: canMultiSelect ? (e)=>{
            e.stopPropagation();
            longPress.onMouseDown();
        } : undefined,
        onMouseUp: canMultiSelect ? ()=>longPress.onMouseUp() : undefined,
        onMouseLeave: canMultiSelect ? ()=>longPress.onMouseLeave() : undefined,
        onClick: ()=>{
            if (didLongPressRef.current) {
                didLongPressRef.current = false;
                return;
            }
            if (!canMultiSelect) {
                onOpen(trashId);
                return;
            }
            if (binMultiSelectActive) {
                toggleBinSelection(trashId);
                return;
            }
            onOpen(trashId);
        },
        children: [
            showCheckbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                checked: selected,
                onChange: ()=>toggleBinSelection(trashId),
                onMouseDown: (e)=>e.stopPropagation(),
                onPointerDown: (e)=>e.stopPropagation(),
                onClick: (e)=>e.stopPropagation(),
                className: "absolute top-2 left-2 z-10 h-4 w-4 accent-blue-600"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFileItem.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: toThumb(previewUrl),
                alt: displayName,
                fill: true,
                className: "object-contain"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFileItem.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl",
                children: "🖼️"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFileItem.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 w-full bg-white/70 text-xs truncate text-center px-1",
                children: displayName
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFileItem.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFileItem.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FolderContentView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$7$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.7/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$guards$2f$finder$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/guards/finder.guards.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$grid$2f$GridFolderItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFolderItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$grid$2f$GridFileItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/grid/GridFileItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trpcClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFolderItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFolderItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFileItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFileItem.tsx [app-ssr] (ecmascript)");
'use client';
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
/**
 * Normalize a path by removing leading and trailing slashes.
 * @param {string} p Path to normalize
 * @returns {string} Normalized path
 */ function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, '');
}
/**
 * Check if a path is inside the bin tree.
 * The bin tree is represented by the "/bin" path.
 * A path is considered inside the bin tree if it ends with "/bin" or contains "/bin/".
 * @param {string} path Path to check
 * @returns {boolean} True if the path is inside the bin tree, false otherwise
 */ function isInBinTree(path) {
    const p = normalizePath(path);
    return p.endsWith('/bin') || p.includes('/bin/');
}
/**
 * Check if a path is the root of the bin tree.
 * The root of the bin tree is represented by the "/bin" path.
 * @param {string} path Path to check
 * @returns {boolean} True if the path is the root of the bin tree, false otherwise
 */ function isBinRootPath(path) {
    return normalizePath(path).endsWith('/bin');
}
/**
 * Returns the app root from a given path.
 * The app root is the first part of the normalized path.
 * If the normalized path is empty, returns an empty string.
 * @param {string} path Path to extract the app root from
 * @returns {string} App root
 */ function getAppRootFromPath(path) {
    return normalizePath(path).split('/')[0] ?? '';
}
function FolderContentView({ folder, onOpenFolder, onSelectFile, onMove, onOpenTrashEntry }) {
    const subFolders = folder.children.filter(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$guards$2f$finder$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFolderNode"]);
    const files = folder.children.filter(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$guards$2f$finder$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFileNode"]);
    // NORMAL
    const multiSelectActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.multiSelectActive);
    const clearNormalSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.clearNormalSelection);
    // BIN
    const binMultiSelectActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.binMultiSelectActive);
    const binSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.binSelection);
    const clearBinSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.clearBinSelection);
    const utils = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].useUtils();
    const inBin = isInBinTree(folder.fullPath);
    const isBinRoot = isBinRootPath(folder.fullPath);
    const canBinMultiSelect = inBin && isBinRoot;
    const appRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getAppRootFromPath(folder.fullPath), [
        folder.fullPath
    ]);
    // Anti-états résiduels
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (inBin && multiSelectActive) clearNormalSelection();
        if (!inBin && binMultiSelectActive) clearBinSelection();
    }, [
        inBin,
        multiSelectActive,
        binMultiSelectActive,
        clearNormalSelection,
        clearBinSelection
    ]);
    // Bin: multiselect uniquement à la racine
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (inBin && !isBinRoot && binMultiSelectActive) {
            clearBinSelection();
        }
    }, [
        inBin,
        isBinRoot,
        binMultiSelectActive,
        clearBinSelection
    ]);
    const listBinQueryInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!inBin) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$7$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skipToken"];
        return {
            appRoot,
            limit: 100,
            cursor: null,
            search: undefined
        };
    }, [
        inBin,
        appRoot
    ]);
    const listBin = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.listBin.useQuery(listBinQueryInput, {
        enabled: inBin,
        refetchOnWindowFocus: false,
        staleTime: 5_000
    });
    const trashItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!inBin) return [];
        return listBin.data?.items ?? [];
    }, [
        inBin,
        listBin.data
    ]);
    // BIN actions
    const selectedTrashIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from(binSelection), [
        binSelection
    ]);
    const hasBinSelection = selectedTrashIds.length > 0;
    const deleteForever = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.deleteForever.useMutation({
        /**
     * On success, invalidate the trash list and the cloudinary folder tree, and clear the bin selection.
     */ onSuccess: async ()=>{
            await utils.trash.listBin.invalidate();
            await utils.cloudinary.getFolderTree.invalidate();
            clearBinSelection();
        },
        onError: (err)=>console.error('[trash.deleteForever] failed:', err)
    });
    /**
   * Vide la corbeille en supprimant définitivement tout son contenu.
   *
   * Affiche un popup de confirmation avant de supprimer.
   *
   * Si la corbeille est déjà vide, affiche un message d'erreur.
   */ async function handleEmptyBin() {
        const ok = confirm('⚠️ Vider la corbeille ?\n\nTout le contenu sera supprimé définitivement.');
        if (!ok) return;
        const allIds = [];
        let cursor = null;
        while(true){
            const res = await utils.trash.listBin.fetch({
                appRoot,
                limit: 100,
                cursor,
                search: undefined
            });
            allIds.push(...res.items.map((x)=>x.id));
            if (!res.nextCursor) break;
            cursor = res.nextCursor;
        }
        if (allIds.length === 0) {
            alert('La corbeille est déjà vide.');
            return;
        }
        deleteForever.mutate({
            appRoot,
            ids: allIds
        });
    }
    async function handleDeleteSelection() {
        if (!hasBinSelection) return;
        const ok = confirm('⚠️ Supprimer définitivement la sélection ?\n\nCette action est irréversible.');
        if (!ok) return;
        deleteForever.mutate({
            appRoot,
            ids: selectedTrashIds
        });
    }
    // Normal (non-bin) drop
    const handleDrop = (e)=>{
        e.preventDefault();
        if (inBin) return;
        const raw = e.dataTransfer.getData('application/cloudinary');
        if (!raw) return;
        const source = JSON.parse(raw);
        const intent = {
            source,
            target: {
                type: 'folder',
                fullPath: folder.fullPath
            }
        };
        onMove(intent);
    };
    const activeMultiSelect = inBin ? binMultiSelectActive : multiSelectActive;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 min-h-full",
        onDragOver: (e)=>e.preventDefault(),
        onDrop: handleDrop,
        onMouseDownCapture: (e)=>{
            // ✅ sortir du multiselect en cliquant dans le vide
            if (!activeMultiSelect) return;
            const el = e.target;
            if (!el) return;
            // ✅ ne pas clear quand on clique sur les contrôles (toolbar etc)
            if (el.closest('[data-no-clear-multiselect="true"]')) return;
            const insideItem = el.closest('[data-content-item="true"]');
            if (insideItem) return;
            if (inBin) clearBinSelection();
            else clearNormalSelection();
        },
        children: inBin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 flex gap-2",
                    "data-no-clear-multiselect": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleEmptyBin,
                            disabled: deleteForever.isPending,
                            className: "px-4 py-2 rounded bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:opacity-50 cursor-pointer",
                            title: "Vider la corbeille",
                            children: "🧹 Vider la corbeille"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this),
                        canBinMultiSelect && binMultiSelectActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDeleteSelection,
                            disabled: !hasBinSelection || deleteForever.isPending,
                            className: "px-4 py-2 rounded bg-red-600/20 border border-red-600 hover:bg-red-600/20 disabled:opacity-50 cursor-pointer",
                            title: "Supprimer la sélection",
                            children: deleteForever.isPending ? 'Suppression…' : `🗑️ Supprimer la sélection (${selectedTrashIds.length})`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                            lineNumber: 265,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                    lineNumber: 254,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium mb-2",
                            children: "Corbeille"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this),
                        listBin.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500 italic",
                            children: "Chargement…"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                            lineNumber: 282,
                            columnNumber: 15
                        }, this) : trashItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-4",
                            children: trashItems.map((it)=>{
                                if (it.kind === 'folder') {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFolderItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        trashId: it.id,
                                        displayName: it.displayName,
                                        canMultiSelect: canBinMultiSelect,
                                        onOpen: (trashId)=>onOpenTrashEntry?.(trashId)
                                    }, it.id, false, {
                                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                                        lineNumber: 288,
                                        columnNumber: 23
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFileItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    trashId: it.id,
                                    displayName: it.displayName,
                                    previewUrl: it.previewUrl ?? null,
                                    canMultiSelect: canBinMultiSelect,
                                    onOpen: (trashId)=>onOpenTrashEntry?.(trashId)
                                }, it.id, false, {
                                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                                    lineNumber: 299,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                            lineNumber: 284,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500 italic",
                            children: "Corbeille vide"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                            lineNumber: 311,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                    lineNumber: 278,
                    columnNumber: 11
                }, this),
                deleteForever.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-600",
                    children: deleteForever.error.message || 'Erreur inconnue'
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                    lineNumber: 316,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                subFolders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium mb-2",
                            children: "Dossiers"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                            lineNumber: 323,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-4",
                            children: subFolders.map((subFolder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$grid$2f$GridFolderItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    folder: subFolder,
                                    onOpenFolder: onOpenFolder,
                                    visibleNodes: folder.children
                                }, subFolder.fullPath, false, {
                                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                                    lineNumber: 326,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                            lineNumber: 324,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                    lineNumber: 322,
                    columnNumber: 13
                }, this),
                files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium mb-2",
                            children: "Images"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                            lineNumber: 339,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-4",
                            children: files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$grid$2f$GridFileItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    file: file,
                                    onSelect: onSelectFile,
                                    visibleNodes: folder.children
                                }, file.fullPath, false, {
                                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                                    lineNumber: 342,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                            lineNumber: 340,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                    lineNumber: 338,
                    columnNumber: 13
                }, this),
                subFolders.length === 0 && files.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 italic",
                    children: "Dossier vide"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
                    lineNumber: 354,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilePreviewSidebar",
    ()=>FilePreviewSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trpcClient.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, '');
}
function parsePath(fullPath) {
    const p = normalizePath(fullPath);
    const parts = p.split('/').filter(Boolean);
    const appRoot = parts[0] ?? '';
    const statusCandidate = parts[1] ?? null;
    const status = statusCandidate === 'pending' || statusCandidate === 'published' || statusCandidate === 'bin' ? statusCandidate : null;
    const base = status ? `${appRoot}/${status}` : appRoot;
    const prefix = `${base}/`;
    const suffix = status && p.startsWith(prefix) ? p.slice(prefix.length) : '';
    return {
        status,
        base,
        suffix
    };
}
function isInBinTree(path) {
    return path.endsWith('/bin') || path.includes('/bin/');
}
function selectLastSegment(input) {
    const v = input.value;
    const i = v.lastIndexOf('/');
    const start = i >= 0 ? i + 1 : 0;
    input.setSelectionRange(start, v.length);
}
function FilePreviewSidebar({ file, onClose, readOnly }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilePreviewSidebarInner, {
        file: file,
        onClose: onClose,
        readOnly: !!readOnly
    }, file.fullPath, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
function FilePreviewSidebarInner({ file, onClose, readOnly }) {
    const utils = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].useUtils();
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>parsePath(file.fullPath), [
        file.fullPath
    ]);
    const [isRenaming, setIsRenaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draftSuffix, setDraftSuffix] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(parsed.suffix);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isRenaming) return;
        const id = setTimeout(()=>{
            if (!inputRef.current) return;
            inputRef.current.focus();
            selectLastSegment(inputRef.current);
        }, 0);
        return ()=>clearTimeout(id);
    }, [
        isRenaming
    ]);
    const fileIsInBinTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isInBinTree(file.fullPath), [
        file.fullPath
    ]);
    const canSecureRename = parsed.status !== null;
    // Hooks tRPC: ok même si readOnly (on ne rend juste pas les boutons)
    const trashToBin = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.trashToBin.useMutation({
        onSuccess: async ()=>{
            await utils.cloudinary.getFolderTree.invalidate();
            await utils.trash.listBin.invalidate();
            onClose();
        },
        onError: (err)=>console.error('[trashToBin] failed:', err)
    });
    const deleteForever = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].cloudinary.deletePicture.useMutation({
        onSuccess: async ()=>{
            await utils.cloudinary.getFolderTree.invalidate();
            onClose();
        },
        onError: (err)=>console.error('[deletePicture] failed:', err)
    });
    const renamePicture = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].cloudinary.renamePicture.useMutation({
        onSuccess: async ()=>{
            await utils.cloudinary.getFolderTree.invalidate();
            setIsRenaming(false);
            onClose();
        },
        onError: (err)=>console.error('[renamePicture] failed:', err)
    });
    const isBusy = trashToBin.isPending || deleteForever.isPending || renamePicture.isPending;
    function startRename() {
        if (readOnly) return;
        if (!canSecureRename) return;
        setDraftSuffix(parsed.suffix);
        setIsRenaming(true);
    }
    function cancelRename() {
        setIsRenaming(false);
        setDraftSuffix(parsed.suffix);
    }
    function applyRename() {
        if (readOnly) return;
        if (!canSecureRename) return;
        const cleanedSuffix = normalizePath(draftSuffix);
        if (!cleanedSuffix) return;
        const fromPublicId = normalizePath(file.fullPath);
        const toPublicId = `${parsed.base}/${cleanedSuffix}`;
        if (toPublicId === fromPublicId) {
            setIsRenaming(false);
            return;
        }
        const ok = confirm(`Renommer/déplacer ce fichier ?\n\n${fromPublicId}\n→\n${toPublicId}\n`);
        if (!ok) return;
        renamePicture.mutate({
            fromPublicId,
            toPublicId
        });
    }
    function sendToBin() {
        if (readOnly) return;
        if (fileIsInBinTree) return;
        trashToBin.mutate({
            appRoot: file.fullPath.split('/')[0] ?? '',
            sources: [
                {
                    kind: 'file',
                    fullPath: file.fullPath
                }
            ]
        });
    }
    function deleteNow() {
        if (readOnly) return;
        const ok = confirm('⚠️ Supprimer définitivement ce fichier ?\n\nCette action est irréversible.');
        if (!ok) return;
        deleteForever.mutate({
            publicId: file.fullPath
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium truncate",
                            title: file.name,
                            children: file.name
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "text-xl",
                        disabled: isBusy,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b flex flex-wrap gap-2",
                children: [
                    !isRenaming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startRename,
                                disabled: isBusy || !canSecureRename,
                                className: "px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50",
                                title: canSecureRename ? 'Renommer / déplacer (édition du suffix après status)' : 'Chemin non conforme (impossible de sécuriser <app>/<status>)',
                                children: "✏️ Renommer"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this),
                            !fileIsInBinTree ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: sendToBin,
                                disabled: isBusy,
                                className: "px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50",
                                children: "🗑 Envoyer vers bin"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                                lineNumber: 203,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: deleteNow,
                                disabled: isBusy,
                                className: "px-3 py-2 rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-50",
                                children: "❌ Supprimer"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                                lineNumber: 211,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500 whitespace-nowrap",
                                        children: [
                                            parsed.base,
                                            "/"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        className: "border rounded px-2 py-2 text-sm w-[520px]",
                                        value: draftSuffix,
                                        onChange: (e)=>setDraftSuffix(e.target.value),
                                        disabled: isBusy,
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') applyRename();
                                            if (e.key === 'Escape') cancelRename();
                                        },
                                        placeholder: "clients/2026/img_001"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: applyRename,
                                disabled: isBusy || !normalizePath(draftSuffix),
                                className: "px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50",
                                children: renamePicture.isPending ? '…' : 'Appliquer'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                                lineNumber: 238,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: cancelRename,
                                disabled: isBusy,
                                className: "px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50",
                                children: "Annuler"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                                lineNumber: 246,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    (trashToBin.error || deleteForever.error || renamePicture.error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-red-600",
                        children: (trashToBin.error?.message ?? deleteForever.error?.message ?? renamePicture.error?.message) || 'Erreur'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                        lineNumber: 257,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: file.url,
                    alt: file.name,
                    width: 1200,
                    height: 1200,
                    className: "object-contain max-h-full"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BinRootView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trpcClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFolderItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFolderItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFileItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFileItem.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function BinRootView({ appRoot, onOpenTrashFolder, onSelectTrashFile }) {
    const utils = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].useUtils();
    const binMultiSelectActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.binMultiSelectActive);
    const binSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.binSelection);
    const clearBinSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.clearBinSelection);
    const selectedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from(binSelection), [
        binSelection
    ]);
    const hasSelection = selectedIds.length > 0;
    const { data, isLoading, isError, error } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.listBin.useQuery({
        appRoot,
        limit: 100,
        cursor: null
    });
    const items = data?.items ?? [];
    const isEmpty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>!isLoading && items.length === 0, [
        isLoading,
        items.length
    ]);
    const deleteForever = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.deleteForever.useMutation({
        onSuccess: async ()=>{
            await utils.trash.listBin.invalidate();
            await utils.cloudinary.getFolderTree.invalidate();
            clearBinSelection();
        },
        onError: (err)=>console.error('[trash.deleteForever] failed:', err)
    });
    async function handleEmptyBin() {
        const ok = confirm('⚠️ Vider la corbeille ?\n\nTout le contenu sera supprimé définitivement.');
        if (!ok) return;
        const allIds = [];
        let cursor = null;
        // eslint-disable-next-line no-constant-condition
        while(true){
            const res = await utils.trash.listBin.fetch({
                appRoot,
                limit: 100,
                cursor,
                search: undefined
            });
            allIds.push(...res.items.map((x)=>x.id));
            if (!res.nextCursor) break;
            cursor = res.nextCursor;
        }
        if (allIds.length === 0) {
            alert('La corbeille est déjà vide.');
            return;
        }
        deleteForever.mutate({
            appRoot,
            ids: allIds
        });
    }
    async function handleDeleteSelection() {
        if (!hasSelection) return;
        const ok = confirm('⚠️ Supprimer définitivement la sélection ?\n\nCette action est irréversible.');
        if (!ok) return;
        deleteForever.mutate({
            appRoot,
            ids: selectedIds
        });
    }
    const isBusy = deleteForever.isPending;
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-gray-500",
        children: "Chargement de la corbeille…"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
        lineNumber: 101,
        columnNumber: 25
    }, this);
    if (isError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-red-600",
        children: [
            "Erreur : ",
            error?.message ?? 'inconnue'
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
        lineNumber: 102,
        columnNumber: 23
    }, this);
    if (isEmpty) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-gray-500 italic",
        children: "Corbeille vide"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
        lineNumber: 103,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 min-h-full",
        onMouseDownCapture: (e)=>{
            // ✅ click dans le vide => sortir du multiselect bin
            if (!binMultiSelectActive) return;
            const el = e.target;
            if (!el) return;
            // ✅ ne pas clear si clic sur toolbar
            if (el.closest('[data-no-clear-multiselect="true"]')) return;
            const insideItem = el.closest('[data-content-item="true"]');
            if (!insideItem) clearBinSelection();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                "data-no-clear-multiselect": "true",
                children: binMultiSelectActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleDeleteSelection,
                    disabled: !hasSelection || isBusy,
                    className: "px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 cursor-pointer",
                    title: !hasSelection ? 'Aucune sélection' : 'Supprimer définitivement la sélection',
                    children: isBusy ? 'Suppression…' : `❌ Supprimer définitivement (${selectedIds.length})`
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleEmptyBin,
                    disabled: isBusy,
                    className: "px-4 py-2 rounded bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:opacity-50 cursor-pointer",
                    title: "Vider la corbeille",
                    children: "🧹 Vider la corbeille"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-4",
                children: items.map((it)=>{
                    const title = it.previousPath;
                    if (it.kind === 'folder') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            title: title,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFolderItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                trashId: it.id,
                                displayName: it.displayName,
                                canMultiSelect: true,
                                onOpen: (trashId)=>onOpenTrashFolder({
                                        trashId,
                                        displayName: it.displayName
                                    })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
                                lineNumber: 152,
                                columnNumber: 17
                            }, this)
                        }, it.id, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        title: title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFileItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            trashId: it.id,
                            displayName: it.displayName,
                            previewUrl: it.previewUrl ?? null,
                            canMultiSelect: true,
                            onOpen: (trashId)=>onSelectTrashFile({
                                    id: trashId,
                                    name: it.displayName,
                                    url: it.previewUrl,
                                    previousPath: it.previousPath
                                })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
                            lineNumber: 164,
                            columnNumber: 15
                        }, this)
                    }, it.id, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            deleteForever.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-600",
                children: deleteForever.error.message || 'Erreur inconnue'
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/trash/navigator/TrashFolderView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrashFolderView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trpcClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFolderItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFolderItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFileItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinGridFileItem.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function TrashFolderView({ appRoot, trashId, relativePath, onOpenRelativeFolder, onSelectTrashFile }) {
    const { data, isLoading, isError, error } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.readTrashFolder.useQuery({
        appRoot,
        trashId,
        relativePath: relativePath || undefined
    });
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-gray-500",
        children: "Chargement…"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/navigator/TrashFolderView.tsx",
        lineNumber: 40,
        columnNumber: 25
    }, this);
    if (isError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-red-600",
        children: [
            "Erreur : ",
            error?.message ?? 'inconnue'
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/navigator/TrashFolderView.tsx",
        lineNumber: 41,
        columnNumber: 23
    }, this);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-gray-500",
        children: "Vide"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/navigator/TrashFolderView.tsx",
        lineNumber: 42,
        columnNumber: 21
    }, this);
    const children = data.folder.children;
    if (!children || children.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-500 italic",
            children: "Dossier vide"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/navigator/TrashFolderView.tsx",
            lineNumber: 47,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 gap-4",
        children: children.map((n)=>{
            if (n.type === 'folder') {
                const next = relativePath ? `${relativePath}/${n.name}` : n.name;
                const title = n.meta?.previousPath ?? n.fullPath;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFolderItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    trashId: n.fullPath,
                    displayName: n.name,
                    canMultiSelect: false,
                    title: title,
                    onOpen: ()=>onOpenRelativeFolder(next)
                }, n.fullPath, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/navigator/TrashFolderView.tsx",
                    lineNumber: 58,
                    columnNumber: 13
                }, this);
            }
            const title = n.meta?.previousPath ?? n.fullPath;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinGridFileItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                trashId: n.fullPath,
                displayName: n.name,
                previewUrl: n.url,
                canMultiSelect: false,
                title: title,
                onOpen: ()=>{
                    onSelectTrashFile({
                        name: n.name,
                        url: n.url,
                        previousPath: n.meta?.previousPath ?? ''
                    });
                }
            }, n.fullPath, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/navigator/TrashFolderView.tsx",
                lineNumber: 72,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/trash/navigator/TrashFolderView.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/utils/mapping/injectStatusRoots.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "injectStatusRoots",
    ()=>injectStatusRoots
]);
const STATUSES = [
    "pending",
    "published",
    "bin"
];
const APP_SHORT_NAME = ("TURBOPACK compile-time value", "AKFC") || 'my-app';
function injectStatusRoots(tree) {
    const roots = [];
    for (const status of STATUSES){
        const existing = tree.children.find((child)=>child.type === "folder" && child.name === status);
        if (existing) {
            // Dossier réel existant
            roots.push(existing);
        } else {
            // Dossier virtuel
            const virtualNode = {
                type: "virtual-folder",
                name: status,
                fullPath: `${APP_SHORT_NAME}/${status}`,
                status
            };
            roots.push(virtualNode);
        }
    }
    return roots;
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BreadCrumb",
    ()=>BreadCrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trpcClient.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, '');
}
function parsePath(fullPath) {
    const p = normalizePath(fullPath);
    const parts = p.split('/').filter(Boolean);
    const appRoot = parts[0] ?? '';
    const statusCandidate = parts[1] ?? null;
    const status = statusCandidate === 'pending' || statusCandidate === 'published' || statusCandidate === 'bin' ? statusCandidate : null;
    const base = status ? `${appRoot}/${status}` : appRoot;
    const prefix = `${base}/`;
    const suffix = status && p.startsWith(prefix) ? p.slice(prefix.length) : '';
    return {
        appRoot,
        status,
        base,
        suffix
    };
}
function selectLastSegment(input) {
    const v = input.value;
    const i = v.lastIndexOf('/');
    const start = i >= 0 ? i + 1 : 0;
    input.setSelectionRange(start, v.length);
}
function BreadCrumb({ path, onNavigate }) {
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>parsePath(path), [
        path
    ]);
    // ✅ Remount key : si path change, l'éditeur se réinitialise sans useEffect setState
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BreadCrumbInner, {
        path: path,
        parsed: parsed,
        onNavigate: onNavigate
    }, path, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
function BreadCrumbInner({ path, parsed, onNavigate }) {
    const utils = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].useUtils();
    const crumbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const p = normalizePath(path);
        const parts = p.split('/').filter(Boolean);
        const out = [];
        let acc = '';
        for (const part of parts){
            acc = acc ? `${acc}/${part}` : part;
            out.push({
                label: part,
                fullPath: acc
            });
        }
        return out;
    }, [
        path
    ]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draftSuffix, setDraftSuffix] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(parsed.suffix);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // focus + sélection : OK dans un effect (pas de setState)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!editing) return;
        const id = setTimeout(()=>{
            if (!inputRef.current) return;
            inputRef.current.focus();
            selectLastSegment(inputRef.current);
        }, 0);
        return ()=>clearTimeout(id);
    }, [
        editing
    ]);
    const renameFolderPrefix = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].cloudinary.renameFolderPrefix.useMutation({
        onSuccess: async (_data, variables)=>{
            await utils.cloudinary.getFolderTree.invalidate();
            setEditing(false);
            onNavigate(variables.toPrefix);
        },
        onError: (err)=>console.error('[renameFolderPrefix] failed:', err)
    });
    const isBusy = renameFolderPrefix.isPending;
    const isStatusRoot = parsed.status !== null && normalizePath(path) === parsed.base;
    // ✅ NO EDIT IN BIN (root + sous-dossiers)
    const isInBin = parsed.status === 'bin';
    const canEdit = Boolean(parsed.status) && !isInBin;
    function startEdit() {
        if (!parsed.status) return;
        if (isInBin) return; // ✅ lock
        if (isStatusRoot) return;
        setDraftSuffix(parsed.suffix); // init au clic
        setEditing(true);
    }
    function cancelEdit() {
        setEditing(false);
        setDraftSuffix(parsed.suffix);
    }
    function applyEdit() {
        if (!parsed.status) return;
        if (isInBin) return; // ✅ lock (sécurité)
        const cleaned = normalizePath(draftSuffix);
        if (!cleaned) return;
        const fromPrefix = normalizePath(path);
        const toPrefix = `${parsed.base}/${cleaned}`;
        if (fromPrefix === toPrefix) {
            setEditing(false);
            return;
        }
        const ok = confirm(`Renommer/déplacer ce dossier ?\n\n${fromPrefix}\n→\n${toPrefix}\n`);
        if (!ok) return;
        renameFolderPrefix.mutate({
            fromPrefix,
            toPrefix
        });
    }
    // ✅ Quand editing=true : on remplace TOUT le breadcrumb par l'éditeur
    if (parsed.status && editing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 flex items-center justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500 whitespace-nowrap",
                            children: [
                                parsed.base,
                                "/"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            className: "border rounded px-2 py-2 text-sm w-[520px]",
                            value: draftSuffix,
                            onChange: (e)=>setDraftSuffix(e.target.value),
                            disabled: isBusy,
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter') applyEdit();
                                if (e.key === 'Escape') cancelEdit();
                            },
                            placeholder: "ex: clients/2026"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: applyEdit,
                            disabled: isBusy || !normalizePath(draftSuffix),
                            className: "px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50",
                            children: isBusy ? '…' : 'Appliquer'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: cancelEdit,
                            disabled: isBusy,
                            className: "px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50",
                            children: "Annuler"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this);
    }
    // ✅ Mode normal : breadcrumb (+ bouton ✏️ seulement si canEdit)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 flex items-center justify-between gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 flex-wrap min-w-0",
                children: crumbs.map((c, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-sm text-blue-600 hover:underline truncate",
                                onClick: ()=>onNavigate(c.fullPath),
                                disabled: isBusy,
                                title: c.fullPath,
                                children: c.label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            idx < crumbs.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                                lineNumber: 202,
                                columnNumber: 41
                            }, this)
                        ]
                    }, c.fullPath, true, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: startEdit,
                disabled: isBusy || isStatusRoot,
                className: "px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50",
                title: isStatusRoot ? 'Renommer la racine pending/published est désactivé' : 'Modifier le chemin du dossier',
                children: "✏️"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/tree/AppTreeWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppTreeWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function AppTreeWrapper({ appName, children }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                /**
         * ✅ IMPORTANT :
         * marque cette ligne comme un "tree item"
         * sinon un handler "clic dans le vide => clearSelection" peut te faire sortir du multiselect
         * quand tu cliques ici.
         */ "data-tree-item": "true",
                className: "flex items-center gap-1 px-2 py-1 cursor-pointer select-none font-medium",
                onClick: ()=>setOpen((v)=>!v),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-4 text-center",
                        children: open ? '▼' : '▶'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/AppTreeWrapper.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "📦 ",
                            appName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/AppTreeWrapper.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/AppTreeWrapper.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/AppTreeWrapper.tsx",
                lineNumber: 36,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/AppTreeWrapper.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MultiSelectSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trpcClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, '');
}
function isBinRoot(path, appRoot) {
    return normalizePath(path) === `${appRoot}/bin`;
}
function MultiSelectSidebar({ currentPath, currentFolderHasContent }) {
    const utils = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].useUtils();
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.selection);
    const binSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.binSelection);
    const clearNormalSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.clearNormalSelection);
    const clearBinSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.clearBinSelection);
    const appRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>normalizePath(currentPath).split('/')[0] ?? '', [
        currentPath
    ]);
    const inBinRoot = isBinRoot(currentPath, appRoot);
    // -----------------------------
    // BIN ROOT ACTIONS (2 radios)
    // -----------------------------
    const selectedTrashIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from(binSelection), [
        binSelection
    ]);
    const hasBinSelection = selectedTrashIds.length > 0;
    const [binAction, setBinAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('restore');
    const restoreFromBin = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.restoreFromBin.useMutation({
        onSuccess: async ()=>{
            await utils.trash.listBin.invalidate();
            await utils.cloudinary.getFolderTree.invalidate();
            clearBinSelection();
        },
        onError: (err)=>console.error('[restoreFromBin] failed:', err)
    });
    const deleteForever = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.deleteForever.useMutation({
        onSuccess: async ()=>{
            await utils.trash.listBin.invalidate();
            await utils.cloudinary.getFolderTree.invalidate();
            clearBinSelection();
        },
        onError: (err)=>console.error('[deleteForever] failed:', err)
    });
    async function applyBinAction() {
        if (!hasBinSelection) return;
        if (binAction === 'restore') {
            restoreFromBin.mutate({
                appRoot,
                ids: selectedTrashIds
            });
            return;
        }
        const ok = confirm('⚠️ Supprimer définitivement la sélection ?\n\nCette action est irréversible.');
        if (!ok) return;
        deleteForever.mutate({
            appRoot,
            ids: selectedTrashIds
        });
    }
    // -----------------------------
    // NORMAL STATUS ACTIONS
    // -----------------------------
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const roots = Array.from(selection.roots);
        const excluded = Array.from(selection.excluded);
        return {
            roots,
            excluded: excluded.length ? excluded : undefined
        };
    }, [
        selection
    ]);
    const hasSelection = payload.roots.length > 0;
    const [targetStatus, setTargetStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('pending');
    const statuses = [
        'pending',
        'published',
        'bin'
    ];
    const move = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].cloudinary.move.useMutation({
        onSuccess: async ()=>{
            await utils.cloudinary.getFolderTree.invalidate();
            clearNormalSelection();
        },
        onError: (err)=>console.error('[move selection] failed:', err)
    });
    const trashToBin = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.trashToBin.useMutation({
        onSuccess: async ()=>{
            await utils.cloudinary.getFolderTree.invalidate();
            await utils.trash.listBin.invalidate();
            clearNormalSelection();
        },
        onError: (err)=>console.error('[trashToBin selection] failed:', err)
    });
    function handleValidateStatus() {
        if (!hasSelection) return;
        if (targetStatus === 'bin') {
            trashToBin.mutate({
                appRoot,
                sources: [
                    {
                        kind: 'selection',
                        roots: payload.roots
                    }
                ]
            });
            return;
        }
        move.mutate({
            source: {
                type: 'selection',
                roots: payload.roots,
                excluded: payload.excluded
            },
            target: {
                type: 'virtual-folder',
                status: targetStatus
            }
        });
    }
    const isBusy = move.isPending || trashToBin.isPending || restoreFromBin.isPending || deleteForever.isPending;
    // -----------------------------
    // RENDER
    // -----------------------------
    if (inBinRoot) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-semibold text-lg",
                    children: "Corbeille"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 cursor-pointer select-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "bin-action",
                                    checked: binAction === 'restore',
                                    disabled: isBusy,
                                    onChange: ()=>setBinAction('restore')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: isBusy ? 'opacity-60' : '',
                                    children: "♻️ Restaurer"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 cursor-pointer select-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "bin-action",
                                    checked: binAction === 'deleteForever',
                                    disabled: isBusy,
                                    onChange: ()=>setBinAction('deleteForever')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: isBusy ? 'opacity-60' : '',
                                    children: "❌ Supprimer définitivement"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: applyBinAction,
                    disabled: !hasBinSelection || isBusy,
                    className: "w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50",
                    title: !hasBinSelection ? 'Sélectionne au moins 1 élément' : '',
                    children: isBusy ? '…' : 'Appliquer'
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: clearBinSelection,
                    disabled: isBusy,
                    className: "w-full bg-gray-200 text-gray-800 py-2 rounded disabled:opacity-50",
                    children: "Annuler"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                (restoreFromBin.error || deleteForever.error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-600",
                    children: (restoreFromBin.error?.message ?? deleteForever.error?.message) || 'Erreur inconnue'
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-lg",
                children: "Modifier le statut"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: statuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 cursor-pointer select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: "status",
                                checked: targetStatus === s,
                                disabled: isBusy,
                                onChange: ()=>setTargetStatus(s)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: isBusy ? 'opacity-60' : '',
                                children: s
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s, true, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleValidateStatus,
                disabled: !hasSelection || isBusy || !currentFolderHasContent && hasSelection,
                className: "w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50",
                children: move.isPending || trashToBin.isPending ? 'Déplacement…' : 'Valider'
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: clearNormalSelection,
                disabled: isBusy,
                className: "w-full bg-gray-200 text-gray-800 py-2 rounded disabled:opacity-50",
                children: "Annuler"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            (move.error || trashToBin.error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-600",
                children: (move.error?.message ?? trashToBin.error?.message) || 'Erreur inconnue'
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/components/ui/LoadingOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function LoadingOverlay({ show, label = 'Opération en cours…' }) {
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 pointer-events-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg bg-white px-5 py-4 shadow-lg flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-5 w-5 rounded-full border-2 border-gray-300 border-t-gray-800 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ui/LoadingOverlay.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-gray-800",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ui/LoadingOverlay.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/ui/LoadingOverlay.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/LoadingOverlay.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinderLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/trpcClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$tree$2f$TreeView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/tree/TreeView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$content$2f$FolderContentView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/content/FolderContentView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$preview$2f$FilePreviewSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/preview/FilePreviewSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinRootView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/trash/bin/BinRootView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$navigator$2f$TrashFolderView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/trash/navigator/TrashFolderView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$utils$2f$mapping$2f$injectStatusRoots$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/utils/mapping/injectStatusRoots.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$breadcrumb$2f$BreadCrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/breadcrumb/BreadCrumb.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$tree$2f$AppTreeWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/tree/AppTreeWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$cloudinary$2f$move$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/server/cloudinary/move.guards.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/state/selection/useSelectionStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$multiSelect$2f$MultiSelectSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$LoadingOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/LoadingOverlay.tsx [app-ssr] (ecmascript)");
'use client';
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
;
const APP_SHORT_NAME = ("TURBOPACK compile-time value", "AKFC") || 'my-app';
const INITIAL_PATH = `${APP_SHORT_NAME}`;
/**
 * Normalize a path by removing leading and trailing slashes.
 * @param {string} p Path to normalize
 * @returns {string} Normalized path
 */ function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, '');
}
/**
 * Recursively search for a folder by its full path.
 * @param {FolderNode} node The node to start searching from
 * @param {string} path The full path of the folder to find
 * @returns {FolderNode | null} The found folder or null if not found
 */ function findFolderByPath(node, path) {
    if (!node) return null;
    if (node.fullPath === path) return node;
    for (const child of node.children){
        if (child.type === 'folder') {
            const found = findFolderByPath(child, path);
            if (found) return found;
        }
    }
    return null;
}
/**
 * Checks if an element is editable.
 * This function checks if an element is an input, textarea, select, or if it has the contentEditable attribute set to true.
 * @param {EventTarget | null} el The element to check
 * @returns {boolean} True if the element is editable, false otherwise
 */ function isEditableTarget(el) {
    if (!el || !(el instanceof HTMLElement)) return false;
    const tag = el.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
    if (el.isContentEditable) return true;
    return false;
}
function FinderLayout() {
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_PATH);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [trashCtx, setTrashCtx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [trashPreviewMeta, setTrashPreviewMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const multiSelectActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.multiSelectActive);
    const clearNormalSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.clearNormalSelection);
    const binMultiSelectActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.binMultiSelectActive);
    const clearBinSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$state$2f$selection$2f$useSelectionStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectionStore"])((s)=>s.clearBinSelection);
    const treeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const explorerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const multiSelectSidebarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { data: tree, isLoading, isError } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].cloudinary.getFolderTree.useQuery({
        path: APP_SHORT_NAME
    });
    const utils = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].useUtils();
    const move = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].cloudinary.move.useMutation({
        /**
     * Invalidate the folder tree and clear the normal and bin selections on success.
     */ onSuccess: async ()=>{
            await utils.cloudinary.getFolderTree.invalidate();
            clearNormalSelection();
            clearBinSelection();
        },
        /**
     * Called when the move operation fails.
     * @param {Error} err The error that occurred while moving the item.
     */ onError: (err)=>{
            console.error('[move] failed:', err);
        }
    });
    const trashToBin = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$trpcClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].trash.trashToBin.useMutation({
        /**
     * Invalidate the folder tree and clear the normal and bin selections on success.
     * It is called after a successful move operation.
     */ onSuccess: async ()=>{
            await utils.cloudinary.getFolderTree.invalidate();
            await utils.trash.listBin.invalidate();
            clearNormalSelection();
            clearBinSelection();
        },
        onError: (err)=>console.error('[trashToBin] failed:', err)
    });
    const showGlobalSpinner = move.isPending || trashToBin.isPending;
    const statusRoots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!tree) return [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$utils$2f$mapping$2f$injectStatusRoots$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectStatusRoots"])(tree);
    }, [
        tree
    ]);
    const isVirtualPath = currentPath.startsWith('__virtual__/');
    const isBinRootPath = normalizePath(currentPath) === `${APP_SHORT_NAME}/bin`;
    const currentFolder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!tree || isVirtualPath || trashCtx) return null;
        return findFolderByPath(tree, currentPath);
    }, [
        currentPath,
        isVirtualPath,
        tree,
        trashCtx
    ]);
    const currentFolderHasContent = !!currentFolder && currentFolder.children.length > 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const active = multiSelectActive || binMultiSelectActive;
        if (!active) return;
        /**
     * Function to clear the selection when the user clicks outside of the tree,
     * explorer and sidebar.
     * @param {MouseEvent} event The click event.
     */ function handleClickOutside(event) {
            const target = event.target;
            if (!target) return;
            const inTree = !!treeRef.current?.contains(target);
            const inExplorer = !!explorerRef.current?.contains(target);
            const inSidebar = !!multiSelectSidebarRef.current?.contains(target);
            if (!inTree && !inExplorer && !inSidebar) {
                clearNormalSelection();
                clearBinSelection();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, [
        multiSelectActive,
        binMultiSelectActive,
        clearNormalSelection,
        clearBinSelection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const active = multiSelectActive || binMultiSelectActive;
        if (!active) return;
        /**
     * Clear the normal and bin selections when the Escape key is pressed.
     * Does not clear the selections if the target is an editable element.
     */ function onKeyDown(e) {
            if (e.key !== 'Escape') return;
            if (isEditableTarget(e.target)) return;
            e.preventDefault();
            clearNormalSelection();
            clearBinSelection();
        }
        window.addEventListener('keydown', onKeyDown);
        return ()=>window.removeEventListener('keydown', onKeyDown);
    }, [
        multiSelectActive,
        binMultiSelectActive,
        clearNormalSelection,
        clearBinSelection
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Chargement…"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
        lineNumber: 203,
        columnNumber: 25
    }, this);
    if (isError || !tree) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Erreur"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
        lineNumber: 204,
        columnNumber: 32
    }, this);
    /**
   * Handle the open event of a folder/file.
   * It sets the current path, clears the selected file, trash preview and context,
   * and clears the normal and bin selections.
   * @param {string} path The path of the folder/file to open.
   */ function handleOpen(path) {
        setCurrentPath(path);
        setSelectedFile(null);
        setTrashPreviewMeta(null);
        setTrashCtx(null);
        clearNormalSelection();
        clearBinSelection();
    }
    /**
   * Handles a move intent.
   * If the move is not allowed, it logs a warning and does nothing.
   * If the target is a virtual folder with status 'bin', it moves the source to the trash.
   * If the source is a file, it moves the file to the trash.
   * If the source is a folder, it moves the folder to the trash.
   * If the source is a selection, it moves the selection to the trash.
   * If the target is not a virtual folder with status 'bin', it moves the source to the target.
   * In all cases, it clears the selected file, trash preview and context.
   * @param {MoveIntent} intent The move intent to handle.
   */ function handleMove(intent) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$server$2f$cloudinary$2f$move$2e$guards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canMove"])(intent.source, intent.target)) {
            console.warn('[DnD] Move not allowed', intent);
            return;
        }
        if (intent.target.type === 'virtual-folder' && intent.target.status === 'bin') {
            const sources = [];
            if (intent.source.type === 'file') sources.push({
                kind: 'file',
                fullPath: intent.source.fullPath
            });
            if (intent.source.type === 'folder') sources.push({
                kind: 'folder',
                fullPath: intent.source.fullPath
            });
            if (intent.source.type === 'selection') sources.push({
                kind: 'selection',
                roots: intent.source.roots
            });
            trashToBin.mutate({
                appRoot: APP_SHORT_NAME,
                sources
            });
            setSelectedFile(null);
            setTrashPreviewMeta(null);
            return;
        }
        move.mutate(intent);
        setSelectedFile(null);
        setTrashPreviewMeta(null);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$LoadingOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                show: showGlobalSpinner,
                label: "Opération en cours…"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full border rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        ref: treeRef,
                        className: "w-72 border-r overflow-auto flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            onMouseDown: (e)=>{
                                if (!(multiSelectActive || binMultiSelectActive)) return;
                                if (e.target === e.currentTarget) {
                                    clearNormalSelection();
                                    clearBinSelection();
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$tree$2f$AppTreeWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                appName: APP_SHORT_NAME,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$tree$2f$TreeView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TreeView"], {
                                    roots: statusRoots,
                                    currentPath: currentPath,
                                    onOpen: handleOpen,
                                    onMove: handleMove,
                                    appRoot: APP_SHORT_NAME
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: explorerRef,
                        className: "flex-1 overflow-auto p-4 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$breadcrumb$2f$BreadCrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadCrumb"], {
                                path: currentPath,
                                onNavigate: (path)=>{
                                    setCurrentPath(path);
                                    setSelectedFile(null);
                                    setTrashPreviewMeta(null);
                                    const normalized = normalizePath(path);
                                    const binRoot = `${APP_SHORT_NAME}/bin`;
                                    if (trashCtx) {
                                        if (normalized === binRoot) {
                                            setTrashCtx(null);
                                        } else {
                                            const base = `${binRoot}/${trashCtx.displayName}`;
                                            if (normalized === base) {
                                                setTrashCtx({
                                                    ...trashCtx,
                                                    relativePath: ''
                                                });
                                            } else if (normalized.startsWith(`${base}/`)) {
                                                const rel = normalized.slice(base.length + 1);
                                                setTrashCtx({
                                                    ...trashCtx,
                                                    relativePath: rel
                                                });
                                            }
                                        }
                                    }
                                    clearNormalSelection();
                                    clearBinSelection();
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            isVirtualPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500 italic",
                                children: "Vide"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this) : isBinRootPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$bin$2f$BinRootView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                appRoot: APP_SHORT_NAME,
                                onOpenTrashFolder: ({ trashId, displayName })=>{
                                    setTrashCtx({
                                        trashId,
                                        displayName,
                                        relativePath: ''
                                    });
                                    setCurrentPath(`${APP_SHORT_NAME}/bin/${displayName}`);
                                    setSelectedFile(null);
                                    setTrashPreviewMeta(null);
                                    clearNormalSelection();
                                    clearBinSelection();
                                },
                                onSelectTrashFile: ({ name, url, previousPath })=>{
                                    if (!url) {
                                        alert('Preview indisponible (URL manquante).');
                                        return;
                                    }
                                    setSelectedFile({
                                        type: 'file',
                                        name,
                                        fullPath: `${APP_SHORT_NAME}/bin/${name}`,
                                        url
                                    });
                                    setTrashPreviewMeta({
                                        previousPath
                                    });
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this) : trashCtx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$trash$2f$navigator$2f$TrashFolderView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                appRoot: APP_SHORT_NAME,
                                trashId: trashCtx.trashId,
                                relativePath: trashCtx.relativePath,
                                onOpenRelativeFolder: (nextRel)=>{
                                    setTrashCtx({
                                        ...trashCtx,
                                        relativePath: nextRel
                                    });
                                    setCurrentPath(`${APP_SHORT_NAME}/bin/${trashCtx.displayName}/${nextRel}`);
                                    setSelectedFile(null);
                                    setTrashPreviewMeta(null);
                                    clearNormalSelection();
                                    clearBinSelection();
                                },
                                onSelectTrashFile: (file)=>{
                                    setSelectedFile({
                                        type: 'file',
                                        name: file.name,
                                        fullPath: `${APP_SHORT_NAME}/bin/${trashCtx.displayName}/${trashCtx.relativePath}/${file.name}`,
                                        url: file.url
                                    });
                                    setTrashPreviewMeta({
                                        previousPath: file.previousPath
                                    });
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this) : currentFolder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$content$2f$FolderContentView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                folder: currentFolder,
                                onOpenFolder: (path)=>{
                                    if (multiSelectActive) return;
                                    setCurrentPath(path);
                                    setSelectedFile(null);
                                    setTrashPreviewMeta(null);
                                },
                                onSelectFile: (file)=>{
                                    if (multiSelectActive) return;
                                    setSelectedFile(file);
                                    setTrashPreviewMeta(null);
                                },
                                onMove: handleMove
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500",
                                children: "Dossier vide"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    selectedFile && !multiSelectActive && !binMultiSelectActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "w-96 border-l bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$preview$2f$FilePreviewSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilePreviewSidebar"], {
                                file: selectedFile,
                                readOnly: !!trashPreviewMeta,
                                onClose: ()=>{
                                    setSelectedFile(null);
                                    setTrashPreviewMeta(null);
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this),
                            trashPreviewMeta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-4 text-xs text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium text-gray-700",
                                        children: "Provenance"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                        lineNumber: 398,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate",
                                        title: trashPreviewMeta.previousPath,
                                        children: trashPreviewMeta.previousPath
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                        lineNumber: 399,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 397,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                        lineNumber: 386,
                        columnNumber: 11
                    }, this),
                    (multiSelectActive || binMultiSelectActive) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        ref: multiSelectSidebarRef,
                        className: "w-80 border-l bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$multiSelect$2f$MultiSelectSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            currentPath: currentPath,
                            currentFolderHasContent: currentFolderHasContent
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                            lineNumber: 409,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/app/admin/dashboard/pictures/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$layout$2f$FinderLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function GalleryPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold mb-6",
                children: "Gestionnaire de galerie"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/admin/dashboard/pictures/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$layout$2f$FinderLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/admin/dashboard/pictures/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/admin/dashboard/pictures/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_web_src_1b97f63b._.js.map