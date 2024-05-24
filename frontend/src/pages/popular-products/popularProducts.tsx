import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import Card from "@/components/card/card";
import { ProductTypes } from "@/types/product-types";

interface PropTypes {
  data: ProductTypes[];
}

const PopularProducts: React.FC<PropTypes> = ({ data }) => {
  return (
    <div className="w-full bg-orange-50 rounded-lg p-3  relative">
      <h4 className="font-medium">Populer Urunler</h4>
      <Link href={"#"} className="absolute top-2 right-3 text-sm font-medium">
        Tum Urunler ➡️
      </Link>
      <div className="flex">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            428: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          style={{ height: "100%" }}
        >
          {data.map((product, index) => (
            <SwiperSlide key={index}>
              <Card
                key={index}
                product={product}
                category="products"
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularProducts;
