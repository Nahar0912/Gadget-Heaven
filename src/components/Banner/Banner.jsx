const Banner = () => {
    return (
        <div className="mx-10 flex flex-col justify-center items-center">
            <div className="bg-purple-600 pb-48 rounded-3xl h-full p-14 text-white text-center flex flex-col ">
                <div className="px-56">
                    <h1 className="text-4xl font-bold mt-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1><br />
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p><br />
                    <button className="btn rounded-full px-10 text-purple-700">Shop Now</button>
                </div>
            </div>
            <img className="-mt-36 relative z-10 h-80 w-2/4 outline outline-1 outline-white outline-offset-8 rounded-3xl" src="/public/images/banner.jpg" alt="" />
        </div>
    );
};

export default Banner;