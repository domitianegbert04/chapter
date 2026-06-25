(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/design-system.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colors",
    ()=>colors,
    "glass",
    ()=>glass,
    "radii",
    ()=>radii,
    "shadows",
    ()=>shadows,
    "transitions",
    ()=>transitions,
    "typography",
    ()=>typography
]);
const colors = {
    bg: {
        primary: '#0D0D0B',
        surface: '#171715',
        elevated: '#20201C',
        overlay: 'rgba(13, 13, 11, 0.85)'
    },
    accent: {
        DEFAULT: '#C8A26A',
        hover: '#D8B483',
        muted: 'rgba(200, 162, 106, 0.12)',
        glow: 'rgba(200, 162, 106, 0.3)'
    },
    success: '#7FA88A',
    danger: '#C77C7C',
    warning: '#D4A574',
    text: {
        primary: '#F5F2EB',
        secondary: '#A8A39A',
        muted: '#6D675E',
        inverse: '#0D0D0B'
    },
    border: {
        light: '#2a2a27',
        subtle: '#1e1e1b'
    },
    mood: {
        cozy: '#C8A26A',
        dark: '#8B7355',
        hopeful: '#7FA88A',
        philosophical: '#8B8BC8',
        fantasy: '#A88BC8',
        historical: '#C8A88B',
        romance: '#C88B8B',
        classic: '#8BA8C8',
        thriller: '#C8A88B'
    }
};
const typography = {
    fontFamily: {
        sans: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)'
    },
    sizes: {
        hero: '3rem',
        h1: '2.25rem',
        h2: '1.75rem',
        h3: '1.25rem',
        body: '1rem',
        small: '0.875rem',
        caption: '0.75rem'
    },
    lineHeight: {
        tight: '1.1',
        normal: '1.4',
        relaxed: '1.6'
    },
    weight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
    }
};
const radii = {
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    '2xl': '28px',
    full: '9999px'
};
const shadows = {
    card: '0 8px 32px rgba(0, 0, 0, 0.3)',
    cardHover: '0 16px 48px rgba(0, 0, 0, 0.4)',
    elevated: '0 4px 24px rgba(0, 0, 0, 0.2)',
    inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
};
const transitions = {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    spring: '400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
};
const glass = {
    background: 'rgba(23, 23, 21, 0.75)',
    backdrop: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.06)'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/design-system.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const sidebarItems = [
    {
        id: "home",
        label: "Home",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 8,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "9 22 9 12 15 12 15 22"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 8,
                    columnNumber: 240
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Sidebar.tsx",
            lineNumber: 8,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "discover",
        label: "Discover",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 9,
                    columnNumber: 189
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "21",
                    x2: "16.65",
                    y2: "16.65"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 9,
                    columnNumber: 221
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Sidebar.tsx",
            lineNumber: 9,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "library",
        label: "Library",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 10,
                    columnNumber: 187
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 10,
                    columnNumber: 231
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Sidebar.tsx",
            lineNumber: 10,
            columnNumber: 44
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "community",
        label: "Community",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 11,
                    columnNumber: 191
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 11,
                    columnNumber: 245
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 11,
                    columnNumber: 275
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 11,
                    columnNumber: 314
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Sidebar.tsx",
            lineNumber: 11,
            columnNumber: 48
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "challenges",
        label: "Challenges",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            }, void 0, false, {
                fileName: "[project]/app/components/Sidebar.tsx",
                lineNumber: 12,
                columnNumber: 193
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/Sidebar.tsx",
            lineNumber: 12,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "quotes",
        label: "Quotes",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 13,
                    columnNumber: 185
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 13,
                    columnNumber: 340
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Sidebar.tsx",
            lineNumber: 13,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "statistics",
        label: "Statistics",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "20",
                    x2: "18",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 14,
                    columnNumber: 193
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 14,
                    columnNumber: 233
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 14,
                    columnNumber: 272
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Sidebar.tsx",
            lineNumber: 14,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "settings",
        label: "Settings",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 15,
                    columnNumber: 189
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                }, void 0, false, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 15,
                    columnNumber: 221
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Sidebar.tsx",
            lineNumber: 15,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Sidebar({ activeItem = "home", onItemChange, streak = 0 }) {
    _s();
    const [hoveredItem, setHoveredItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 z-40",
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface,
            borderRight: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].border.subtle}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-5 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-xl flex items-center justify-center",
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-bold",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.inverse
                            },
                            children: "C"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Sidebar.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Sidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-bold",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                        },
                        children: "Chapter"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Sidebar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Sidebar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 px-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium uppercase tracking-wider",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                            },
                            children: "Your Space"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Sidebar.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Sidebar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    sidebarItems.map((item)=>{
                        const isActive = activeItem === item.id;
                        const isHovered = hoveredItem === item.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                            className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 relative",
                            onClick: ()=>onItemChange?.(item.id),
                            onMouseEnter: ()=>setHoveredItem(item.id),
                            onMouseLeave: ()=>setHoveredItem(null),
                            whileTap: {
                                scale: 0.98
                            },
                            children: [
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    className: "absolute inset-0 rounded-xl",
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.muted
                                    },
                                    layoutId: "sidebarActive",
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 28
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10",
                                    style: {
                                        color: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT : isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                                    },
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10 text-sm font-medium",
                                    style: {
                                        color: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary : isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary
                                    },
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    className: "absolute right-3 w-1.5 h-1.5 rounded-full",
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT
                                    },
                                    layoutId: "sidebarIndicator",
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar.tsx",
                                    lineNumber: 48,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/app/components/Sidebar.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Sidebar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-4",
                    style: {
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: "🔥"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 57
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                                    },
                                    children: "Reading Streak"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 92
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Sidebar.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-baseline gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl font-bold",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.mono
                                    },
                                    children: streak
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary
                                    },
                                    children: "days"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Sidebar.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 h-1.5 rounded-full overflow-hidden",
                            style: {
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full rounded-full",
                                style: {
                                    width: `${Math.min(streak / 30 * 100, 100)}%`,
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/Sidebar.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Sidebar.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs mt-2",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                            },
                            children: [
                                30 - streak,
                                " days to monthly goal"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Sidebar.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Sidebar.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pb-4",
                style: {
                    borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].border.subtle}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold",
                            style: {
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.inverse
                            },
                            children: "A"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Sidebar.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                                    },
                                    children: "Alex"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 38
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                                    },
                                    children: "@alexreads"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Sidebar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 120
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Sidebar.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Sidebar.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Sidebar.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Sidebar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "1uXs46A7iQzBzVzkML5IJ5VwsdI=");
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/FloatingNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/design-system.ts [app-client] (ecmascript)");
"use client";
;
;
;
const navItems = [
    {
        id: "home",
        label: "Home",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                }, void 0, false, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "9 22 9 12 15 12 15 22"
                }, void 0, false, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/FloatingNav.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "search",
        label: "Search",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }, void 0, false, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "21",
                    x2: "16.65",
                    y2: "16.65"
                }, void 0, false, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/FloatingNav.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "library",
        label: "Library",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                }, void 0, false, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                }, void 0, false, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/FloatingNav.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "community",
        label: "Community",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/FloatingNav.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function FloatingNav({ activeTab = "home", onTabChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 lg:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            className: "flex items-center gap-1 px-2 py-2",
            style: {
                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface,
                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].border.light}`,
                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radii"]["2xl"],
                boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadows"].elevated
            },
            initial: {
                y: 100,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: 0.2
            },
            children: navItems.map((item)=>{
                const isActive = activeTab === item.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                    className: "relative flex items-center gap-2 px-3 py-2.5 rounded-full outline-none",
                    onClick: ()=>onTabChange?.(item.id),
                    whileTap: {
                        scale: 0.95
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                className: "absolute inset-0 rounded-full",
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT
                                },
                                layoutId: "activeNavBg",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/FloatingNav.tsx",
                                lineNumber: 82,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/FloatingNav.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                            className: "relative z-10",
                            animate: {
                                color: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.inverse : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                            },
                            transition: {
                                duration: 0.2
                            },
                            children: item.icon
                        }, void 0, false, {
                            fileName: "[project]/app/components/FloatingNav.tsx",
                            lineNumber: 93,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                className: "relative z-10 text-sm font-medium",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.inverse
                                },
                                initial: {
                                    opacity: 0,
                                    width: 0
                                },
                                animate: {
                                    opacity: 1,
                                    width: "auto"
                                },
                                exit: {
                                    opacity: 0,
                                    width: 0
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30
                                },
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/app/components/FloatingNav.tsx",
                                lineNumber: 102,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/FloatingNav.tsx",
                            lineNumber: 100,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/app/components/FloatingNav.tsx",
                    lineNumber: 74,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/app/components/FloatingNav.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/FloatingNav.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = FloatingNav;
var _c;
__turbopack_context__.k.register(_c, "FloatingNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ContinueReadingHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContinueReadingHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/design-system.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ContinueReadingHero({ cover, title, author, currentPage, totalPages, moods, streak, onProgressUpdate }) {
    _s();
    const [localPage, setLocalPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentPage);
    const [showCelebration, setShowCelebration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const progress = localPage / totalPages * 100;
    const pagesLeft = totalPages - localPage;
    const estMin = Math.round(pagesLeft * 1.5);
    const hours = Math.floor(estMin / 60);
    const minutes = estMin % 60;
    const moodColors = {
        cozy: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.cozy,
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.dark,
        hopeful: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.hopeful,
        philosophical: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.philosophical,
        fantasy: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.fantasy,
        historical: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.historical,
        romance: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.romance,
        classic: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.classic,
        thriller: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.thriller
    };
    const handleSliderClick = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, x / rect.width * 100));
        const newPage = Math.round(percentage / 100 * totalPages);
        setLocalPage(newPage);
        onProgressUpdate?.(newPage);
        if (newPage === totalPages) {
            setShowCelebration(true);
            setTimeout(()=>setShowCelebration(false), 3000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "relative overflow-hidden",
                style: {
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radii"].xl,
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface,
                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadows"].card
                },
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full lg:w-2/5 aspect-[2/3] lg:aspect-auto overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].img, {
                                    src: cover,
                                    alt: title,
                                    className: "w-full h-full object-cover",
                                    style: {
                                        borderRadius: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radii"].xl} 0 0 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radii"].xl}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    style: {
                                        background: `linear-gradient(to right, transparent 50%, ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface} 100%)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full",
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated,
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].border.light}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: "🔥"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.mono
                                            },
                                            children: streak
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                                            },
                                            children: "day streak"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 p-6 lg:p-8 flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium uppercase tracking-wider mb-3",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT
                                    },
                                    children: "Continue Reading"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl lg:text-3xl font-bold leading-tight mb-2",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                                    },
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base mb-4",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary
                                    },
                                    children: author
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mb-6",
                                    children: moods.map((mood)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-3 py-1 rounded-full text-xs font-medium",
                                            style: {
                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated,
                                                color: moodColors[mood.toLowerCase()] || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                                border: `1px solid ${moodColors[mood.toLowerCase()] || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT}40`
                                            },
                                            children: mood
                                        }, mood, false, {
                                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-end mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary
                                                    },
                                                    children: "Your Progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.mono
                                                    },
                                                    children: [
                                                        Math.round(progress),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-3 rounded-full cursor-pointer",
                                            style: {
                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated
                                            },
                                            onClick: handleSliderClick,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                    className: "absolute inset-y-0 left-0 rounded-full",
                                                    style: {
                                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT
                                                    },
                                                    animate: {
                                                        width: `${progress}%`
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 25
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                    className: "absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2",
                                                    style: {
                                                        left: `calc(${progress}% - 12px)`,
                                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface,
                                                        boxShadow: `0 0 12px ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT}40`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    25,
                                                    50,
                                                    75
                                                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full",
                                                        style: {
                                                            left: `${m}%`,
                                                            background: progress >= m ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated,
                                                            transform: `translate(-50%, -50%)`
                                                        }
                                                    }, m, false, {
                                                        fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted,
                                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.mono
                                                    },
                                                    children: [
                                                        "Page ",
                                                        localPage,
                                                        " / ",
                                                        totalPages
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                                                    },
                                                    children: [
                                                        pagesLeft,
                                                        " pages left · ",
                                                        hours > 0 ? `${hours}h ` : "",
                                                        minutes,
                                                        "m est."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                                            className: "flex-1 px-6 py-3 rounded-full text-sm font-semibold",
                                            style: {
                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.inverse
                                            },
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            children: "Update Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                                            className: "px-6 py-3 rounded-full text-sm font-semibold",
                                            style: {
                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                                            },
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            children: "Save Quote"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ContinueReadingHero.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showCelebration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    className: "absolute inset-0 flex items-center justify-center pointer-events-none z-10",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            className: "text-center",
                            initial: {
                                scale: 0.5,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 0.5,
                                opacity: 0
                            },
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl mb-4",
                                    children: "🎉"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-2",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                                    },
                                    children: "Book Completed!"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary
                                    },
                                    children: [
                                        "Your streak is now ",
                                        streak + 1,
                                        " days"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ContinueReadingHero.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        [
                            ...Array(12)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                className: "absolute w-2 h-2 rounded-full",
                                style: {
                                    background: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].success,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.hopeful
                                    ][i % 4]
                                },
                                initial: {
                                    x: 0,
                                    y: 0,
                                    opacity: 1
                                },
                                animate: {
                                    x: (Math.random() - 0.5) * 400,
                                    y: (Math.random() - 0.5) * 400 - 100,
                                    opacity: 0,
                                    rotate: Math.random() * 360
                                },
                                transition: {
                                    duration: 1.5,
                                    delay: i * 0.05,
                                    ease: "easeOut"
                                }
                            }, i, false, {
                                fileName: "[project]/app/components/ContinueReadingHero.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ContinueReadingHero.tsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ContinueReadingHero.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ContinueReadingHero.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(ContinueReadingHero, "l3lDazWJJvT8PtXAT7jp5U3DV6U=");
_c = ContinueReadingHero;
var _c;
__turbopack_context__.k.register(_c, "ContinueReadingHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/BookCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/design-system.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BookCard({ cover, title, author, rating = 0, moods = [], currentPage = 0, totalPages = 0, friendsReading = 0, isFavorite = false, onFavorite, onBookmark, size = "md" }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const progress = totalPages > 0 ? currentPage / totalPages * 100 : 0;
    const sizeConfig = {
        sm: {
            width: 140,
            coverHeight: 180
        },
        md: {
            width: 200,
            coverHeight: 260
        },
        lg: {
            width: 280,
            coverHeight: 360
        }
    };
    const { width, coverHeight } = sizeConfig[size];
    const moodColors = {
        cozy: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.cozy,
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.dark,
        hopeful: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.hopeful,
        philosophical: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.philosophical,
        fantasy: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.fantasy,
        historical: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.historical,
        romance: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.romance,
        classic: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.classic,
        thriller: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.thriller
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: "relative cursor-pointer select-none flex-shrink-0",
        style: {
            width
        },
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        whileHover: {
            y: -4
        },
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden",
            style: {
                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radii"].lg,
                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface,
                boxShadow: isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadows"].cardHover : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadows"].card,
                transition: `box-shadow ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].normal}`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    style: {
                        height: coverHeight
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].img, {
                            src: cover,
                            alt: title,
                            className: "w-full h-full object-cover",
                            style: {
                                borderRadius: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radii"].lg} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radii"].lg} 0 0`
                            },
                            animate: {
                                scale: isHovered ? 1.03 : 1
                            },
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/BookCard.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            style: {
                                background: `linear-gradient(to bottom, transparent 40%, ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface} 100%)`
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/BookCard.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                            className: "absolute top-3 right-3 p-2 rounded-full",
                            style: {
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated,
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].border.light}`
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            onClick: (e)=>{
                                e.stopPropagation();
                                onFavorite?.();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: isFavorite ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger : "none",
                                stroke: isFavorite ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary,
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/BookCard.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/BookCard.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/BookCard.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                            className: "absolute top-3 left-3 p-2 rounded-full",
                            style: {
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated,
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].border.light}`
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            onClick: (e)=>{
                                e.stopPropagation();
                                onBookmark?.();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary,
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/BookCard.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/BookCard.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/BookCard.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        currentPage > 0 && totalPages > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 right-0 px-4 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-1 rounded-full overflow-hidden",
                                    style: {
                                        background: "rgba(255,255,255,0.1)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                        className: "absolute inset-y-0 left-0 rounded-full",
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT
                                        },
                                        initial: {
                                            width: 0
                                        },
                                        animate: {
                                            width: `${progress}%`
                                        },
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeOut"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/BookCard.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/BookCard.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted,
                                                fontFamily: "var(--font-geist-mono)"
                                            },
                                            children: [
                                                currentPage,
                                                " / ",
                                                totalPages
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/BookCard.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                                fontFamily: "var(--font-geist-mono)"
                                            },
                                            children: [
                                                Math.round(progress),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/BookCard.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/BookCard.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/BookCard.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/BookCard.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 pb-4 pt-2",
                    style: {
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold leading-tight truncate",
                            style: {
                                fontSize: size === "lg" ? "1.125rem" : "0.9375rem",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/BookCard.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 truncate text-sm",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary
                            },
                            children: author
                        }, void 0, false, {
                            fileName: "[project]/app/components/BookCard.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        rating > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex",
                                    children: [
                                        1,
                                        2,
                                        3,
                                        4,
                                        5
                                    ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: star <= Math.floor(rating) ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT : "none",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                            strokeWidth: "1.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/BookCard.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this)
                                        }, star, false, {
                                            fileName: "[project]/app/components/BookCard.tsx",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/BookCard.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs ml-1",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted,
                                        fontFamily: "var(--font-geist-mono)"
                                    },
                                    children: rating.toFixed(1)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/BookCard.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/BookCard.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this),
                        moods.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5 mt-2",
                            children: moods.slice(0, 3).map((mood)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 rounded-full text-xs font-medium",
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated,
                                        color: moodColors[mood.toLowerCase()] || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                        border: `1px solid ${moodColors[mood.toLowerCase()] || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT}40`
                                    },
                                    children: mood
                                }, mood, false, {
                                    fileName: "[project]/app/components/BookCard.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/BookCard.tsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this),
                        friendsReading > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex -space-x-1.5",
                                    children: [
                                        ...Array(Math.min(friendsReading, 3))
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 rounded-full border-2",
                                            style: {
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface,
                                                background: `hsl(${30 + i * 40}, 60%, 55%)`
                                            }
                                        }, i, false, {
                                            fileName: "[project]/app/components/BookCard.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/BookCard.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                                    },
                                    children: [
                                        friendsReading,
                                        " friend",
                                        friendsReading > 1 ? "s" : "",
                                        " reading"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/BookCard.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/BookCard.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/BookCard.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/BookCard.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/BookCard.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(BookCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = BookCard;
var _c;
__turbopack_context__.k.register(_c, "BookCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/MoodCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoodCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$BookCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/BookCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/design-system.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MoodCarousel({ mood, books }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollXProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        container: containerRef
    });
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollXProgress, [
        0,
        1
    ], [
        0,
        1
    ]);
    const moodColors = {
        cozy: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.cozy,
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.dark,
        hopeful: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.hopeful,
        philosophical: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.philosophical,
        fantasy: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.fantasy,
        historical: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.historical,
        romance: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.romance,
        classic: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.classic,
        thriller: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.thriller
    };
    const moodColor = moodColors[mood.toLowerCase()] || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-8 rounded-full",
                                style: {
                                    background: moodColor
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/MoodCarousel.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                                },
                                children: mood
                            }, void 0, false, {
                                fileName: "[project]/app/components/MoodCarousel.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2.5 py-0.5 rounded-full text-xs font-medium",
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated,
                                    color: moodColor,
                                    border: `1px solid ${moodColor}40`
                                },
                                children: [
                                    books.length,
                                    " books"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/MoodCarousel.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MoodCarousel.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block w-32 h-1 rounded-full overflow-hidden",
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            className: "h-full rounded-full",
                            style: {
                                background: moodColor,
                                scaleX,
                                transformOrigin: "left"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/MoodCarousel.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/MoodCarousel.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/MoodCarousel.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 cursor-grab active:cursor-grabbing",
                style: {
                    scrollSnapType: "x mandatory"
                },
                children: books.map((book, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        style: {
                            scrollSnapAlign: "start"
                        },
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: index * 0.05,
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$BookCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ...book,
                            size: "md"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MoodCarousel.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, book.id, false, {
                        fileName: "[project]/app/components/MoodCarousel.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/MoodCarousel.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/MoodCarousel.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(MoodCarousel, "o0OdkFNsNa9zKYTdULBlEj2m0N8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = MoodCarousel;
var _c;
__turbopack_context__.k.register(_c, "MoodCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/StatsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/design-system.ts [app-client] (ecmascript)");
"use client";
;
;
;
function StatsPanel({ booksRead, pagesRead, readingTime, palette }) {
    const stats = [
        {
            value: String(booksRead),
            label: "Books",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT
        },
        {
            value: pagesRead.toLocaleString(),
            label: "Pages",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].success
        },
        {
            value: readingTime,
            label: "Hours",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mood.classic
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "rounded-3xl p-6",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].border.subtle}`
                },
                initial: {
                    opacity: 0,
                    x: 20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    delay: 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-4",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                        },
                        children: "This Month"
                    }, void 0, false, {
                        fileName: "[project]/app/components/StatsPanel.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                className: "flex items-center gap-4",
                                initial: {
                                    opacity: 0,
                                    x: 10
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.3 + index * 0.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-10 h-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-10 h-10 -rotate-90",
                                            viewBox: "0 0 40 40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "20",
                                                    cy: "20",
                                                    r: "16",
                                                    fill: "none",
                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated,
                                                    strokeWidth: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StatsPanel.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "20",
                                                    cy: "20",
                                                    r: "16",
                                                    fill: "none",
                                                    stroke: stat.color,
                                                    strokeWidth: "3",
                                                    strokeDasharray: `${(index + 1) * 60} ${100 - (index + 1) * 60}`,
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StatsPanel.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StatsPanel.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/StatsPanel.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-bold",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary,
                                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.mono
                                                },
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/StatsPanel.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                                                },
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/StatsPanel.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/StatsPanel.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/app/components/StatsPanel.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/StatsPanel.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/StatsPanel.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "rounded-3xl p-6",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].border.subtle}`
                },
                initial: {
                    opacity: 0,
                    x: 20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    delay: 0.4,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-4",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                        },
                        children: "Your Palette"
                    }, void 0, false, {
                        fileName: "[project]/app/components/StatsPanel.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 flex-wrap",
                        children: palette.map((color, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                className: "w-10 h-10 rounded-full",
                                style: {
                                    background: color
                                },
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                transition: {
                                    delay: 0.5 + i * 0.05,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20
                                }
                            }, i, false, {
                                fileName: "[project]/app/components/StatsPanel.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/StatsPanel.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/StatsPanel.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                className: "w-full py-4 rounded-3xl text-base font-semibold flex items-center justify-center gap-2",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.inverse
                },
                whileHover: {
                    scale: 1.02
                },
                whileTap: {
                    scale: 0.98
                },
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                            }, void 0, false, {
                                fileName: "[project]/app/components/StatsPanel.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "16 6 12 2 8 6"
                            }, void 0, false, {
                                fileName: "[project]/app/components/StatsPanel.tsx",
                                lineNumber: 60,
                                columnNumber: 65
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "2",
                                x2: "12",
                                y2: "15"
                            }, void 0, false, {
                                fileName: "[project]/app/components/StatsPanel.tsx",
                                lineNumber: 60,
                                columnNumber: 100
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/StatsPanel.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    "Share Wrapped"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/StatsPanel.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "rounded-3xl p-6",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].border.subtle}`
                },
                initial: {
                    opacity: 0,
                    x: 20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    delay: 0.6,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-4",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                        },
                        children: "Recent Activity"
                    }, void 0, false, {
                        fileName: "[project]/app/components/StatsPanel.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            {
                                text: "Finished The Midnight Library",
                                time: "2d ago"
                            },
                            {
                                text: "Sarah started Project Hail Mary",
                                time: "3h ago"
                            },
                            {
                                text: "Saved quote from Circe",
                                time: "5h ago"
                            }
                        ].map((activity, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                className: "flex items-center justify-between p-3 rounded-xl",
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.elevated
                                },
                                initial: {
                                    opacity: 0,
                                    y: 5
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.7 + i * 0.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary
                                        },
                                        children: activity.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/StatsPanel.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                                        },
                                        children: activity.time
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/StatsPanel.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/components/StatsPanel.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/StatsPanel.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/StatsPanel.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/StatsPanel.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = StatsPanel;
var _c;
__turbopack_context__.k.register(_c, "StatsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FloatingNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/FloatingNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ContinueReadingHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ContinueReadingHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MoodCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MoodCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StatsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/StatsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/design-system.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const currentlyReading = {
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    title: "The Midnight Library",
    author: "Matt Haig",
    currentPage: 234,
    totalPages: 360,
    moods: [
        "Cozy",
        "Hopeful",
        "Philosophical"
    ],
    streak: 12
};
const moodBooks = {
    "Cozy Reads": [
        {
            id: "1",
            cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop",
            title: "The Invisible Life of Addie LaRue",
            author: "V.E. Schwab",
            rating: 4.5,
            moods: [
                "Cozy",
                "Historical"
            ],
            currentPage: 0,
            totalPages: 448,
            friendsReading: 3
        },
        {
            id: "2",
            cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop",
            title: "Eleanor Oliphant is Completely Fine",
            author: "Gail Honeyman",
            rating: 4.3,
            moods: [
                "Cozy",
                "Hopeful"
            ],
            currentPage: 120,
            totalPages: 336,
            friendsReading: 1
        },
        {
            id: "3",
            cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=450&fit=crop",
            title: "A Man Called Ove",
            author: "Fredrik Backman",
            rating: 4.6,
            moods: [
                "Cozy",
                "Hopeful"
            ],
            currentPage: 0,
            totalPages: 337,
            friendsReading: 2
        },
        {
            id: "4",
            cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop",
            title: "The House in the Cerulean Sea",
            author: "TJ Klune",
            rating: 4.7,
            moods: [
                "Cozy",
                "Fantasy"
            ],
            currentPage: 0,
            totalPages: 394,
            friendsReading: 5
        }
    ],
    "Dark & Tense": [
        {
            id: "5",
            cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=450&fit=crop",
            title: "Project Hail Mary",
            author: "Andy Weir",
            rating: 4.8,
            moods: [
                "Tense",
                "Sci-Fi"
            ],
            currentPage: 0,
            totalPages: 496,
            friendsReading: 4
        },
        {
            id: "6",
            cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop",
            title: "Gone Girl",
            author: "Gillian Flynn",
            rating: 4.1,
            moods: [
                "Dark",
                "Thriller"
            ],
            currentPage: 0,
            totalPages: 432,
            friendsReading: 2
        },
        {
            id: "7",
            cover: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=300&h=450&fit=crop",
            title: "The Silent Patient",
            author: "Alex Michaelides",
            rating: 4.2,
            moods: [
                "Dark",
                "Thriller"
            ],
            currentPage: 0,
            totalPages: 336,
            friendsReading: 1
        }
    ],
    "Hopeful": [
        {
            id: "8",
            cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=450&fit=crop",
            title: "Klara and the Sun",
            author: "Kazuo Ishiguro",
            rating: 4.0,
            moods: [
                "Hopeful",
                "Sci-Fi"
            ],
            currentPage: 0,
            totalPages: 320,
            friendsReading: 2
        },
        {
            id: "9",
            cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&h=450&fit=crop",
            title: "The Alchemist",
            author: "Paulo Coelho",
            rating: 4.4,
            moods: [
                "Hopeful",
                "Philosophical"
            ],
            currentPage: 0,
            totalPages: 208,
            friendsReading: 6
        },
        {
            id: "10",
            cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
            title: "Tuesdays with Morrie",
            author: "Mitch Albom",
            rating: 4.5,
            moods: [
                "Hopeful",
                "Philosophical"
            ],
            currentPage: 0,
            totalPages: 192,
            friendsReading: 3
        }
    ]
};
const palette = [
    "#C8A26A",
    "#7FA88A",
    "#8B8BC8",
    "#C8A88B",
    "#C88B8B",
    "#8BA8C8"
];
function Home() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [activeSidebar, setActiveSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0D0D0B]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeItem: activeSidebar,
                onItemChange: setActiveSidebar,
                streak: 12
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FloatingNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeTab: activeTab,
                onTabChange: setActiveTab
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:ml-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-30 px-4 lg:px-8 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between max-w-7xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg flex items-center justify-center",
                                            style: {
                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.inverse
                                                },
                                                children: "C"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                                            },
                                            children: "Chapter"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    className: "hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl flex-1 max-w-md mx-4",
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].bg.surface,
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].border.light}`
                                    },
                                    whileHover: {
                                        scale: 1.01
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 25
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted,
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "11",
                                                    cy: "11",
                                                    r: "8"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "21",
                                                    y1: "21",
                                                    x2: "16.65",
                                                    y2: "16.65"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.muted
                                            },
                                            children: "Search books, authors, moods..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer",
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.inverse
                                        },
                                        children: "A"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 lg:px-8 pb-32 max-w-7xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                            className: "mb-6",
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 25
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-2xl lg:text-4xl font-bold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.primary
                                                    },
                                                    children: [
                                                        "Good morning, ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].accent.DEFAULT
                                                            },
                                                            children: "Alex"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mt-1",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$design$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].text.secondary
                                                    },
                                                    children: "You are 65% through your current read"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ContinueReadingHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                ...currentlyReading
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: Object.entries(moodBooks).map(([mood, books])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MoodCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    mood: mood,
                                                    books: books
                                                }, mood, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden xl:block w-80 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sticky top-24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StatsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            booksRead: 3,
                                            pagesRead: 1247,
                                            readingTime: "18h",
                                            streak: 12,
                                            palette: palette
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Home, "hJQh3tyf/1b1z9M+P+H+JlyfatI=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_12c.mk3._.js.map