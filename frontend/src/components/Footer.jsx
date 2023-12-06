import React from "react";
import Marquee from "./Marquee";

const Footer = () => {
    return (
        <div className="mt-8">
            <Marquee>
                <span className="mx-4 text-xl text-base-100">
                    Explore intriguing podcasts on EchoEnclave. Dive into
                    diverse topics for quick, enjoyable listens
                </span>
            </Marquee>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
