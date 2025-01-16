
export type FormData = {
    initialEmail: string | null,
    initialPhoneNumber: string | null,
    profile: {
        fullName: string | null,
        userName: string | null,
        phoneNumber: string | null,
        email: string | null,
    },
    store: [
        {
            name: string,
            tagName: string,
            phoneNumber: string,
            email: string,
            category: string,
            description: string,
            products: [
                {
                    title: string | null,
                    description: string | null,
                    price: string | null,
                    oldPrice: string | null,
                    collections: string[] | null,
                    inventoryStocks: number | null,
                    images: string[] | null,
                    variants: {
                        colors: [] | null,
                        sizes: [] | null,
                    },
                    selfShipping: boolean | null,
                    boolean: boolean | null,
                },
    
            ],
        }
    ],
}

