import styled from 'styled-components'


const Wrapper = styled.div`
    width: 100%;
    background-color:#1D2228;
    overflow: hidden;
    margin: 4px 32px;
    font-size: 1rem;
    display: flex;
    .text{
        margin-top: 2rem;
        width: 60%;
        h2{
        font-size: 2.25rem;
        span{
            color: #FB8122;
        }
    }
    p{
        width: 80%;
        line-height: 1.5rem;
    }
    button{
        background-color: #FB8122;
        padding: 4px 16px;
        font-size: 1.2rem;
        margin: 8px;
        border-radius: 16px;
        border: none;
        color: white;
        font-weight: 600;
        transition: ease 0.5s;
        &:hover{
            background-color: white;
            color: #FB8122;
        }
    }
}
    .image{
        margin-top: 1.5rem;
        width: 50%;
        height: 100%;
        justify-content: center;
        img{
            padding: 16px;
            width:60%;
            border-radius: 50%;
            transition: all 0.5s;
            animation: bounce 2s infinite;
        }
    }
    @keyframes bounce {
        0%{
            transform: translateY(-5%);
        }
        50%{
            transform: translateY(5%);
        }
        100%{
            transform: translateY(-5%);
        }
        
    }
    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
        margin: 16px 0px;
        .text{
            width: 95%;
            margin: 1rem 1rem;
            p{
            width: 100%;
        }
        }
        .image {
            width: 95%;
            img{
            width: 90%;
        }}
        
    }
`

export default Wrapper