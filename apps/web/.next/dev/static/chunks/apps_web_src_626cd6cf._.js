(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/features/cloudinary-finder/ui/tree/AppTreeWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppTreeWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function AppTreeWrapper({ appName, children }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                /**
         * ✅ IMPORTANT :
         * marque cette ligne comme un "tree item"
         * sinon un handler "clic dans le vide => clearSelection" peut te faire sortir du multiselect
         * quand tu cliques ici.
         */ "data-tree-item": "true",
                className: "flex items-center gap-1 px-2 py-1 cursor-pointer select-none font-medium",
                onClick: ()=>setOpen((v)=>!v),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-4 text-center",
                        children: open ? '▼' : '▶'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/tree/AppTreeWrapper.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(AppTreeWrapper, "dVkDIfRb5RN4FjtonjBYYwpg89o=");
_c = AppTreeWrapper;
var _c;
__turbopack_context__.k.register(_c, "AppTreeWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MultiSelectSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/core/trpc/trpcClient'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/features/cloudinary-finder/state/selection/useSelectionStore'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const utils = trpc.useUtils();
    const selection = useSelectionStore({
        "MultiSelectSidebar.useSelectionStore[selection]": (s)=>s.selection
    }["MultiSelectSidebar.useSelectionStore[selection]"]);
    const binSelection = useSelectionStore({
        "MultiSelectSidebar.useSelectionStore[binSelection]": (s)=>s.binSelection
    }["MultiSelectSidebar.useSelectionStore[binSelection]"]);
    const clearNormalSelection = useSelectionStore({
        "MultiSelectSidebar.useSelectionStore[clearNormalSelection]": (s)=>s.clearNormalSelection
    }["MultiSelectSidebar.useSelectionStore[clearNormalSelection]"]);
    const clearBinSelection = useSelectionStore({
        "MultiSelectSidebar.useSelectionStore[clearBinSelection]": (s)=>s.clearBinSelection
    }["MultiSelectSidebar.useSelectionStore[clearBinSelection]"]);
    const appRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MultiSelectSidebar.useMemo[appRoot]": ()=>normalizePath(currentPath).split('/')[0] ?? ''
    }["MultiSelectSidebar.useMemo[appRoot]"], [
        currentPath
    ]);
    const inBinRoot = isBinRoot(currentPath, appRoot);
    // -----------------------------
    // BIN ROOT ACTIONS (2 radios)
    // -----------------------------
    const selectedTrashIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MultiSelectSidebar.useMemo[selectedTrashIds]": ()=>Array.from(binSelection)
    }["MultiSelectSidebar.useMemo[selectedTrashIds]"], [
        binSelection
    ]);
    const hasBinSelection = selectedTrashIds.length > 0;
    const [binAction, setBinAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('restore');
    const restoreFromBin = trpc.trash.restoreFromBin.useMutation({
        onSuccess: {
            "MultiSelectSidebar.useMutation[restoreFromBin]": async ()=>{
                await utils.trash.listBin.invalidate();
                await utils.cloudinary.getFolderTree.invalidate();
                clearBinSelection();
            }
        }["MultiSelectSidebar.useMutation[restoreFromBin]"],
        onError: {
            "MultiSelectSidebar.useMutation[restoreFromBin]": (err)=>console.error('[restoreFromBin] failed:', err)
        }["MultiSelectSidebar.useMutation[restoreFromBin]"]
    });
    const deleteForever = trpc.trash.deleteForever.useMutation({
        onSuccess: {
            "MultiSelectSidebar.useMutation[deleteForever]": async ()=>{
                await utils.trash.listBin.invalidate();
                await utils.cloudinary.getFolderTree.invalidate();
                clearBinSelection();
            }
        }["MultiSelectSidebar.useMutation[deleteForever]"],
        onError: {
            "MultiSelectSidebar.useMutation[deleteForever]": (err)=>console.error('[deleteForever] failed:', err)
        }["MultiSelectSidebar.useMutation[deleteForever]"]
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
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MultiSelectSidebar.useMemo[payload]": ()=>{
            const roots = Array.from(selection.roots);
            const excluded = Array.from(selection.excluded);
            return {
                roots,
                excluded: excluded.length ? excluded : undefined
            };
        }
    }["MultiSelectSidebar.useMemo[payload]"], [
        selection
    ]);
    const hasSelection = payload.roots.length > 0;
    const [targetStatus, setTargetStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('pending');
    const statuses = [
        'pending',
        'published',
        'bin'
    ];
    const move = trpc.cloudinary.move.useMutation({
        onSuccess: {
            "MultiSelectSidebar.useMutation[move]": async ()=>{
                await utils.cloudinary.getFolderTree.invalidate();
                clearNormalSelection();
            }
        }["MultiSelectSidebar.useMutation[move]"],
        onError: {
            "MultiSelectSidebar.useMutation[move]": (err)=>console.error('[move selection] failed:', err)
        }["MultiSelectSidebar.useMutation[move]"]
    });
    const trashToBin = trpc.trash.trashToBin.useMutation({
        onSuccess: {
            "MultiSelectSidebar.useMutation[trashToBin]": async ()=>{
                await utils.cloudinary.getFolderTree.invalidate();
                await utils.trash.listBin.invalidate();
                clearNormalSelection();
            }
        }["MultiSelectSidebar.useMutation[trashToBin]"],
        onError: {
            "MultiSelectSidebar.useMutation[trashToBin]": (err)=>console.error('[trashToBin selection] failed:', err)
        }["MultiSelectSidebar.useMutation[trashToBin]"]
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-semibold text-lg",
                    children: "Corbeille"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 cursor-pointer select-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 cursor-pointer select-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: clearBinSelection,
                    disabled: isBusy,
                    className: "w-full bg-gray-200 text-gray-800 py-2 rounded disabled:opacity-50",
                    children: "Annuler"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                (restoreFromBin.error || deleteForever.error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold text-lg",
                children: "Modifier le statut"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: statuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 cursor-pointer select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleValidateStatus,
                disabled: !hasSelection || isBusy || !currentFolderHasContent && hasSelection,
                className: "w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50",
                children: move.isPending || trashToBin.isPending ? 'Déplacement…' : 'Valider'
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: clearNormalSelection,
                disabled: isBusy,
                className: "w-full bg-gray-200 text-gray-800 py-2 rounded disabled:opacity-50",
                children: "Annuler"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            (move.error || trashToBin.error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(MultiSelectSidebar, "URxtClC7rGO2jrtsoOoatt8eTZw=", false, function() {
    return [
        trpc.useUtils,
        useSelectionStore,
        useSelectionStore,
        useSelectionStore,
        useSelectionStore
    ];
});
_c = MultiSelectSidebar;
var _c;
__turbopack_context__.k.register(_c, "MultiSelectSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinderLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/core/trpc/trpcClient'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/features/cloudinary-finder/ui/tree/TreeView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/features/cloudinary-finder/ui/content/FolderContentView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/features/cloudinary-finder/ui/preview/FilePreviewSidebar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/features/cloudinary-finder/ui/trash/bin/BinRootView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/features/cloudinary-finder/ui/trash/navigator/TrashFolderView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/features/cloudinary-finder/utils/mapping/injectStatusRoots'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/features/cloudinary-finder/ui/breadcrumb/BreadCrumb'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$tree$2f$AppTreeWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/tree/AppTreeWrapper.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@workspace/backend/modules/cloudinary/move.guards'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/features/cloudinary-finder/state/selection/useSelectionStore'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$multiSelect$2f$MultiSelectSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/multiSelect/MultiSelectSidebar.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/LoadingOverlay'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
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
const APP_SHORT_NAME = ("TURBOPACK compile-time value", "AKFC") || 'my-app';
const INITIAL_PATH = `${APP_SHORT_NAME}`;
function normalizePath(p) {
    return p.replace(/^\/+|\/+$/g, '');
}
function findFolderByPath(node, path) {
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
function isEditableTarget(el) {
    if (!el || !(el instanceof HTMLElement)) return false;
    const tag = el.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
    if (el.isContentEditable) return true;
    return false;
}
function FinderLayout() {
    _s();
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_PATH);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [trashCtx, setTrashCtx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [trashPreviewMeta, setTrashPreviewMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const multiSelectActive = useSelectionStore({
        "FinderLayout.useSelectionStore[multiSelectActive]": (s)=>s.multiSelectActive
    }["FinderLayout.useSelectionStore[multiSelectActive]"]);
    const clearNormalSelection = useSelectionStore({
        "FinderLayout.useSelectionStore[clearNormalSelection]": (s)=>s.clearNormalSelection
    }["FinderLayout.useSelectionStore[clearNormalSelection]"]);
    const binMultiSelectActive = useSelectionStore({
        "FinderLayout.useSelectionStore[binMultiSelectActive]": (s)=>s.binMultiSelectActive
    }["FinderLayout.useSelectionStore[binMultiSelectActive]"]);
    const clearBinSelection = useSelectionStore({
        "FinderLayout.useSelectionStore[clearBinSelection]": (s)=>s.clearBinSelection
    }["FinderLayout.useSelectionStore[clearBinSelection]"]);
    const treeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const explorerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const multiSelectSidebarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { data: tree, isLoading, isError } = trpc.cloudinary.getFolderTree.useQuery({
        path: APP_SHORT_NAME
    });
    const utils = trpc.useUtils();
    const move = trpc.cloudinary.move.useMutation({
        onSuccess: {
            "FinderLayout.useMutation[move]": async ()=>{
                await utils.cloudinary.getFolderTree.invalidate();
                clearNormalSelection();
                clearBinSelection();
            }
        }["FinderLayout.useMutation[move]"],
        onError: {
            "FinderLayout.useMutation[move]": (err)=>{
                console.error('[move] failed:', err);
            }
        }["FinderLayout.useMutation[move]"]
    });
    const trashToBin = trpc.trash.trashToBin.useMutation({
        onSuccess: {
            "FinderLayout.useMutation[trashToBin]": async ()=>{
                await utils.cloudinary.getFolderTree.invalidate();
                await utils.trash.listBin.invalidate();
                clearNormalSelection();
                clearBinSelection();
            }
        }["FinderLayout.useMutation[trashToBin]"],
        onError: {
            "FinderLayout.useMutation[trashToBin]": (err)=>console.error('[trashToBin] failed:', err)
        }["FinderLayout.useMutation[trashToBin]"]
    });
    const showGlobalSpinner = move.isPending || trashToBin.isPending;
    const statusRoots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FinderLayout.useMemo[statusRoots]": ()=>{
            if (!tree) return [];
            return injectStatusRoots(tree);
        }
    }["FinderLayout.useMemo[statusRoots]"], [
        tree
    ]);
    const isVirtualPath = currentPath.startsWith('__virtual__/');
    const isBinRootPath = normalizePath(currentPath) === `${APP_SHORT_NAME}/bin`;
    const currentFolder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FinderLayout.useMemo[currentFolder]": ()=>{
            if (!tree || isVirtualPath || trashCtx) return null;
            return findFolderByPath(tree, currentPath);
        }
    }["FinderLayout.useMemo[currentFolder]"], [
        currentPath,
        isVirtualPath,
        tree,
        trashCtx
    ]);
    const currentFolderHasContent = !!currentFolder && currentFolder.children.length > 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinderLayout.useEffect": ()=>{
            const active = multiSelectActive || binMultiSelectActive;
            if (!active) return;
            function handleClickOutside(event) {
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
            return ({
                "FinderLayout.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["FinderLayout.useEffect"];
        }
    }["FinderLayout.useEffect"], [
        multiSelectActive,
        binMultiSelectActive,
        clearNormalSelection,
        clearBinSelection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinderLayout.useEffect": ()=>{
            const active = multiSelectActive || binMultiSelectActive;
            if (!active) return;
            function onKeyDown(e) {
                if (e.key !== 'Escape') return;
                if (isEditableTarget(e.target)) return;
                e.preventDefault();
                clearNormalSelection();
                clearBinSelection();
            }
            window.addEventListener('keydown', onKeyDown);
            return ({
                "FinderLayout.useEffect": ()=>window.removeEventListener('keydown', onKeyDown)
            })["FinderLayout.useEffect"];
        }
    }["FinderLayout.useEffect"], [
        multiSelectActive,
        binMultiSelectActive,
        clearNormalSelection,
        clearBinSelection
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Chargement…"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
        lineNumber: 157,
        columnNumber: 25
    }, this);
    if (isError || !tree) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Erreur"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
        lineNumber: 158,
        columnNumber: 32
    }, this);
    function handleOpen(path) {
        setCurrentPath(path);
        setSelectedFile(null);
        setTrashPreviewMeta(null);
        setTrashCtx(null);
        clearNormalSelection();
        clearBinSelection();
    }
    function handleMove(intent) {
        if (!canMove(intent.source, intent.target)) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingOverlay, {
                show: showGlobalSpinner,
                label: "Opération en cours…"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full border rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        ref: treeRef,
                        className: "w-72 border-r overflow-auto flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            onMouseDown: (e)=>{
                                if (!(multiSelectActive || binMultiSelectActive)) return;
                                if (e.target === e.currentTarget) {
                                    clearNormalSelection();
                                    clearBinSelection();
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$tree$2f$AppTreeWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                appName: APP_SHORT_NAME,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TreeView, {
                                    roots: statusRoots,
                                    currentPath: currentPath,
                                    onOpen: handleOpen,
                                    onMove: handleMove,
                                    appRoot: APP_SHORT_NAME
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: explorerRef,
                        className: "flex-1 overflow-auto p-4 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BreadCrumb, {
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
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            isVirtualPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500 italic",
                                children: "Vide"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this) : isBinRootPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BinRootView, {
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
                                onSelectTrashFile: ({ name, publicId, previousPath })=>{
                                    if (!publicId) {
                                        alert('Preview indisponible (publicId manquant).');
                                        return;
                                    }
                                    setSelectedFile({
                                        type: 'file',
                                        name,
                                        fullPath: `${APP_SHORT_NAME}/bin/${name}`,
                                        publicId
                                    });
                                    setTrashPreviewMeta({
                                        previousPath
                                    });
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this) : trashCtx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashFolderView, {
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
                                        publicId: file.publicId
                                    });
                                    setTrashPreviewMeta({
                                        previousPath: file.previousPath
                                    });
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this) : currentFolder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FolderContentView, {
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
                                lineNumber: 309,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500",
                                children: "Dossier vide"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    selectedFile && !multiSelectActive && !binMultiSelectActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "w-96 border-l bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilePreviewSidebar, {
                                file: selectedFile,
                                readOnly: !!trashPreviewMeta,
                                onClose: ()=>{
                                    setSelectedFile(null);
                                    setTrashPreviewMeta(null);
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            trashPreviewMeta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-4 text-xs text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium text-gray-700",
                                        children: "Provenance"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                        lineNumber: 342,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate",
                                        title: trashPreviewMeta.previousPath,
                                        children: trashPreviewMeta.previousPath
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                        lineNumber: 343,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                                lineNumber: 341,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    (multiSelectActive || binMultiSelectActive) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        ref: multiSelectSidebarRef,
                        className: "w-80 border-l bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$multiSelect$2f$MultiSelectSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            currentPath: currentPath,
                            currentFolderHasContent: currentFolderHasContent
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(FinderLayout, "gW1XWXZEcG/VX5MC9QOEIN/vD0E=", false, function() {
    return [
        useSelectionStore,
        useSelectionStore,
        useSelectionStore,
        useSelectionStore,
        trpc.useUtils
    ];
});
_c = FinderLayout;
var _c;
__turbopack_context__.k.register(_c, "FinderLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/admin/dashboard/pictures/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.94.2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$layout$2f$FinderLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/cloudinary-finder/ui/layout/FinderLayout.tsx [app-client] (ecmascript)");
'use client';
;
;
function GalleryPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold mb-6",
                children: "Gestionnaire de galerie"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/admin/dashboard/pictures/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_sass$40$1$2e$94$2e$2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$cloudinary$2d$finder$2f$ui$2f$layout$2f$FinderLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
_c = GalleryPage;
var _c;
__turbopack_context__.k.register(_c, "GalleryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_626cd6cf._.js.map