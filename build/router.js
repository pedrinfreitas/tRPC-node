"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc = __importStar(require("@trpc/server"));
const zod_1 = require("zod");
const mockResolve = [
    { id: 1, name: "Pedro" },
    { id: 2, name: "Antonio" },
    { id: 3, name: "Paula" },
];
exports.default = trpc
    .router()
    .query("getUsers", {
    output: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
    })),
    resolve: () => mockResolve,
})
    .query("getUser", {
    input: zod_1.z.object({
        id: zod_1.z.number(),
    }),
    resolve(request) {
        var _a;
        const inputId = request.input.id;
        return {
            id: inputId,
            name: (_a = mockResolve[inputId - 1]) === null || _a === void 0 ? void 0 : _a.name,
        };
    },
});
