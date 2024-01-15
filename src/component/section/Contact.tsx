import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import React, { FormEvent, useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
    user_name: string;
    user_email: string;
    message: string;
}

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);

    // react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        watch,
    } = useForm<Inputs>({ mode: 'onBlur' });

    const [nameWatch, emailWatch, messageWatch] = watch(['user_name', 'user_email', 'message']);

    // console.log(nameWatch, emailWatch, messageWatch);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        sendEmail();
    };

    const sendEmail = () => {
        if (form && form.current) {
            emailjs.sendForm('service_61vguni', 'template_nyjjsdt', form.current, process.env.REACT_APP_API_KEY).then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
        }
    };
    return (
        <>
            <_contactBox id="contactBox" ref={form} onSubmit={handleSubmit(onSubmit)}>
                <_titleBox className="titleBox">
                    <h2>Contact Me!</h2>
                </_titleBox>
                <_contentBox className="contentBox">
                    <div className="upBox">
                        <_nameBox className="nameBox">
                            <_nameTitleBox className="nameTitleBox">
                                <div>
                                    <span>Name</span>
                                    <p className={errors.user_name && errors.user_name.message ? 'fadeIn' : 'fadeOut'}>
                                        {errors.user_name && errors.user_name.message}
                                    </p>
                                </div>
                            </_nameTitleBox>

                            <_nameContentBox className="nameContentBox">
                                <input
                                    type="text"
                                    {...register('user_name', {
                                        required: true,
                                        minLength: { message: '최소 2글자 이상 작성해주세요', value: 2 },
                                    })}
                                    autoComplete="off"
                                />
                            </_nameContentBox>
                        </_nameBox>
                        <_emailBox className="emailBox">
                            <_nameTitleBox className="emailTitleBox">
                                <div>
                                    <span>Email</span>
                                    <p
                                        className={
                                            errors.user_email && errors.user_email.message ? 'fadeIn' : 'fadeOut'
                                        }
                                    >
                                        {errors.user_email && errors.user_email.message}
                                    </p>
                                </div>
                            </_nameTitleBox>
                            <_nameContentBox className="emailContentBox">
                                <input
                                    type="text"
                                    {...register('user_email', {
                                        required: true,
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: '이메일 형식에 맞지 않습니다.',
                                        },
                                    })}
                                    autoComplete="off"
                                />
                            </_nameContentBox>
                        </_emailBox>
                    </div>
                    <div className="downBox">
                        <div className="messageBox">
                            <_nameTitleBox className="messageTitleBox">
                                <div>
                                    <span>Message</span>
                                    <p className={errors.message && errors.message.message ? 'fadeIn' : 'fadeOut'}>
                                        {errors.message && errors.message.message}
                                    </p>
                                </div>
                            </_nameTitleBox>
                            <_nameContentBox className="messageContentBox">
                                <_textarea
                                    rows={7}
                                    {...register('message', {
                                        required: true,
                                        minLength: { message: '최소 2글자 이상 작성해주세요', value: 2 },
                                    })}
                                />
                            </_nameContentBox>
                        </div>
                    </div>
                    <_buttonBox className="buttonBox">
                        <button type="submit" value="Send">
                            Submit
                            <AiOutlineArrowRight />
                        </button>
                    </_buttonBox>
                </_contentBox>
            </_contactBox>
        </>
    );
};
const _contactBox = styled.form`
    position: relative;
    left: 10%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fffede;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 5rem 5rem;
`;
const _titleBox = styled.div`
    text-align: center;

    & > h2 {
        font-size: 40px;
        font-family: 'title2', sans-serif;
    }
`;
const _contentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 900px;
    padding: 6rem 12rem 0rem;
    & > :nth-child(1) {
        height: 35%;
        display: flex;
        justify-content: space-between;
    }
`;
const _nameBox = styled.div`
    width: 40%;
`;
const _nameTitleBox = styled.div`
    display: flex;
    min-height: 4rem;
    & > :nth-child(1) > span {
        margin-right: 5px;
        font-size: 24px;
    }
    & > :nth-child(1) > p {
        border-radius: 4px;

        background-color: rgba(97, 97, 97, 0.92);

        color: white;
        font-size: 0.77rem;
        margin-top: 5px;
        transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        &.fadeIn {
            opacity: 1;
            padding: 4px 8px;
        }
        &.fadeOut {
            opacity: 0;
            padding: 0px;
        }
    }
    & > :nth-child(2) {
        color: red;
    }
`;
const _nameContentBox = styled.div`
    margin-top: 5px;
    & > input {
        width: 100%;
        font-size: 16px;
        padding: 5px 7px;
        outline: none;
        border: none;
        background: none;
        border-bottom: 2px solid black;
    }
`;
const _emailBox = styled.div`
    width: 40%;
`;
const _textarea = styled.textarea`
    width: 100%;
    resize: none;
    font-size: 16px;
    border: none;
    background: none;
    border-bottom: 2px solid black;
`;

const _buttonBox = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: flex-end;
    & > button {
        font-size: 24px;
        border-bottom: 2px solid black;
        display: flex;
        align-items: center;
    }
`;
export default Contact;
