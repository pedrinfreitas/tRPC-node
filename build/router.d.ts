import * as trpc from '@trpc/server';
declare const _default: import("@trpc/server/dist/declarations/src/router").Router<unknown, unknown, {}, Record<"getUsers", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<unknown, unknown, {}, undefined, undefined, {
    id: number;
    name: string;
}[], {
    id: number;
    name: string;
}[], {
    id: number;
    name: string;
}[]>> & Record<"getUser", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<unknown, unknown, {}, {
    id: number;
}, {
    id: number;
}, {
    id: number;
    name: string;
}, unknown, {
    id: number;
    name: string;
}>>, {}, {}, trpc.DefaultErrorShape>;
export default _default;
