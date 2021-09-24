import React, { useState } from "react";
import styled from "styled-components";
//BootStrap Eye and Striked Eye icons from React Icons
import { BsEyeSlash, BsEye } from "react-icons/bs";

export default function Signup(props) {
    const [showPassword, setshowPassword] = useState(false); // To Hide/Show password
    const [showRePassword, setshowRePassword] = useState(false); // To Hide/Show confirm password

    // STYLED COMPONENTS
    //For password eye symbol
    const EyeSymbol = styled.span`
        background: #fff;
        cursor: pointer;
        margin-left: -10%;
        align-self: center;
    `;
    // END STYLED COMPONENTS

    return (
        <div>
            <Head>
                <title>Sign Up Page</title>
                <meta
                    name="Tut by Dazzlerkumar"
                    content="Tut by Dazzlerkumar"
                />
                <link
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    rel="stylesheet"
                />
            </Head>
            <main>
                <section className="signup-main">
                    <div className="container">
                        <form method="" onSubmit={(e) => handleSubmit(e)}>
                            <div className="row mt-5 input-field">
                                {/*EMAIL OR PHONE NUMBER DIV*/}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>E-Mail</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your email / Mobile Number"
                                            name="name"
                                        />
                                    </div>
                                </div>
                                {/* PASSWORD DIV*/}
                                <div className="col-md-6 input-field">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <div className="password-field">
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                className="form-control signup-password"
                                                placeholder="* * * * * *"
                                                name="name"
                                                required
                                            />
                                            <EyeSymbol
                                                onClick={() =>
                                                    setshowPassword(
                                                        (prevState) =>
                                                            !prevState
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <BsEye />
                                                ) : (
                                                    <BsEyeSlash />
                                                )}
                                            </EyeSymbol>
                                        </div>
                                    </div>
                                </div>
                                {/*CONFIRM PASSWORD DIV*/}
                                <div className="col-md-6 input-field">
                                    <div className="form-group signup-repass">
                                        <label>Repeat Password</label>
                                        <div className="password-field">
                                            <input
                                                type={
                                                    showRePassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                className="form-control signup-password"
                                                placeholder="* * * * * *"
                                                name="name"
                                                required
                                            />
                                            <EyeSymbol
                                                onClick={() =>
                                                    setshowRePassword(
                                                        (prevState) =>
                                                            !prevState
                                                    )
                                                }
                                            >
                                                {showRePassword ? (
                                                    <BsEye />
                                                ) : (
                                                    <BsEyeSlash />
                                                )}
                                            </EyeSymbol>
                                        </div>
                                    </div>
                                </div>

                                {/*SIGN UP BUTTON DIV*/}
                                <div className="col-md-6">
                                    <button
                                        type="submit"
                                        className="mt-3 dark-btn btn-block"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
