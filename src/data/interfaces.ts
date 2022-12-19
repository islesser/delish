export type BaseObject = {
    id: string;
};

export type BaseAddressableObject = BaseObject & {
    slug: string;
};

export type Recipe = BaseAddressableObject & {
    name: string;
    category: string;
    tags: string[];
    description: string;
    ingredients: string[];
    steps: string[];
};
