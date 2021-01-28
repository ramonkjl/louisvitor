import styled from 'styled-components';

const HeaderContainer = styled.header`
text-align: center;

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
`;

export default function Header() {
    return (
        <HeaderContainer>
            <img src="logo.png" />
            <nav /* style={{float: "right", width: "100%", padding: "0px", margin: "0px" }} */>
                <ul>
                    <li>Portfólio</li>
                    <li>Serviços</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}