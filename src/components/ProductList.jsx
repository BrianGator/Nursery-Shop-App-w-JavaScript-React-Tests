/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Author: Brian McCarthy
 */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, Menu, X, Home, Leaf } from 'lucide-react';
import { addItem } from '../CartSlice';
import CartItem from './CartItem';

const ProductList = () => {
    const [showCart, setShowCart] = useState(false);
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Fruit Plants",
            plants: [
                {
                    name: "Strawberry",
                    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2030&auto=format&fit=crop",
                    description: "Sweet and juicy berries, perfect for sunny balconies.",
                    cost: "$12"
                },
                {
                    name: "Blueberry",
                    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=2070&auto=format&fit=crop",
                    description: "Nutrient-rich berries that thrive in acidic soil.",
                    cost: "$18"
                },
                {
                    name: "Lemon (Potted)",
                    image: "https://images.unsplash.com/photo-1596715364115-46fadb0e234c?q=80&w=2070&auto=format&fit=crop",
                    description: "Fragrant blossoms and fresh citrus for your home.",
                    cost: "$35"
                },
                {
                    name: "Raspberry",
                    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?q=80&w=2070&auto=format&fit=crop",
                    description: "Fast-growing canes that produce delicious summer fruit.",
                    cost: "$14"
                },
                {
                    name: "Kumquat",
                    image: "https://images.unsplash.com/photo-1618361730467-33166861502f?q=80&w=2070&auto=format&fit=crop",
                    description: "Small, edible citrus fruit that can be eaten skin and all.",
                    cost: "$28"
                },
                {
                    name: "Blackberry",
                    image: "https://images.unsplash.com/photo-1433356068263-2bbec9381ae5?q=80&w=2070&auto=format&fit=crop",
                    description: "Hardy vines with dark, sweet berries.",
                    cost: "$15"
                }
            ]
        },
        {
            category: "Flower Plants",
            plants: [
                {
                    name: "Hibiscus",
                    image: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?q=80&w=1974&auto=format&fit=crop",
                    description: "Large, colorful blooms that bring a tropical feel.",
                    cost: "$22"
                },
                {
                    name: "Geranium",
                    image: "https://images.unsplash.com/photo-1596200215886-0adbc26d582a?q=80&w=2070&auto=format&fit=crop",
                    description: "Classic garden favorite with clusters of vibrant flowers.",
                    cost: "$10"
                },
                {
                    name: "Anthurium",
                    image: "https://images.unsplash.com/photo-1592150621344-82841b99a30d?q=80&w=2071&auto=format&fit=crop",
                    description: "Unique heart-shaped flowers that last for weeks.",
                    cost: "$25"
                },
                {
                    name: "Azalea",
                    image: "https://images.unsplash.com/photo-1589712752179-8805f635609d?q=80&w=2070&auto=format&fit=crop",
                    description: "Stunning spring blooms in shades of pink and red.",
                    cost: "$18"
                },
                {
                    name: "Begonia",
                    image: "https://images.unsplash.com/photo-1627993416410-6435c4250499?q=80&w=2070&auto=format&fit=crop",
                    description: "Beautiful foliage and delicate, recurring flowers.",
                    cost: "$12"
                },
                {
                    name: "Gardenia",
                    image: "https://images.unsplash.com/photo-1523450001004-94567bd2f0b7?q=80&w=2070&auto=format&fit=crop",
                    description: "Known for their intoxicating scent and creamy white petals.",
                    cost: "$30"
                }
            ]
        },
        {
            category: "Fruit Trees",
            plants: [
                {
                    name: "Apple Tree",
                    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88c1?q=80&w=2070&auto=format&fit=crop",
                    description: "Start your own orchard with a classic fruiting tree.",
                    cost: "$45"
                },
                {
                    name: "Peach Tree",
                    image: "https://images.unsplash.com/photo-1521245041764-672580436d40?q=80&w=2070&auto=format&fit=crop",
                    description: "Sweet, fuzzy fruit harvested straight from the branch.",
                    cost: "$40"
                },
                {
                    name: "Pomegranate Tree",
                    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=2070&auto=format&fit=crop",
                    description: "Unique, jewel-like fruit on a hardy, decorative tree.",
                    cost: "$38"
                },
                {
                    name: "Cherry Tree",
                    image: "https://images.unsplash.com/photo-1521491757859-997576571587?q=80&w=2070&auto=format&fit=crop",
                    description: "Beautiful blossoms followed by sweet, red cherries.",
                    cost: "$42"
                },
                {
                    name: "Mango Tree",
                    image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=2070&auto=format&fit=crop",
                    description: "Tropical favorite providing shade and delicious fruit.",
                    cost: "$55"
                },
                {
                    name: "Avocado Tree",
                    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
                    description: "Evergreen tree producing creamy, nutritious avocados.",
                    cost: "$48"
                }
            ]
        },
        {
            category: "Orchids",
            plants: [
                {
                    name: "Phalaenopsis Orchid",
                    image: "https://images.unsplash.com/photo-1534885322320-a734d6ad5e8c?q=80&w=2070&auto=format&fit=crop",
                    description: "The classic moth orchid, elegant and long-blooming.",
                    cost: "$25"
                },
                {
                    name: "Cattleya Orchid",
                    image: "https://images.unsplash.com/photo-1589715699745-f0ea8da1e2db?q=80&w=2070&auto=format&fit=crop",
                    description: "Large, showy flowers with a wonderful fragrance.",
                    cost: "$32"
                },
                {
                    name: "Dendrobium Orchid",
                    image: "https://images.unsplash.com/photo-1558236714-d1ae59990928?q=80&w=1974&auto=format&fit=crop",
                    description: "Clusters of small, vibrant flowers along the stem.",
                    cost: "$28"
                },
                {
                    name: "Oncidium Orchid",
                    image: "https://images.unsplash.com/photo-1502731855568-24d1679be938?q=80&w=2070&auto=format&fit=crop",
                    description: "Known as 'Dancing Ladies' for their spray of tiny blooms.",
                    cost: "$30"
                },
                {
                    name: "Vanda Orchid",
                    image: "https://images.unsplash.com/photo-1566993175130-221669460593?q=80&w=2070&auto=format&fit=crop",
                    description: "Stunning air plants with large, colorful flowers.",
                    cost: "$45"
                },
                {
                    name: "Cymbidium Orchid",
                    image: "https://images.unsplash.com/photo-1560505161-5906f366113b?q=80&w=2070&auto=format&fit=crop",
                    description: "Hardy orchids with long-lasting spikes of flowers.",
                    cost: "$36"
                }
            ]
        },
        {
            category: "Cactus Plants w Flowers",
            plants: [
                {
                    name: "Christmas Cactus",
                    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1964&auto=format&fit=crop",
                    description: "Festive blooms that appear in early winter.",
                    cost: "$15"
                },
                {
                    name: "Desert Rose",
                    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e5f?q=80&w=2070&auto=format&fit=crop",
                    description: "Succulent shrub with beautiful bell-shaped flowers.",
                    cost: "$35"
                },
                {
                    name: "Prickly Pear",
                    image: "https://images.unsplash.com/photo-1520302832374-608ad9dd0a63?q=80&w=2070&auto=format&fit=crop",
                    description: "Hardy cactus with striking yellow or pink blossoms.",
                    cost: "$20"
                },
                {
                    name: "Mammillaria",
                    image: "https://images.unsplash.com/photo-1508022159263-219a687243f0?q=80&w=1964&auto=format&fit=crop",
                    description: "Compact cactus often covered in small, rings of flowers.",
                    cost: "$12"
                },
                {
                    name: "Easter Cactus",
                    image: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?q=80&w=1970&auto=format&fit=crop",
                    description: "Spring-blooming cactus with star-shaped flowers.",
                    cost: "$14"
                },
                {
                    name: "Rebutia",
                    image: "https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?q=80&w=2070&auto=format&fit=crop",
                    description: "Tiny cacti that produce huge, bright flowers.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Palm Trees",
            plants: [
                {
                    name: "Areca Palm",
                    image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fcd0?q=80&w=1974&auto=format&fit=crop",
                    description: "Feathery fronds that add a majestic tropical vibe.",
                    cost: "$45"
                },
                {
                    name: "Majesty Palm",
                    image: "https://images.unsplash.com/photo-1507742137685-6187b4097486?q=80&w=2070&auto=format&fit=crop",
                    description: "A fast-growing palm that loves bright, indirect light.",
                    cost: "$38"
                },
                {
                    name: "Kentia Palm",
                    image: "https://images.unsplash.com/photo-1615851410712-421be7ca4f82?q=80&w=2070&auto=format&fit=crop",
                    description: "Elegant, slow-growing palm that tolerates low light.",
                    cost: "$65"
                },
                {
                    name: "Sago Palm",
                    image: "https://images.unsplash.com/photo-1528475478853-5b89bed55f4a?q=80&w=2070&auto=format&fit=crop",
                    description: "Rugged, ancient-looking plant with stiff, dark green leaves.",
                    cost: "$40"
                },
                {
                    name: "Ponytail Palm",
                    image: "https://images.unsplash.com/photo-1614515222046-24e5491fba32?q=80&w=2070&auto=format&fit=crop",
                    description: "Unique bulbous base and cascading fountain of leaves.",
                    cost: "$32"
                },
                {
                    name: "Fan Palm",
                    image: "https://images.unsplash.com/photo-1510218830377-1e9c21703b14?q=80&w=2148&auto=format&fit=crop",
                    description: "Architectural palm with broad, fan-shaped leaves.",
                    cost: "$50"
                }
            ]
        },
        {
            category: "Air Purifying",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://images.unsplash.com/photo-1593482815041-945763bf4532?q=80&w=2070&auto=format&fit=crop",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://images.unsplash.com/photo-1599388301742-1264016f1947?q=80&w=2070&auto=format&fit=crop",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://images.unsplash.com/photo-1628540114002-3f82020228ee?q=80&w=2070&auto=format&fit=crop",
                    description: "Removes mold spores and toxins like ammonia.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://images.unsplash.com/photo-1610473215233-1456a0584eb2?q=80&w=2070&auto=format&fit=crop",
                    description: "Adds moisture to the air and removes pollutants.",
                    cost: "$22"
                },
                {
                    name: "Rubber Plant",
                    image: "https://images.unsplash.com/photo-1598592232491-d64821a8cd66?q=80&w=2070&auto=format&fit=crop",
                    description: "Easy to care for and great for air purification.",
                    cost: "$25"
                },
                {
                    name: "Aloe Vera",
                    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=2070&auto=format&fit=crop",
                    description: "Purifies air and has medicinal properties.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1506173183693-723e06180590?q=80&w=2070&auto=format&fit=crop",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=2070&auto=format&fit=crop",
                    description: "Sweet fragrance that blooms at night.",
                    cost: "$26"
                },
                {
                    name: "Rosemary",
                    image: "https://images.unsplash.com/photo-1594313106629-9e8d30e37893?q=80&w=2070&auto=format&fit=crop",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://images.unsplash.com/photo-1603513360408-da2322cd5f0f?q=80&w=2070&auto=format&fit=crop",
                    description: "Refreshing aroma and versatile in use.",
                    cost: "$10"
                },
                {
                    name: "Lemon Balm",
                    image: "https://images.unsplash.com/photo-1629814424859-994df2292f7e?q=80&w=2070&auto=format&fit=crop",
                    description: "Citrusy scent with calming properties.",
                    cost: "$12"
                },
                {
                    name: "Hyacinth",
                    image: "https://images.unsplash.com/photo-1558231086-49033327d757?q=80&w=2070&auto=format&fit=crop",
                    description: "Beautiful flowers with a strong, pleasant fragrance.",
                    cost: "$18"
                }
            ]
        },
        {
            category: "Low Maintenance",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1964&auto=format&fit=crop",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$24"
                },
                {
                    name: "Pothos",
                    image: "https://images.unsplash.com/photo-1632734041793-183047a0628e?q=80&w=2070&auto=format&fit=crop",
                    description: "Resilient vine that handles various conditions.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1964&auto=format&fit=crop",
                    description: "Hardy plant that tolerates neglect and low light.",
                    cost: "$28"
                },
                {
                    name: "Succulent Garden",
                    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2018&auto=format&fit=crop",
                    description: "A mix of slow-growing, drought-tolerant plants.",
                    cost: "$22"
                },
                {
                    name: "Jade Plant",
                    image: "https://images.unsplash.com/photo-1609142621730-db3293839541?q=80&w=2070&auto=format&fit=crop",
                    description: "Long-lived succulent with unique tree-like form.",
                    cost: "$18"
                },
                {
                    name: "Chinese Evergreen",
                    image: "https://images.unsplash.com/photo-1636208571833-9111c1d89776?q=80&w=2071&auto=format&fit=crop",
                    description: "Colorful foliage that adapts well to indoor life.",
                    cost: "$20"
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    const isAddedToCart = (plantName) => {
        return cartItems.some(item => item.name === plantName);
    };

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Header / Navbar */}
            <header className="bg-green-800 text-white sticky top-0 z-50 shadow-md">
                <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = '/'}>
                        <div className="bg-white p-2 rounded-full">
                            <Leaf className="text-green-800 size-6" />
                        </div>
                        <div className="leading-tight">
                            <h1 className="text-xl font-bold tracking-tight">E-PlantShopping</h1>
                            <p className="text-[10px] uppercase tracking-widest opacity-80">Where Greenery Lives</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => window.location.href = '/'} className="flex items-center space-x-1 hover:text-green-200 transition-colors">
                            <Home size={18} />
                            <span>Home</span>
                        </button>
                        <button onClick={() => setShowCart(false)} className="flex items-center space-x-1 hover:text-green-200 transition-colors">
                            <Leaf size={18} />
                            <span>Plants</span>
                        </button>
                    </div>

                    <button 
                        onClick={() => setShowCart(!showCart)}
                        className="relative p-2 hover:bg-green-700 rounded-full transition-colors group"
                        id="cart-icon"
                    >
                        <ShoppingCart className="size-7" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full size-5 flex items-center justify-center animate-in zoom-in duration-300">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </nav>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-12">
                {showCart ? (
                    <CartItem onContinueShopping={() => setShowCart(false)} />
                ) : (
                    <div className="space-y-16">
                        {plantsArray.map((categoryObj, catIdx) => (
                            <section key={catIdx} className="space-y-8">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold text-green-900 inline-block border-b-4 border-green-500 pb-2">
                                        {categoryObj.category}
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {categoryObj.plants.map((plant, plantIdx) => (
                                        <div 
                                            key={plantIdx} 
                                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-stone-100 group"
                                            id={`plant-${plant.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        >
                                            <div className="relative h-64 overflow-hidden">
                                                <img 
                                                    src={plant.image} 
                                                    alt={plant.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-bold text-green-800 shadow-sm">
                                                    {plant.cost}
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow space-y-3">
                                                <h3 className="text-xl font-bold text-stone-800">{plant.name}</h3>
                                                <p className="text-stone-600 text-sm leading-relaxed flex-grow">{plant.description}</p>
                                                <button 
                                                    onClick={() => handleAddToCart(plant)}
                                                    disabled={isAddedToCart(plant.name)}
                                                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                                                        isAddedToCart(plant.name) 
                                                        ? 'bg-stone-200 text-stone-500 cursor-not-allowed' 
                                                        : 'bg-green-600 text-white hover:bg-green-700 active:scale-95 shadow-md hover:shadow-lg'
                                                    }`}
                                                >
                                                    {isAddedToCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default ProductList;
