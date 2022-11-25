import React from "react";


const Header = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide relative lg:h-[600px]"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full "
            alt="Wild Landscape"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://images.unsplash.com/photo-1610438250910-01cb769c1334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full"
            alt="Exotic Fruits"
          />
        </div>
        <div class="carousel-caption  absolute text-center lg:bottom-[200px]">
          <div className="">
            <h1 className="text-2xl md:text-6xl my-2">
              Overstock - Fashion Store Resle Laptops
            </h1>
            <p className="text-[13px] md:text-lg my-2">
              If you are planning to buy a fresh used laptop then Overstock –
              Fashion Store is what you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
