// src/components/common/Footer/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            Alumni Information System © {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
