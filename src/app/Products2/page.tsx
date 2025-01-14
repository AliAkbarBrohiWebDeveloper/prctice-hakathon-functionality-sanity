import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


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


async function page() {
  const data = await client.fetch(`
    *[_type == "product"]{
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
          url,
          metadata {
            dimensions
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div className="py-10 px-5 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product:Product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
            <Link href={`/Products2/${product._id}`}>  <Image
                src={urlFor(product.image?.asset?.url).url()}
                height={400}
                width={400}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              </Link>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>

              <div className="flex items-center space-x-4 mb-4">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                {product.discountPercentage > 0 && (
                  <span className="text-sm text-red-500 line-through">${product.priceWithoutDiscount}</span>
                )}
              </div>

              <div className="mb-4">
                <span className="text-sm text-gray-600">Rating: {product.rating} ({product.ratingCount} reviews)</span>
              </div>

              {product.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page































