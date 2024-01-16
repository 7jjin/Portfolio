import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form';
import { Alert } from 'antd';

interface Inputs {
    user_name: string;
    user_email: string;
    message: string;
}

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);

    // alert 메세지를 위한 상태
    const [isMailSent, setIsMailSent] = useState(false);
    const [isMailFailed, setIsMailFailed] = useState(false);

    // react-hook-form
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ mode: 'onBlur' });

    // alert 창 사라지게 하기
    useEffect(() => {
        setTimeout(() => {
            setIsMailSent(false);
            setIsMailFailed(false);
        }, 3000);
    }, [isMailSent, isMailFailed]);

    // 폼 전송 성공 시
    const onValid: SubmitHandler<Inputs> = async () => {
        try {
            await sendEmail();
            setIsMailSent(true);
            reset();
        } catch (error) {
            console.log('폼전송 실패', error);
        }
    };

    // 폼 전송 실패 시
    const onInvalid = (errors: FieldErrors) => {
        setIsMailFailed(true);
    };

    // email.js에서 이메일을 전송하는 함수
    const sendEmail = () => {
        if (form && form.current) {
            emailjs.sendForm('service_61vguni', 'template_nyjjsdt', form.current, process.env.REACT_APP_API_KEY).then(
                (result) => {
                    console.log(result.text);
                    reset();
                },
                (error) => {
                    console.log(error.text);
                },
            );
        }
    };
    return (
        <>
            <_contactBox id="contactBox" ref={form} onSubmit={handleSubmit(onValid, onInvalid)}>
                {isMailSent && <Alert message="이메일이 전송되었습니다." type="success" showIcon className="alert" />}
                {isMailFailed && <Alert message="빈칸을 채워주세요." type="error" showIcon className="alert" />}
                <_titleBox className="titleBox">
                    <h2>Contact Me!</h2>
                </_titleBox>
                <_contentBox className="contentBox">
                    <div className="upBox">
                        <_nameBox className="nameBox">
                            <_nameTitleBox className="nameTitleBox">
                                <div>
                                    <span>Name</span>
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
                            <_errorBox className={errors.user_name && errors.user_name.message ? 'fadeIn' : 'fadeOut'}>
                                {errors.user_name && errors.user_name.message}
                            </_errorBox>
                        </_nameBox>
                        <_emailBox className="emailBox">
                            <_nameTitleBox className="emailTitleBox">
                                <div>
                                    <span>Email</span>
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
                            <_errorBox
                                className={errors.user_email && errors.user_email.message ? 'fadeIn' : 'fadeOut'}
                            >
                                {errors.user_email && errors.user_email.message}
                            </_errorBox>
                        </_emailBox>
                    </div>
                    <div className="downBox">
                        <div className="messageBox">
                            <_nameTitleBox className="messageTitleBox">
                                <div>
                                    <span>Message</span>
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
                            <_errorBox className={errors.message && errors.message.message ? 'fadeIn' : 'fadeOut'}>
                                {errors.message && errors.message.message}
                            </_errorBox>
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
    padding: 8rem 5rem 5rem;

    & > .alert {
        opacity: 1;
        width: 580px;
        position: absolute;
        top: 3rem;
        animation: slideIn 3s ease-in-out;
    }
    @keyframes slideIn {
        0% {
            transform: translateY(-4vh);
            opacity: 0;
        }
        25% {
            transform: translateY(0vh);
            opacity: 1;
        }
        75% {
            transform: translateY(0vh);
            opacity: 1;
        }
        100% {
            transform: translateY(-4vh);
            opacity: 0;
        }
    }
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
        height: 25%;
        display: flex;
        justify-content: space-between;
    }
`;
const _nameBox = styled.div`
    width: 40%;
`;
const _nameTitleBox = styled.div`
    display: flex;
    & > :nth-child(1) > span {
        margin-right: 5px;
        font-size: 20px;
    }
`;
const _nameContentBox = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
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
    background: none;
    border-radius: 5px;
    border: 2px solid black;
`;

const _buttonBox = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: flex-end;
    & > button {
        font-size: 24px;
        display: flex;
        align-items: center;
        padding: 4px 8px;
        border-radius: 5px;
        background: linear-gradient(to right, transparent 50%, rgb(159 122 234 / 50%) 50%) 0px 0px / 200%;
        transition: all 0.25s ease 0s;
        &:hover {
            background-position: -100% 0px;
        }
    }
`;

// error 메시지 박스
const _errorBox = styled.p`
    display: inline;
    border-radius: 4px;
    background-color: rgba(97, 97, 97, 0.92);
    color: white;
    font-size: 0.77rem;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &.fadeIn {
        opacity: 1;
        padding: 4px 8px;
    }
    &.fadeOut {
        opacity: 0;
        padding: 0px;
    }
    & > :nth-child(2) {
        color: red;
    }
`;
export default Contact;
