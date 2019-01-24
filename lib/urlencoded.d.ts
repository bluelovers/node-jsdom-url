/**
 * Created by user on 2018/2/16/016.
 */
/// <reference types="node" />
export * from 'whatwg-url/lib/urlencoded';
import { isASCIIHex } from 'whatwg-url/lib/infra';
export { isASCIIHex };
export interface IOptionsUrldecodeed {
    unsafe?: boolean;
    noEqual?: boolean;
}
export interface IParseUrlencoded extends Array<string> {
    [0]: string;
    [1]?: string;
}
export declare function decodeUrlencoded(input: any, options?: IOptionsUrldecodeed): string;
export declare function joinUrldecodeed(list: IParseUrlencoded[], options?: IOptionsUrldecodeed): string;
export declare function strictlySplitByteSequence(buf: Buffer, cp: any): Buffer[];
export declare function replaceByteInByteSequence(buf: Buffer, from: any, to: any): Buffer;
export declare function bufferFrom(input: any, ...argv: any[]): Buffer;
export declare function parseUrlencoded(input: any, options?: IOptionsUrldecodeed): IParseUrlencoded[];
declare const _default: typeof import("./urlencoded");
export default _default;
