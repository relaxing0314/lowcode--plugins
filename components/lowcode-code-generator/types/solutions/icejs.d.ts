import { IProjectBuilder, IProjectBuilderOptions } from '../types';
export type IceJsProjectBuilderOptions = IProjectBuilderOptions;
export default function createIceJsProjectBuilder(options?: IceJsProjectBuilderOptions): IProjectBuilder;
export declare const plugins: {
    containerClass: import("../types").BuilderComponentPluginFactory<unknown>;
    containerInitState: import("../types").BuilderComponentPluginFactory<import("../plugins/component/react/containerInitState").PluginConfig>;
    containerInjectContext: import("../types").BuilderComponentPluginFactory<import("../plugins/component/react/containerInjectContext").PluginConfig>;
    containerInjectUtils: import("../types").BuilderComponentPluginFactory<import("../plugins/component/react/containerInjectUtils").PluginConfig>;
    containerInjectI18n: import("../types").BuilderComponentPluginFactory<import("../plugins/component/react/containerInjectI18n").PluginConfig>;
    containerInjectDataSourceEngine: import("../types").BuilderComponentPluginFactory<import("../plugins/component/react/containerInjectDataSourceEngine").PluginConfig>;
    containerLifeCycle: import("../types").BuilderComponentPluginFactory<import("../plugins/component/react/containerLifeCycle").PluginConfig>;
    containerMethod: import("../types").BuilderComponentPluginFactory<import("../plugins/component/react/containerMethod").PluginConfig>;
    jsx: import("../types").BuilderComponentPluginFactory<import("../plugins/component/react/jsx").PluginConfig>;
    commonDeps: import("../types").BuilderComponentPluginFactory<unknown>;
    /** @deprecated Please use commonDeps */
    reactCommonDeps: import("../types").BuilderComponentPluginFactory<unknown>;
};
