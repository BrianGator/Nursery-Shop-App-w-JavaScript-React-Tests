/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Author: Brian McCarthy
 */

import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center" id="about-us">
      <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">Welcome to Paradise Nursery</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        At Paradise Nursery, we believe that every home deserves a touch of nature's beauty. Founded by plant enthusiasts, our mission is to provide high-quality, vibrant houseplants that not only beautify your space but also purify your air and enhance your well-being.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our curated collection features everything from low-maintenance succulents to majestic palms, ensuring that both novice and experienced plant parents find their perfect green companion. We handle every plant with love, from our nursery to your doorstep.
      </p>
    </div>
  );
};

export default AboutUs;
