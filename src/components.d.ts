/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ProtoSvgLoader {
        "hex": string;
        "name": string;
        "size": number;
    }
}
declare global {
    interface HTMLProtoSvgLoaderElement extends Components.ProtoSvgLoader, HTMLStencilElement {
    }
    var HTMLProtoSvgLoaderElement: {
        prototype: HTMLProtoSvgLoaderElement;
        new (): HTMLProtoSvgLoaderElement;
    };
    interface HTMLElementTagNameMap {
        "proto-svg-loader": HTMLProtoSvgLoaderElement;
    }
}
declare namespace LocalJSX {
    interface ProtoSvgLoader {
        "hex"?: string;
        "name"?: string;
        "size"?: number;
    }
    interface IntrinsicElements {
        "proto-svg-loader": ProtoSvgLoader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "proto-svg-loader": LocalJSX.ProtoSvgLoader & JSXBase.HTMLAttributes<HTMLProtoSvgLoaderElement>;
        }
    }
}
