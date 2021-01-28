import styled from 'styled-components';
import {useRouter} from 'next/router';

const HeaderContainer = styled.header`
text-align: center;
color: white;

img{
    align-self: center;
    justify-self: center;
    width: 25rem;
    margin-bottom: 1rem;
    cursor: pointer;
}

nav ul{
    float: right;
    padding-inline-start: 0px;
    margin: 0;
}

nav ul li{
    padding-right: 1rem;
    display: inline;
    cursor: pointer;
}

@media screen and (max-width: 375px){
    img{
    align-self: center;
    justify-self: center;
    width: 25rem;
    margin-bottom: 1rem;
    cursor: pointer;
    //visibility: hidden;
}

}
`;

export default function Header() {

    const router = useRouter();

    return (
        <HeaderContainer>
            <img src="logo.png" onClick={ () => router.push('/') } />
            <nav>
                <ul>
                    <li><a onClick={ () => router.push('/portfolio') }> Portfólio </a> </li>
                    <li onClick={ () => router.push('/') } >Serviços</li>
                    <li onClick={ () => router.push('/contato') } >Contato</li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}