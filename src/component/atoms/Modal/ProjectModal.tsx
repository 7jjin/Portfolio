import styled from 'styled-components';

interface Props {
    children: string;
    setOnModal: (state: boolean) => void;
}

const ProjectModal: React.FC<Props> = ({ children, setOnModal }: Props) => {
    return (
        <>
            <_background className="background">
                <_content className="content">
                    <div> Hello</div>
                    <button onClick={() => setOnModal(false)}>X</button>
                </_content>
            </_background>
        </>
    );
};

const _background = styled.div`
    height: 100%;
    width: 100%;
    margin-left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
`;

const _content = styled.div`
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    height: 85%;
    width: 75%;
    overflow: auto;
    background: #fff3f3;
`;

export default ProjectModal;
