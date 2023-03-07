import styled from "styled-components";

export const ContactsWrapper = styled.div`
    padding-left: 15px;
    margin: 0 auto;
    font-family: Poppins;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    color: #777;
    text-transform: none;
    font-weight: 400;
    font-style: normal;

   .heading_primary {
    color: #118acb;
    position: relative;
    display: inline-block;
    padding-left: 70px;
    font-weight: 700;
    font-size: 18px;
   }

   .heading_primary:before{
    width: 60px;
    border-top: 2px solid #118acb;
    content: "";
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0,-50%);
   }

   .icons {
        display: flex;
        gap: 2rem;
    }

   .facebook-icon{
        path {
            fill: #777;
        }
    }

   .facebook-icon:hover{
        path {
            fill: #314B7C;
        }
   }
   
   .instagram-icon {
        color: #777;
    }

   .instagram-icon:hover{
        color: #D95443;
    }
    .map {
        margin: 3rem 1rem 0 1rem;
            iframe {
                width: 100%;
            }
        }

    @media only screen and (min-width: 1000px) {
        width: 970px;
        .map {
            iframe {
                width: 970px;
                height: 500px;
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        width: 1200px;
        .map {
            iframe {
                width: 1200px;
                height: 500px;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .map {
            iframe {
                height: 300px;
            }
        }
    }
`;
