import { ReTitle } from 're-title';
import Achievement from '../Components/Achievement';
import Banner from '../Components/Banner';
import FeaturedToys from '../Components/FeaturedToys';
import NewsLetter from '../Components/NewsLetter';
import Slider from '../Components/Slider';
import ToysCategory from '../Components/ToysCategory';

const Home = () => {
    return (
        <div className="overflow-hidden bg-[#FFF9EC] text-[#3b2f2f]">
            {/* title */}
            <ReTitle title='Home | Toy Verse'></ReTitle>
            {/* Banner */}
            <section className="max-w-6xl mx-auto my-10 px-4">
                <Banner />
            </section>
            {/* slider */}
            <section className="max-w-6xl mx-auto my-16 px-4">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#6f4e37] mb-8 tracking-wide">
                    Featured Collection
                </h2>
                <Slider />
            </section>
            {/* featured toys + toys category */}
            <section
                data-aos="fade-up"
                className="my-20 bg-linear-to-b from-[#fffaf0] to-[#fff5e1] rounded-3xl shadow-lg border border-[#ffe6a7]/60 p-6 md:p-8 lg:p-10 max-w-full"
            >
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 min-h-screen">
                        {/* Categories */}
                        <aside className="h-full md:col-span-3 lg:col-span-1">
                            <ToysCategory />
                        </aside>

                        {/* Featured Toys */}
                        <div className="md:col-span-3 lg:col-span-5 flex flex-col w-full">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-3xl font-extrabold text-[#6f4e37] drop-shadow-sm tracking-wide">
                                    Popular Toys
                                </h1>
                                <div className="h-1 w-24 bg-[#e1ad01] rounded-full"></div>
                            </div>
                            <div className="w-full">
                                <FeaturedToys />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Achievements*/}
            <section data-aos="fade-up" className="max-w-6xl mx-auto my-20 px-4">
                <div className="bg-white/70 backdrop-blur-sm border border-[#ffd166]/40 rounded-3xl shadow-md p-8 md:p-12 text-center">
                    <Achievement />
                </div>
            </section>
            {/*Newsletter*/}
            <section
                data-aos="fade-up"
                className="bg-[#fff5e1] py-16 px-6 md:px-0 flex justify-center items-center border-t border-[#ffe6a7]/50 shadow-inner"
            >
                <div className="max-w-4xl w-full">
                    <h2 className="text-3xl font-bold text-center text-[#6f4e37] mb-6">
                        Join Our ToyVerse Family 🎁
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        Subscribe to get exclusive toy updates, discounts, and fun ideas for your little ones!
                    </p>
                    <NewsLetter />
                </div>
            </section>
        </div>
    );
};

export default Home;
