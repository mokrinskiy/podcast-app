import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
    return (
        <>
            <header className="flex px-4 max-xl:mx-4 pt-6 m-auto max-w-[1600px] items-center justify-between border-b-[2px] border-neutral py-2 max-sm:border-[0px] max-sm:fixed max-sm:top-[-20px] max-sm:left-[-28px] max-sm:z-50">
                <Link to={"/"} className="font-bold text-[25px] max-sm:hidden">
                    EchoEnclave
                </Link>
                <div className="drawer sm:hidden">
                    <input
                        id="my-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content">
                        <label
                            htmlFor="my-drawer"
                            className="btn btn-primary drawer-button"
                        >
                            <MenuIcon />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-3">
                            <li>
                                <Link
                                    to={"/"}
                                    className="font-bold text-[25px]"
                                >
                                    EchoEnclave
                                </Link>
                            </li>
                            <li>
                                <Link to={"/podcasts"} className="text-[20px]">
                                    Podcasts
                                </Link>
                            </li>
                            <li>
                                <div className="space-x-3 flex justify-between items-center">
                                    <TwitterIcon />
                                    <InstagramIcon />
                                    <YouTubeIcon />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex max-sm:hidden">
                    <Link to={"/podcasts"} className="mx-6 text-[20px]">
                        Podcasts
                    </Link>
                    <div className="space-x-3 flex justify-between items-center">
                        <TwitterIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;
