import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import EmailImg from '../assets/email.jpg'

const Email = () => {
    return (
        <EmailContainer>
            <EmailContent>
                <h1>Join Our Mailing List</h1>
                <p>Sign Up to receive special discounts, new product releases, and more!</p>
                <form action="#">
                    <FormWrap>
                        <label htmlFor="email">
                            <input type="email" placeholder="Enter your email" id="email" />
                        </label>
                        <Button as="button" type="submit" primary="true"
                        css={`
                            height: 48px;
                            border-radius: 15px;
                            @media screen and (max-width: 768px) {
                                width: 100%;
                                min-width: 350px;
                            }

                            @media screen and (max-width: 400px) {
                                width: 100%;
                                min-width: 250px;
                            }
                        `}
                        >Sign Up</Button>
                    </FormWrap>
                </form>
            </EmailContent>
        </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div`
    background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.5) 0%, 
            rgba(0, 0, 0, 0.5) 35%, 
            rgba(0, 0, 0, 0.1) 100%
        ),
        url(${EmailImg}) no-repeat center;
    background-size: cover;
    background-position: bottom;
    height: 400px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 2.5rem);
        padding: 0 1rem;
    }

    p {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1rem, 2.5vw, 1rem);
        padding: 0 1rem;
    }

    form {
        z-index: 10;
    }
`

const FormWrap = styled.div`
    input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 15px;
        border: none;
        margin-right: 1rem;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        input {
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0;
        }
    }
`