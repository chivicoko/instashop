
export type FormData = {
    email: string,
    fullName: string,
    userName: string,
    phoneNumber: string,
    storeName: string,
    storeTagName: string,
    storePhoneNumber: string,
    storeEmail: string,
    storeCategory: string,
    productTitle: string,
    productDesc: string,
    productPrice: string,
    productOldPrice: string,
    productCollections: string,
    productInventoryStocks: string,
}

// export type FormData = {
//     initialEmail: string | null,
//     initialPhoneNumber: string | null,
//     profile: {
//         fullName: string | null,
//         userName: string | null,
//         phoneNumber: string | null,
//         email: string | null,
//     },
//     store: [
//         {
//             name: string,
//             tagName: string,
//             phoneNumber: string,
//             email: string,
//             category: string,
//             description: string,
//             products: [
//                 {
//                     title: string | null,
//                     description: string | null,
//                     price: string | null,
//                     oldPrice: string | null,
//                     collections: string[] | null,
//                     inventoryStocks: number | null,
//                     images: string[] | null,
//                     variants: {
//                         colors: [] | null,
//                         sizes: [] | null,
//                     },
//                     selfShipping: boolean | null,
//                     boolean: boolean | null,
//                 },
    
//             ],
//         }
//     ],
// }


export type FormValues = {
  emailOrPhone: string;
  fullName: string;
  username: string;
  phoneNumber: string;
  email: string;
};

export type UserStoreDataProps = {
  storeName: string
  storeTagName: string
  storePhoneNumber: string
  storeEmail: string
  storeCategory: string
};

export type UserProductsDataProps = {
  productTitle: string,
  productDesc: string,
  productPrice: string,
  productOldPrice: string,
  productCollections: string,
  productInventoryStocks: string,
}

export type UserBasicDataProps = {
  fullName: string
  userName: string
  phoneNumber: string
  email: string
}

export type UserEmailProps = {
  email: string
}

interface Option {
  id: number;
  text: string;
}

export interface ProductOptionsProps {
  id: number;
  name: string;
  options: Option[];
}
