/* @services/storage/types.ts */

type Props = {
    get: (key: string) => Promise<string>;
    set: (key: string, token: string) => Promise<boolean>;
    del: (key: string) => Promise<boolean>;
    delIfExists: (key: string) => Promise<boolean>;
};

export { Props };