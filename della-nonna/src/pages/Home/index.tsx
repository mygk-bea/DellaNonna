import { useNavigate } from "react-router-dom";
import BoxContainer from "../../components/common/BoxContainer";
import Divider from "../../components/common/Divider";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import MenuItem from "../../components/common/MenuItem";
import Page from "../../components/common/Page";
import styled from './Home.module.scss';
import { useState, useEffect } from 'react';

interface Receita {
    nome_user: string;
    nome: string;
    data: Date;
    modoPreparo: string;
    ingredientes: { nomeIngred: string; quantidade: number }[];
    favoritado: boolean;
    imagem: string;
}

export default function Home() {
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem('user');
        navigate('/');
    };

    const [receitas, setReceitas] = useState<Receita[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchReceitas = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user') || '{}');
                const nomeUser = user?.name;

                if (!nomeUser) {
                    setError("Usuário não logado");
                    return;
                }

                const response = await fetch("http://localhost:3000/api/receitas", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "nome-user": nomeUser, // Enviando o ID do usuário no cabeçalho
                    },
                });

                if (!response.ok) {
                    throw new Error("Erro ao buscar receitas");
                }

                const data = await response.json();
                setReceitas(data);
                console.log(data); // Mostra as receitas retornadas
            } catch (error) {
                setError(error.message);
                console.error("Erro ao chamar a API:", error);
            }
        };

        fetchReceitas();
    }, []);

    const handleNext = () => {
        if (currentIndex < receitas.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="container">
            <Header display="flex"></Header>
            <BoxContainer hasMenu={true}>
                <Page>
                    <div className={styled.page_ingredients}>
                        {error && <p className="error">{error}</p>}
                        {!error && receitas.length > 0 && (
                            <>
                                <div className={styled.top}>
                                    <h2>{receitas[currentIndex]?.nome}</h2>
                                    <p>{new Date(receitas[currentIndex]?.data).toLocaleDateString()}</p>
                                </div>
                                <h2>Ingredientes</h2>
                                <ul>
                                    {receitas[currentIndex]?.ingredientes.map((ing, idx) => (
                                        <li key={idx}>
                                            {ing.quantidade}x {ing.nomeIngred}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {receitas.length === 0 && <p>Nenhuma receita encontrada.</p>}
                    </div>
                </Page>

                <Divider/>

                <Page>
                    <div className={styled.page_prepare}>
                        {error && <p className="error">{error}</p>}
                        {!error && receitas.length > 0 && (
                            <>
                                <h2>Modo de Preparo</h2>
                                <p>{receitas[currentIndex]?.modoPreparo}</p>
                            </>
                        )}
                        {receitas.length === 0 && <p>Nenhuma receita encontrada.</p>}
                    </div>
                </Page>


                <div className={styled.container__menu}>
                    <MenuItem namepage='Cadastrar' iconSVG='src/assets/icons/icon_plus-outline.svg'/>
                    <MenuItem namepage='Armazém' iconSVG='src/assets/icons/icon_box.svg'/>
                    <MenuItem namepage='Perfil' iconSVG='src/assets/icons/icon_person.svg'/>
                    <MenuItem namepage='Sair' iconSVG='src/assets/icons/icon_exit.svg' onClick={handleLogout}/>
                </div>
            </BoxContainer>
            <Footer next={handleNext} previous={handlePrevious} index={currentIndex} size={receitas.length} fav={receitas[currentIndex]?.favoritado}/>
        </div>
    )
}