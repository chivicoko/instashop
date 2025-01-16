export const welcomeMessages = [
    { id: 1, info: "Reach Millions of Shoppers" },
    { id: 2, info: "Easy Product Listing" },
    { id: 3, info: "Secure and Fast Payments" },
    { id: 4, info: "Boost Your Visibility" },
]

export const someImages = [
    { id: 1, img: "/images/Frame 132.svg" },
    { id: 2, img: "/images/image2.jpeg" },
    { id: 3, img: "/images/image3.jpeg" },
    { id: 4, img: "/images/image4.jpeg" },
    { id: 5, img: "/images/image5.jpeg" },
    { id: 6, img: "/images/image6.jpeg" },
    { id: 7, img: "/images/image7.jpeg" },
]

export const stars = [
    { id: 1, img: "/images/star 1.svg" },
    { id: 2, img: "/images/star 1.svg" },
    { id: 3, img: "/images/star 1.svg" },
    { id: 4, img: "/images/star 1.svg" },
    { id: 5, img: "/images/star 5.svg" },
]

export const sizes = [
    { id: 1, text: "xs" },
    { id: 2, text: "sm" },
    { id: 3, text: "md" },
    { id: 4, text: "lg" },
    { id: 5, text: "xl" },
    { id: 6, text: "xxl" },
]

export const colors = [
    { id: 1, text: "red" },
    { id: 2, text: "white" },
    { id: 3, text: "black" },
    { id: 4, text: "blue" },
]

export const productOptions = [
    {
        id: 1,
        name: 'color',
        options: [
            { id: 1, text: "red" },
            { id: 2, text: "white" },
            { id: 3, text: "black" },
            { id: 4, text: "blue" },
        ]
    },
    {
        id: 2,
        name: 'size',
        options: [
            { id: 1, text: "xs" },
            { id: 2, text: "sm" },
            { id: 3, text: "md" },
            { id: 4, text: "lg" },
            { id: 5, text: "xl" },
            { id: 6, text: "xxl" },
        ]
    },
]

export const collections = [
    { id: 1, text: "Quality goods" },
    { id: 2, text: "Nice designs" },
    { id: 3, text: "Easy" },
    { id: 4, text: "Interesting" },
    { id: 5, text: "Awesome" },
    { id: 6, text: "Authentic" },
]

export const users = [
    {
        id: 1,
        initialEmail: "name@example.com",
        initialPhoneNumber: "+23457689483",
        profile: {
            fullName: "Jonas Smith",
            userName: "jSmith",
            phoneNumber: "+23448596094",
            email: "jsmith@example.com",
        },
        store: [
            {
                id: 1,
                name: "Gucci Store",
                tagName: "gucciStore",
                phoneNumber: "+23459680395",
                email: "guccistore@example.com",
                category: "Fashion",
                description: 'You can track your parcel on the following website using your tracking number: www.17track',
                products: [
                    {
                        id: 1,
                        title: "Gucci bag - the epitome of luxury and sophistication",
                        description: "Wholesale and drop shipping are both welcomed. For wholesale, we will offer discount or free express shipping which only takes 3-7 days to arrive.",
                        price: "₦18.0",
                        oldPrice: "₦28.0",
                        collections: ["Easy", "Listing", "Interests"],
                        inventoryStocks: 50,
                        images: ["/images/Frame 132.svg", "/images/Product image.svg", "/images/Product image.svg"],
                        variants: {
                            colors: ["red", "yellow", "blue", "green", "black", "brown"],
                            sizes: ["xs", "sm", "md", "lg", "xl", "xxl"],
                        },
                        selfShipping: true,
                        instaShopShipping: false,
                    },
        
                ]
            }
        ],
    },
]

export const INITIAL_USER_DATA = {
    email: '',
    fullName: '',
    userName: '',
    phoneNumber: '',
    storeName: '',
    storeTagName: '',
    storePhoneNumber: '',
    storeEmail: '',
    storeCategory: '',
    productTitle: '',
    productDesc: '',
    productPrice: '',
    productOldPrice: '',
    productCollections: '',
    productInventoryStocks: '',
}

