
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'
// import Image from 'next/image'
// import { notFound } from 'next/navigation'

// type Product = {
//   _id: string
//   name: string
//   description: string
//   price: number
//   discountPercentage: number
//   priceWithoutDiscount: number
//   rating: number
//   ratingCount: number
//   tags: string[]
//   sizes: string[]
//   image: {
//     asset: {
//       _id: string
//       url: string
//     }
//   }
// }

// // Fetching metadata for SEO purposes
// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const product = await client.fetch(
//     `*[_type == "product" && _id == $id][0]{
//       name,
//       description
//     }`,
//     { id: params.id }
//   )

//   if (!product) {
//     return {
//       title: 'Product not found',
//     }
//   }

//   return {
//     title: product.name,
//     description: product.description,
//   }
// }

// const ProductPage = async ({ params }: { params: { id: string } }) => {
//   // Fetch product data from Sanity based on the dynamic 'id' param
//   const product: Product | null = await client.fetch(
//     `*[_type == "product" && _id == $id][0]{
//       _id,
//       name,
//       description,
//       price,
//       discountPercentage,
//       priceWithoutDiscount,
//       rating,
//       ratingCount,
//       tags,
//       sizes,
//       image {
//         asset->{
//           _id,
//           url
//         }
//       }
//     }`,
//     { id: params.id }
//   )

//   if (!product) {
//     notFound()
//   }

//   return (
//     <div className="py-10 px-5 bg-gray-100">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="relative">
//             <Image
//               src={urlFor(product.image?.asset?.url).url()}
//               alt={product.name}
//               height={500}
//               width={500}
//               className="object-cover"
//             />
//           </div>
//           <div className="p-6">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h1>
//             <p className="text-gray-600 mb-4">{product.description}</p>

//             <div className="flex items-center space-x-4 mb-4">
//               <span className="text-xl font-bold text-gray-900">${product.price}</span>
//               {product.discountPercentage > 0 && (
//                 <span className="text-sm text-red-500 line-through">
//                   ${product.priceWithoutDiscount}
//                 </span>
//               )}
//             </div>

//             <div className="mb-4">
//               <span className="text-sm text-gray-600">
//                 Rating: {product.rating} ({product.ratingCount} reviews)
//               </span>
//             </div>

//             {product.tags?.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {product.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {product.sizes?.length > 0 && (
//               <div className="flex gap-2 mb-4">
//                 {product.sizes.map((size, index) => (
//                   <span key={index} className="px-3 py-1 text-sm bg-gray-300 rounded-full">
//                     {size}
//                   </span>
//                 ))}
//               </div>
//             )}

// <button className='px-6 py-2 bg-red-500 text-white rounded-xl'>Add to cart</button>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductPage






// 'use client'; 
// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '@/app/Redux/cartSlice';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client'; 
// import { urlFor } from '@/sanity/lib/image'; 
// import { notFound } from 'next/navigation'; 



// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   priceWithoutDiscount: number;
//   rating: number;
//   ratingCount: number;
//   tags: string[];
//   sizes: string[];
//   image: {
//     asset: {
//       _id: string;
//       url: string;
//     };
//   };
// };


// type ProductParams = {
//   id: string;
// };

// const ProductPage = ({ params }: { params: ProductParams }) => {
//   const dispatch = useDispatch();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);

 
//   const { id } = params; 

  
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const fetchedProduct: Product | null = await client.fetch(
//           `*[_type == "product" && _id == $id][0]{
//             _id,
//             name,
//             description,
//             price,
//             discountPercentage,
//             priceWithoutDiscount,
//             rating,
//             ratingCount,
//             tags,
//             sizes,
//             image {
//               asset->{
//                 _id,
//                 url
//               }
//             }
//           }`,
//           { id }
//         );

//         if (!fetchedProduct) {
//           notFound(); 
//         } else {
//           setProduct(fetchedProduct);
//         }
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//         notFound(); 
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]); 


//   const handleAddToCart = () => {
//     if (product) {
//       const cartItem = {
//         id: product._id,
//         name: product.name,
//         price: product.price,
//         quantity: 1,
//         image: urlFor(product.image?.asset?.url).url(),
//       };
//       dispatch(addToCart(cartItem));
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>; 
//   }

//   if (!product) {
//     return <div>Product not found</div>; // Show error message if product is not found
//   }

//   return (
//     <div className="py-10 px-5 bg-gray-100">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="relative">
//             <Image
//               src={urlFor(product.image?.asset?.url).url()}
//               alt={product.name}
//               height={500}
//               width={500}
//               className="object-cover"
//             />
//           </div>
//           <div className="p-6">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h1>
//             <p className="text-gray-600 mb-4">{product.description}</p>

//             <div className="flex items-center space-x-4 mb-4">
//               <span className="text-xl font-bold text-gray-900">${product.price}</span>
//               {product.discountPercentage > 0 && (
//                 <span className="text-sm text-red-500 line-through">
//                   ${product.priceWithoutDiscount}
//                 </span>
//               )}
//             </div>

//             <div className="mb-4">
//               <span className="text-sm text-gray-600">
//                 Rating: {product.rating} ({product.ratingCount} reviews)
//               </span>
//             </div>

//             {product.tags?.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {product.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {product.sizes?.length > 0 && (
//               <div className="flex gap-2 mb-4">
//                 {product.sizes.map((size, index) => (
//                   <span key={index} className="px-3 py-1 text-sm bg-gray-300 rounded-full">
//                     {size}
//                   </span>
//                 ))}
//               </div>
//             )}

//             <button
//               onClick={handleAddToCart}
//               className="px-6 py-2 bg-red-500 text-white rounded-xl"
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;























'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/Redux/cartSlice';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { notFound } from 'next/navigation';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
};


type ProductParams = {
  id: string;
};

const ProductPage = ({ params }: { params: Promise<ProductParams> }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

 
  const [resolvedParams, setResolvedParams] = useState<ProductParams | null>(null);

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
    };

    resolveParams();
  }, [params]);


  const id = resolvedParams?.id;

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        const fetchedProduct: Product | null = await client.fetch(
          `*[_type == "product" && _id == $id][0]{
            _id,
            name,
            description,
            price,
            discountPercentage,
            priceWithoutDiscount,
            rating,
            ratingCount,
            tags,
            sizes,
            image {
              asset->{
                _id,
                url
              }
            }
          }`,
          { id }
        );

        if (!fetchedProduct) {
          notFound();
        } else {
          setProduct(fetchedProduct);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: urlFor(product.image?.asset?.url).url(),
      };
      dispatch(addToCart(cartItem));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="py-10 px-5 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <Image
              src={urlFor(product.image?.asset?.url).url()}
              alt={product.name}
              height={500}
              width={500}
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="flex items-center space-x-4 mb-4">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              {product.discountPercentage > 0 && (
                <span className="text-sm text-red-500 line-through">
                  ${product.priceWithoutDiscount}
                </span>
              )}
            </div>

            <div className="mb-4">
              <span className="text-sm text-gray-600">
                Rating: {product.rating} ({product.ratingCount} reviews)
              </span>
            </div>

            {product.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {product.sizes?.length > 0 && (
              <div className="flex gap-2 mb-4">
                {product.sizes.map((size, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                    {size}
                  </span>
                ))}
              </div>
            )}

            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-red-500 text-white rounded-xl"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
